---
title: Multi threading
---


### Multi-threading in Javascript?

Yes, it's very possible using worker threads. Here is a somewhat basic example, which I will explain. The concept of worker threads is that you can essentially create an external thread to perform calculations without blocking the main JavaScript event loop. This is particularly useful for handling large tasks that can or should be divided into smaller segments.

The logic behind it is as follows: In my case, the 'main.js' (written in TypeScript) calls upon a 'worker.js' to execute a specific task. 
It sends all the necessary data via the postMessage function. Once the worker completes its task, it responds with its own postMessage. 
This worker operates within its own dedicated thread, resulting in significant performance improvements. 
However, this approach also introduces challenges not typically encountered in JavaScript, such as race conditions or the need to share data between threads.

Promises here are only being used because I want the workers to be able, even if they might not, 
to perform requests that might require the asynchronous nature that promises provide.

```js
import { Worker } from "worker_threads";
import os from "os";
class Threading {

    public threadLimit: number = os.cpus().length;
    public threadCount: Map<number, any> = new Map();

    countThreads(){
        return this.threadCount.size;
    }

    start(data: any) {
        return new Promise((resolve, reject) => {
            if(this.threadCount.size <= this.threadLimit){
                const worker: Worker = new Worker(__dirname + "/worker.js", { workerData: data.toString() });
                const threadId = worker.threadId;

                worker.on("message", (msg) => {
                    this.threadCount.delete(threadId);
                    resolve(msg);
                });

                worker.on("error", (err) => {
                    this.threadCount.delete(threadId);
                    reject(err);
                });

                this.threadCount.set(threadId, worker);
            } else {
                reject('MAX_THREAD_REACHED')
            }
        });
    }
}
```

This code performs a slightly unique task compared to more typical use cases of workers. Instead of invoking a pre-defined worker responsible for a specific role, 
this code intentionally converts a function to a string using .toString(). 
This stringified function can then be passed in and executed using eval(). As a result, 
the end user has the flexibility to input any function call they prefer, enabling the invocation of entirely custom functions, and this process can be treated as asynchronous.

```js
worker.on("message", (msg) => {
    this.threadCount.delete(threadId);
    resolve(msg);
});

worker.on("error", (err) => {
    this.threadCount.delete(threadId);
    reject(err);
});
```

On message and on error are subscription events that main.js will wait for, once either the worker completes 
its task and performs a `.postMessage()` or errors out and crashes it will be handled by either a resolve or reject. 


```js
import { parentPort, workerData } from 'worker_threads';

if(parentPort != null){
    async function performTask(func: any) { return await eval(func)(); }
    (async () => {
        try {
            const result = await performTask(workerData);
            parentPort.postMessage(result);
        } catch(err: any){
            parentPort.postMessage(err.toString());
        }
    })()
}
```


### What is threadLimit? 

Your CPU can only manage a certain number of threads simultaneously, which varies depending on the specific architecture and silicon involved. A rough guideline to follow is that the number of hyper-threaded cores you possess corresponds to the number of threads available in Node.js. While you can allocate more workers than there are threads, doing so won't yield any performance advantages. In fact, it might have the opposite effect, as the CPU would then need to handle additional memory operations, potentially leading to decreased performance.

I am currently ensuring that it doesn't exceed my specified limit. While my current approach is somewhat rudimentary by blocking excess threads, an alternative method could involve queuing them and gradually introducing new threads as they become available. However, for a simple design, the current approach works effectively.

