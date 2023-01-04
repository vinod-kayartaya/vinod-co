## Configuration and customization in Spring Boot

Spring Boot allows you to externalize the configuration of your application, which means you can specify the configuration in a separate file rather than hardcoding it in your application code. This makes it easier to change the configuration of your application without having to rebuild and redeploy it.

Spring Boot uses a property file hierarchy to determine the configuration of your application. It will look for property files in the following locations, in this order:

-   application.properties or application.yml in the classpath root
-   application-{profile}.properties or application-{profile}.yml in the classpath root
-   application.properties or application.yml in the current directory
-   application-{profile}.properties or application-{profile}.yml in the current directory
-   You can also specify a different location for the property files using the spring.config.name and spring.config.location properties.

In addition to property files, Spring Boot also supports YAML configuration files. YAML is a human-readable data serialization format that is often used as an alternative to property files. To use YAML configuration files, you will need to include the SnakeYAML library in your project and use the .yml file extension instead of .properties.

Spring Boot also provides a number of "configuration properties" that you can use to customize the behavior of your application. These properties are defined in the Spring Boot documentation and can be set using the property file hierarchy or using the SpringApplication.setDefaultProperties method.

Finally, Spring Boot allows you to customize the application by using the SpringApplication.addInitializers and SpringApplication.addListeners methods to add your own application initializers and listeners. This allows you to perform custom initialization and shutdown logic or to listen for specific application events.
