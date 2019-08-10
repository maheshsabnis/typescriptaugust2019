# TypeScript Programming
1. Create a package.json using npm init -y command
   1. This is the application configuration file.
      1. manages application dev. dependencies using the 'devDependencies' object
      2. runtime dependencies management using 'dependencies' object
   2. Install devDependencies using
      1. npm install --save-dev <PACKAGE-NAME1> .....
   3. Install dependencies using 
      1. npm install --save <PACKAGE-NAME1> ......
   4. Note: If u know deps. in advance, maintain it in dependencies / devDependencies section and just run npm install command
2. npm install -g typescript
   1. Install typescript in global scope of machine and it will provide access to 'tsc' tool
      1. tsc means TypeScript Compiler
         1. Transpiles .ts into .js

#=================================================================================================================

# Programming with TypeScript
1. local scope declaration
   1. the 'let' keyword to define 'Block-Scope' variable
2. Data Types
   1. number
   2. string
   3. object
   4. boolean
   5. date
   6. any
   7. union types
3. Declarations
   1. const
   2. readonly
   3. enum 
4. Array Types
   1. The Array<T> the generic class, where T can be any data-type
      1. Array<string>, Array<number>, etc..
   2. The expression    
      1. let values =[]; will be also be in stance of Array type
   3. Array Methods
      1. push()/pop()
      2. filter() / sort() / reverse()
      3. reduce()
      4. forEach() / map()
5. Template String
   1. This is an immutable string object with parse string containing placeholders (?) as expressions (?).
      1. placeholders --> Variables of which value will be injected in string
      2. expression --> {} object that will inject the placeholder in string
      3. Syntax
         1. `${<PLACEHODLER / VARIABLE>}`  
6. Iterators with new Iteration syntax
7. Arrow Operators
   1. If a function accepts 'Callback function' as 'input parameter', then the callback function can be replaced with 'Arrow Operator as =>'
   2. Syntax
      1. if myMethod(function(v,i){.......})
      2. then with arrow operator the syntax will be
      3. myMethod((v,i)=>{......})
8. Object Oriented Programming
   1. The 'class' keyword for defining class --> transpiled as IIFE
      1. constructor() method uses as constructor
         1. constructor(x:number, y:number), x and y are scoped to constructor method only
         2. constructor(private x:number, private y:number), x and y are scoped to class as private data members
         3. constructor(public x:number, public y: number), x and y are scoped to class as well as accessible out of class using its instance as public data members
      2. The 'this'  is self reference object for accessing members of class within the class as well as in derived class
      3. All methods and properties are public by default
      4. get and set methods used as properties
         1. set property always accepts an input parameter
         2. get property always returns a value
      5. No-Overloading is supported
         1. Can use a method with variable number of parameters to provide overloading like programming approach
            1. This is known as 'rest patameters'
      6. The 'extends' keyword is used for inheritence
         1. The super() for accessing base class members
      7. The interface to be implemented by class using 'implements' keyword
         1. All members must be implemented by class
         2. Use interface for reference creation for the class that implements interface
      8. To implement methods with variable number of parameters to provide overloading like situation use 'rest-parameters'  
         1. Syntax: --> methodName(...data:[]){....}
         2. internally, the rest parameter will use object.assing({},obj) concept 
9.  Promises
10. Asynchronous Programming
11. Modules

# The tsconfig.json is the TypeScript Rule configuration file for coding standards

1. To transpile TypeScript file into JavaScript file use following command
   1. tsc <File>.ts
2. To run the output JavaScript file run the following command
   1. node <File>.js
3. The default datatype of every declaration in TypeScript is 'any'

#===========================================================================================================================================================
# Programming Constructs 
1. Conditional Statements
   1. if
   2. if..else
   3. if..else-if
   4. Switch..case
2. Operators to evaluate Conditional Statements
   1. Value Equality
      1. ==
      2. 1 & "1"
         1. 1 == "1" -> True
   2. Value+Type equality (in JavaScript and TypeScript)
      1. ===  
      2. 1==="1"  -> false
   3. !== Not Equal, fisrt value and then type
   4. OR ||
   5. AND &&
   6. MOD %
3. Iteration
   1. for loop
   2. for..in
   3. for..of
   4. do..while
4.  
