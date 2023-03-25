# TDD Code Katas

## Description
A collection of TDD Kata Exercises created in Typescript and tested with Jest

- ### [About Me](ABOUTME.md)
- ### [Project Setup](SETUP.md)

## What is TDD?

## Why is TDD Valuable?
- Helps to better understand the problem statement
  - necessitates breaking the problem into smaller pieces
  - makes solving complex problems easier
- Provides a better design for the application
  - every line of code is written because of a failed test
  - no extraneous code
- Helps define the current state of the system behavior
  - Well-written test suite describes the code for even non developers
- Full suite of tests - ensuring system sanity
  - confidence in the code
  - freedom to refactor

## What's a Code Kata?

#### From [Code Kata; Way To Become A Better Software Developer](https://apiumhub.com/tech-blog-barcelona/code-kata/)

- ### A Definition

  "Code Kata in software industry. It is an exercise in programming which helps software developers improve their skills through practice and repetition. A Code Kata term was coined by Dave Thomas, co-author of the book The Pragmatic Programmer, embracing Japanese concept of Kata in the martial arts."

- ### The Goal
  "
  The basic goal of Code Kata or Kata programming is to also to preserve and transmit working techniques and master them. By practicing in a repetitive manner, regardless of the industry, the learner develops the ability to execute those techniques in a natural, reflex-like manner. Here the idea is not only learn whatever concept and do it in an automatic way, here the idea is to learn the right concept, understand it and polish it. Be confident in what you are doing. Be a master in your field.
  "

- ### Who's it for?
  "
  All great software developers that we know are as good as they are because they practice all the time. Code Kata is not just for Junior developers and recent graduates, it is for everyone, who wants to learn and practice new technique. Code Kata helps to know the theory, and to understand the mechanics, by actually applying it in practise.
  "

## The TDD Cycle

- ### Red
Write a test in the test suite for each step in the creation of the function that will satisfy the exercise constraints.
Run the test to see it fail.

- ### Green
Write just enough code in the exercise file to pass the test

- ### Refactor
Refactor your code and tests
- improve code style
- remove redundancy
- increase readability with abstraction

- ### Repeat the Cycle
Continue working through each step until the created function passes all tests and fulfills the constraints.

## Exercise Instructions
- Navigate to the `src/katas/<exercise-name>` directory
- Read the exercise README instructions
- Perform the TDD "RED" -> "GREEN" -> "REFACTOR" Cycle to solve the exercise
- Write the simplest test that will fail
- Write just enough code to make the test pass
- Look for opportunities to refactor
- Repeat

- Run all tests after each code or test update
  ```zsh 
    yarn test
  ``` 
- Check test coverage at the end of each exercise
  ```zsh 
    yarn coverage
  ``` 

### Exercises

- [FizzBuzz](src/katas/fizzbuzz/README.md)
- [Count Words](src/katas/countwords/README.md)
- [Bowling Game](src/katas/bowlinggame/README.md)

### Sample Solutions
Solutions and sample test suites for each kata exercise are included in the Solutions directory.
Try the kata exercises first. No peeking!

### Ping Pong Pair Katas
Try these kata exercises in pairs. 
- Let one person write the test
- The second writes just enough code to make the test pass
- Discuss opportunities to refactor
- Switch rolls and keep coding
