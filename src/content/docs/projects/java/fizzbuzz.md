---
title: FizzBuzz
---

This is a java implementation of the not so popular game FizzBuzz!
```java
public static List<String> fizzBuzz(){
    LinkedList<String> list = new LinkedList<String>();
    for(int i = 1; i <= 1000; i++){
        String fizz = i % 3 == 0 ? "Fizz" : "";
        String buzz = i % 5 == 0 ? "Buzz" : "";
        String result = (fizz + buzz).isEmpty() ? String.valueOf(i) : fizz + buzz;
        list.add(result);
    }

    return list;
}
```

### Step by Step Breakdown

```java
for(int i = 1; i <= 1000; i++){ /* code in here */ }
```
### For the future

This "For" loop will perform any action inside the braces until the maximum number has been incremented too.
```java
String fizz = i % 3 == 0 ? "Fizz" : "";
```
This is an example of a 'Ternary operators', think of them as basically if statements without all the braces, however unlike a if statement the true/false nature of the condition will only change what the variable is defined as.
<b>If this ternary is true then 'fizz' will be defined as "Fizz"</b>

### Linking the lists
```java
LinkedList<String> list = new LinkedList<String>();
```
This defines a linked list to be used, LinkedLists are special because they will maintain the insertion order.

### Additon of fun
```java
list.add(result)
```
All this does is add the result of both ternary's to the LinkedList defined above.

---
https://github.com/aaronburt/fizz-buzz-java