---
title: Luhn Algorithm
---


The Luhn Algorithm is the first program I wrote in Java. It's designed to check the validity of a 16-digit card number, like the ones used for payments. The main goal is to see if the card number could be correct before sending a payment request and potentially getting charged for failed attempts.

Here's how it works: First, the 16-digit card number is split into individual digits, creating an array. Then, these digits are multiplied by 2 and 1 alternatively in a specific pattern. If a multiplication results in a number larger than 9, it's split into its two digits and those are added together. For example, if we take the digit 7 and multiply it by 2, we get 14, which is more than 9. So, we split 14 into 1 and 4, and when added, they become 5.

The key idea is that for the Luhn check to pass, the final sum of all these modified digits must end in a zero. This algorithm helps verify whether a card number might be valid before making a payment request, saving you from unnecessary charges for failed attempts.


```text
Card Number:  4 9 2 9 2 0 7 3 1 3 5 0 0 1 6 8 
Pattern used: 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1
Answer:       8 9 4 9 4 0 5 3 2 3 1 0 0 1 3 8
```
Let's consider a real-world scenario. After we've gone through the process of multiplying the digits according to the pattern and collecting an array of these calculated values, the next step is to add up all the values in the array. The important thing we're checking is whether this sum ends in zero. In the specific case you mentioned, when we perform the calculations, the sum turns out to be 60, which does indeed end in zero.


Here is the Java code I created to solve this solution, it could do with some refactoring mainly on the renaming of variables, but as a first-time stab at language, I think I did quite well.

```java
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Luhn {
    public static void main(String[] args){
        /* Get data from userInput */
        Scanner userInput = new Scanner(System.in);
        System.out.println("16 Digit card number");
        String sixteenDigit = userInput.nextLine();

        List<Integer> cardNumbers = new LinkedList<>();
        List<Integer> accumulatedNumbers = new LinkedList<>();
        List<Integer> patternNumbers = new LinkedList<>();

        /* Final ensuring it isn't updated by mistake */
        final int sixteenLength = sixteenDigit.length();
        final int cardLength = 16;

        if(sixteenLength == cardLength) {
            for (var i = 0; i < sixteenLength; i++) {
                int currentChar = Integer.parseInt(String.valueOf(sixteenDigit.charAt(i)));
                cardNumbers.add(currentChar);

                int updated;
                int module = i % 2;

                if (module == 0) {
                    updated = Integer.parseInt(String.valueOf(currentChar)) * 2;
                    patternNumbers.add(2);
                } else {
                    updated = Integer.parseInt(String.valueOf(currentChar));
                    patternNumbers.add(1);
                }

                if (updated >= 10) {
                    String updatedString = String.valueOf(updated);
                    int first = Integer.parseInt(String.valueOf(updatedString.charAt(0)));
                    int second = Integer.parseInt(String.valueOf(updatedString.charAt(1)));
                    int third = first + second;
                    accumulatedNumbers.add(third);
                } else {
                    accumulatedNumbers.add(updated);
                }
            }

            int result = accumulatedNumbers.stream().mapToInt(Integer::intValue).sum();

            System.out.println(cardNumbers);
            System.out.println(patternNumbers);
            System.out.println(accumulatedNumbers);

            /* */
            if (result % 10 == 0) {
                System.out.println("Result: '" + result  + "' valid card number");
            } else {
                System.out.println("Result: '" + result  + "' invalid card number");
            }
        }
    }
}
```

--- 
Amended version
----

I rewrote an improved version of the code because I thought, "Why not?" Sure, there are perhaps some extra changes I could make, but it follows the principle of not overengineering the solution.

```java
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Luhn {
    private static List<Integer> inputCardNumber = new LinkedList<>();
    private static final List<Integer> calculatedNumbers = new LinkedList<>();

    private static boolean getSixteenDigitCardFromUser(){
        try {
            Scanner input = new Scanner(System.in);
            String output = input.nextLine();
            if(output.length() != 16){ throw new IllegalArgumentException("Requires 16-digits"); }
            inputCardNumber = output.chars().mapToObj(Character::getNumericValue).collect(Collectors.toList());
            return true;
        } catch(IllegalArgumentException iae){
            System.out.println(iae.getMessage());
            return false;
        }
    }

    private static boolean processSixteenDigitWithPattern(){
        try {
            for(int index = 0; index < inputCardNumber.size(); index++){
                int transformedValue;
                int moduleResult = index % 2;

                if(moduleResult == 0){
                    transformedValue = inputCardNumber.get(index) * 2;
                } else {
                    transformedValue = inputCardNumber.get(index);
                }

                if(transformedValue > 9){
                    int tensDigit = transformedValue / 10; // Extract tens digit
                    int onesDigit = transformedValue % 10; // Extract ones digit
                    transformedValue = tensDigit + onesDigit;
                }

                calculatedNumbers.add(transformedValue);
            }

            return true;
        } catch(Exception error){
            return false;
        }
    }

    public static boolean checkCalculatedResult(){
        int result = calculatedNumbers.stream().mapToInt(Integer::intValue).sum();
        return result % 10 == 0;
    }

    public static void main(String[] args) {
        if(getSixteenDigitCardFromUser()){
            if(processSixteenDigitWithPattern()){
                System.out.println(checkCalculatedResult());
            }
        }
    }
}
```

