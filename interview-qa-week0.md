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
