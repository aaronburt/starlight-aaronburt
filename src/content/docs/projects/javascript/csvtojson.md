---
title: CSV to JSON
---

I made this [website](https://csvtojson.aaronburt.co.uk/)

It's primary purpose was to convert CSV to JSON but doing it locally so that there are no concerns of privacy. Its powered by Vite's implementation of React which is basically better at compile times are basic performance for development.

<img src="https://storj.aaronburt.co.uk/1694639631/brave_5BpvFkBKtd.gif"/>


The structure is nothing special, it uses papaparse's parser to renders that to the screen in the standard React hydration method.

```javascript

import { useState } from 'react'
import { ParseResult, parse } from 'papaparse';
import './csvParser.css';

function csvParser() {
  const [csvData, setParsedData] = useState<null | any[]>(null);

  const handleCodeBlockChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const csvData: string = event.target.value; 
      const jsonData: ParseResult<any> = parse(csvData, { header: true });
      setParsedData(jsonData.data)
    } catch(err: any){
      setParsedData(null);
    }
  } 

  const copyAsPlain = () => {
    const plaintext: string | undefined = document.getElementById('codeblock')?.innerHTML;
    if(typeof plaintext === undefined) return 'null'; 
    if(plaintext){
      navigator.clipboard.writeText(plaintext).catch(console.log)
    }
  }

  return(
    <>
      <code id="codeblock">{JSON.stringify(csvData, null)}</code>
      <button onClick={copyAsPlain}>Copy JSON as plaintext</button>
      <textarea placeholder='CSV Goes here..' onChange={handleCodeBlockChange}></textarea>
      <div className='disclaimer'>
        Disclaimer: All CSV to JSON conversions on this website are processed locally on your browser, ensuring your data remains secure and private. We do not store or transmit any CSV files or resulting JSON outputs to external servers. Please exercise caution when sharing sensitive information in your CSV files, as we cannot be held responsible for any unauthorized access or breaches.
      </div>
    </>  
  )
}

export default csvParser

```