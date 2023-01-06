## The **finally** block

![](/assets/post-images/finally.jpeg)


In Java, the finally block is a block of code that is used to ensure that a certain piece of code is executed after a try block, whether or not an exception is thrown.


Here is an example of how to use a finally block in Java:

```javascript
try {
   // code that might throw an exception
} catch (Exception e) {
   // code to handle the exception
} finally {
   // code that will always be executed
}
```

The finally block is optional, but if it is used, it must be the last block in a try-catch statement. The code in the finally block will always be executed, regardless of whether an exception is thrown or not. This is useful for cleaning up resources or performing other tasks that should be done regardless of whether an exception occurs.

For example, you might use a finally block to close a file that was opened in the try block, or to release a lock that was acquired in the try block.

It's important to note that if an exception is thrown in the try block and not caught in a catch block, the finally block will still be executed before the exception is propagated to the caller.


<iframe src="https://player.vimeo.com/video/701133837?h=ad03651d98" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/701133837">01_A_block_that_executes_always.mp4</a> from <a href="https://vimeo.com/user19584879">Manipal</a> on <a href="https://vimeo.com">Vimeo</a>.</p>


