#Day 1

What is the difference between 401 and 403?

Error status 401 means that server dont know who sent the request but he must know it and 403 means that server know person but that person can't send that request.

What is middleware and when does it run?

Middleware is special logic to help communicate between the devices. That happens before HTTP request is recieved or sent.

#Day 2
Why use TypeScript in production?
We don't use TS in production. It's only Development stage. If we're asking why we should use TS, it's because it ensures we can keep track of variable types. This helps us avoid accidentally changing them when building more complex things, and it saves us time trying to figure out where that happened

Difference between type and interface in practice?

- Types can define primitive values, interfaces don't,
- Types are closed and interfaces are open. This mean interfaces can be overwritten later in code,
- Interfaces get more detailed error message than types
- Both can be extended, but interfaces offer a more natural syntax that aligns better with object-oriented programming principles
- Types are better in this situations: union types, function types, utility types

#Day 3
What does a controller do vs service?
We can compare the controller to a reception desk. An HTTP request arrives and is converted to the application layer. It is verified that the data is in the correct format and that the person can send the request. Then, it is forwarded to the service, i.e., the appropriate department, where that department is already handling this specific request – logic.

Why dependency injection helps testing?
This makes it very easy to replace certain elements. You can create mocks of functions that don't need to be tested in a given location, or you can replace logic like prism, which can't be tested so easily.

#Dat 4
Why validate at API boundary?
We should validate data before it reaches the service, as this ensures it's externally sourced. These include security considerations (e.g., you might accidentally allow an admin account to be created), data integrity, and application stability.

Difference between validation error and business error?
a validation error concerns incorrect input data, a business error concerns an error during the processing of this data or an error in the logic itself.
