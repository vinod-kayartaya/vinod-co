## How to create a 'slug' in JavaScript


![](/assets/post-images/slug.png)


Here's a simple Node.js function that converts a string into a slug (a string that can be used in a URL):

```javascript
const slugify = (string) => {
  return string.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

console.log(slugify('Hello World'));  // Output: "hello-world"
console.log(slugify('Hello  World'));  // Output: "hello-world"
console.log(slugify('Hello World!'));  // Output: "hello-world"
```

This function does the following:

Converts the string to lowercase using the String.prototype.toLowerCase() method.
Replaces all non-alphanumeric characters with hyphens using the String.prototype.replace() method.
Removes any leading or trailing hyphens using the String.prototype.replace() method.
