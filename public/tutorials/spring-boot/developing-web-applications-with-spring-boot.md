## Developing web applications with Spring Boot

Spring Boot makes it easy to develop web applications. To set up a web application in Spring Boot, you will need to include the spring-boot-starter-web dependency in your project and create a controller to handle HTTP requests.

Here is an example of a simple controller that handles GET requests to the "/hello" URL:

```java
@RestController
public class HelloController {

  @GetMapping("/hello")
  public String sayHello() {
    return "Hello, World!";
  }
}
```

This controller is annotated with the @RestController annotation, which indicates that it is a controller and that its methods should return data rather than a view template. It also has a single method, sayHello, which is annotated with the @GetMapping annotation to specify that it should handle GET requests to the "/hello" URL.

You can also use the @RequestMapping annotation to handle different types of HTTP requests and to specify the URL that the method should handle. For example:

```java
@Controller
public class UserController {

  @RequestMapping(value="/users", method=RequestMethod.GET)
  public List<User> getUsers() {
    return userService.findAll();
  }

  @RequestMapping(value="/users", method=RequestMethod.POST)
  public void createUser(@RequestBody User user) {
    userService.save(user);
  }
}
```

In this example, the UserController class has two methods: one to handle GET requests to the "/users" URL and one to handle POST requests to the same URL. The getUsers method returns a list of users, and the createUser method creates a new user using the data provided in the request body.

To render HTML templates, you can use a template engine such as Thymeleaf. To use Thymeleaf in your application, you will need to include the spring-boot-starter-thymeleaf dependency and create your templates in the src/main/resources/templates directory.

Here is an example of a simple Thymeleaf template that displays a list of users:

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
    <head>
        <title>User List</title>
    </head>
    <body>
        <h1>User List</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Username</th>
            </tr>
            <tr th:each="user : ${users}">
                <td th:text="${user.id}"></td>
                <td th:text="${user.username}"></td>
            </tr>
        </table>
    </body>
</html>
```

In this template, the th:each attribute is used to iterate over the list of users and display their ID and username in a table.

To serve static content such as images, CSS files, and JavaScript files, you can place them in the src/main/resources/static directory. They will then be available at the root URL of your application. For example, if you have an image file called "logo.png" in the static directory, you can display it in an HTML template like this:

```html
<img src="/logo.png" alt="

```
