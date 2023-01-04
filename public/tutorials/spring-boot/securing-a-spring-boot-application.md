## Securing a Spring Boot application

Spring Boot allows you to secure your application using the Spring Security framework. Spring Security is a powerful and flexible security framework that provides a range of authentication and authorization options.

To use Spring Security in your application, you will need to include the spring-boot-starter-security dependency in your project and create a configuration class that is annotated with @EnableWebSecurity and extends the WebSecurityConfigurerAdapter class.

In the configuration class, you can override the configure method to specify the security rules for your application. For example, you can use the antMatchers method to specify which URLs should be protected and which should be open to all users. You can also use the hasRole method to specify which roles are allowed to access a particular URL.

Here is an example of how to configure security in a Spring Boot application:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
        .antMatchers("/admin/**").hasRole("ADMIN")
        .antMatchers("/user/**").hasRole("USER")
        .anyRequest().permitAll();
  }
}
```

In this example, the configure method specifies that URLs starting with "/admin/" can only be accessed by users with the "ADMIN" role, and URLs starting with "/user/" can only be accessed by users with the "USER" role. All other URLs are open to all users.

In addition to URL-based security, Spring Security also provides a number of options for securing specific resources, such as form-based authentication, HTTP basic authentication, and OAuth 2.0. You can use these options to secure your application in different ways depending on your needs.

For example, to use form-based authentication, you can do the following:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.formLogin()
        .loginPage("/login")
        .permitAll();
  }
}
```

This configuration specifies that the "/login" URL should be the login page for the application and that it should be open to all users. You will also need to create a login form and a login processing URL to handle the submission of the login form.

To use HTTP basic authentication, you can do the following:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.httpBasic();
  }
}
```

This configuration enables HTTP basic authentication for the entire application. You will need to specify a user details service to load the user details from

To use OAuth 2.0 in your Spring Boot application, you will need to create an authorization server that is responsible for issuing access tokens to clients. To do this, you will need to include the spring-security-oauth2 dependency in your project and create a configuration class that is annotated with @EnableAuthorizationServer and extends the AuthorizationServerConfigurerAdapter class.

In the configuration class, you can override the configure method to specify the client details and the authorization and token endpoints. You will also need to configure an authentication manager to handle the authentication of users.

Here is an example of how to configure an OAuth 2.0 authorization server in Spring Boot:

```java
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
    clients.inMemory()
           .withClient("clientId")
           .secret(passwordEncoder.encode("clientSecret"))
           .authorizedGrantTypes("authorization_code", "refresh_token")
           .scopes("user_info")
           .autoApprove(true);
  }

  @Override
  public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
    endpoints.authenticationManager(authenticationManager);
  }
}
```

In this example, the configure method specifies a single client with the ID "clientId" and the secret "clientSecret". The client is authorized to use the authorization code and refresh token grant types and has the "user_info" scope. The autoApprove setting specifies that the authorization process should be skipped for this client.

The configure method also specifies the authentication manager, which is responsible for authenticating the user when the authorization code grant type is used.

To use the OAuth 2.0 authorization server in your application, you will also need to create an OAuth 2.0 client that can request access tokens from the authorization server. To do this, you can include the spring-security-oauth2-client dependency in your project and create a configuration class that is annotated with @EnableOAuth2Client and extends the OAuth2ClientConfigurerAdapter class.

In the configuration class, you can override the configure method to specify the client details and the authorization and token endpoints of the authorization server.

Here is an example of how to configure an OAuth 2.0 client in Spring Boot:

```java
@Configuration
@EnableOAuth2Client
public class OAuth2ClientConfig extends OAuth2ClientConfigurerAdapter {

  @Override
  public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
    clients.inMemory()
           .withClient("clientId")
           .secret("clientSecret")
           .authorizedGrantTypes("authorization_code")
           .scopes("user_info")
           .redirectUris("http://localhost:8080/login/oauth2/code/auth-server");
  }
}
```

In this example, the configure method specifies a single client with the ID "clientId" and the secret "clientSecret". The client is authorized to use the authorization code grant type and has the "user_info" scope.

To use the OAuth 2.0 client in your application, you will need to create a login form that redirects the user to the authorization server to grant access. You will also need to create a login processing URL that handles the authorization code that is returned by the authorization server and exchanges it for an access token.

Here is an example of a login form for an OAuth 2.0 client:

```html
<form action="/login/oauth2/code/auth-server" method="get">
    <button type="submit">Sign in with Auth Server</button>
</form>
```

This form sends a GET request to the "/login/oauth2/code/auth-server" URL, which is the login processing URL for the OAuth 2.0 client.

The login processing URL should be configured to handle the authorization code that is returned by the authorization server and exchange it for an access token. It should also handle any errors that may occur during the authorization process.

Here is an example of a login processing URL for an OAuth 2.0 client:

```java
@GetMapping("/login/oauth2/code/{registrationId}")
public String login(@PathVariable String registrationId,
                    @AuthenticationPrincipal OAuth2User user) {
  if (user == null) {
    throw new IllegalStateException("User not found");
  }

  // save user and redirect to home page
}
```

This controller method handles the GET request to the login processing URL and retrieves the authenticated user using the @AuthenticationPrincipal annotation. If the user is not found, it throws an IllegalStateException. If the user is found, it can be saved and the user can be redirected to the home page.

Overall, Spring Security and OAuth 2.0 provide a powerful and flexible way to secure your Spring Boot application and protect it from unauthorized access.
