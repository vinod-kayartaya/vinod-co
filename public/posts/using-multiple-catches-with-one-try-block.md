## Using multiple catches with one try block in Java

![](/assets/post-images/catch.png)

In Java, you can use multiple catch blocks with a single try block to handle different types of exceptions. This can be useful if you want to handle different exceptions differently, or if you want to handle the same exception differently depending on the circumstances.

Here is an example of using multiple catch blocks with a single try block in Java:

```javascript
try {
   // code that might throw an exception
} catch (FileNotFoundException e) {
   // code to handle a FileNotFoundException
} catch (IOException e) {
   // code to handle an IOException
} catch (Exception e) {
   // code to handle any other exception
}
```


In this example, the try block contains code that might throw a FileNotFoundException, an IOException, or any other type of exception. If a FileNotFoundException is thrown, it will be caught by the first catch block and the corresponding code will be executed. If an IOException is thrown, it will be caught by the second catch block and the corresponding code will be executed. If any other type of exception is thrown, it will be caught by the third catch block and the corresponding code will be executed.

It's important to note that the catch blocks are checked in the order that they appear, so it's important to put the most specific catch blocks first and the least specific ones last. In the example above, the FileNotFoundException catch block should come before the IOException catch block, because a FileNotFoundException is a more specific type of IOException.

It's also important to note that you can only have one catch block for each type of exception. If you try to specify multiple catch blocks for the same exception type, you will get a compile-time error.


<iframe src="https://player.vimeo.com/video/701133606?h=73191d8876" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/701133606">07_Using_multiple_catches_with_one_try_block - Demo.mp4</a> from <a href="https://vimeo.com/user19584879">Manipal</a> on <a href="https://vimeo.com">Vimeo</a>.</p>