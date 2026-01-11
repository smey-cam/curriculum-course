// Slides data for courses
// Each course module can have slides with lessons and examples

export const slidesData = {
  python: {
    // Module 1: Introduction to Python
    1: [
      {
        type: 'overview',
        title: 'Welcome to Python Programming',
        content:
          'Python is a high-level, interpreted programming language known for its simplicity and readability. In this module, you will learn the fundamentals of Python programming.',
        topics: [
          { title: 'Python Overview', description: 'What is Python and why learn it?' },
          { title: 'Installation', description: 'Setting up Python on your system' },
          { title: 'IDE Setup', description: 'Choosing and configuring an IDE' },
          { title: 'First Program', description: 'Writing and running your first Python script' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },
    
      {
        type: 'lesson',
        title: 'Python Overview',
        content: [
          'Python is a versatile, high-level programming language created by Guido van Rossum and first released in 1991.',
          'Python emphasizes code readability with its notable use of significant whitespace.',
          'Its syntax allows developers to write clear and concise code using fewer lines compared to many other languages.',
          'Python is widely used in web development, data science, artificial intelligence, automation, and scientific computing.'
        ],
        points: [
          'Simple and easy-to-learn syntax',
          'Interpreted language (no compilation required)',
          'Cross-platform support (Windows, macOS, Linux)',
          'Large standard library',
          'Strong community and ecosystem'
        ]
      },
    
      {
        type: 'lesson',
        title: 'Installing Python',
        content: [
          'Python can be installed easily on all major operating systems.',
          'The official Python website provides the latest stable versions.',
          'During installation, it is important to add Python to the system PATH.'
        ],
        points: [
          'Visit https://www.python.org',
          'Download the latest Python version',
          'Run the installer',
          'Check “Add Python to PATH”',
          'Verify installation using the terminal'
        ]
      },
    
      {
        type: 'lesson',
        title: 'IDE Setup',
        content: [
          'An IDE (Integrated Development Environment) helps you write, run, and debug Python code efficiently.',
          'VS Code is a popular and beginner-friendly editor with excellent Python support.'
        ],
        points: [
          'Install VS Code',
          'Install Python extension',
          'Select Python interpreter',
          'Create a .py file',
          'Run Python code'
        ]
      },
    
      {
        type: 'example',
        title: 'Your First Python Program',
        description: 'Let\'s write a simple "Hello, World!" program.',
        code: `# This is a comment in Python
    
    print("Hello, World!")
    print("Welcome to Python Programming!")`,
        output: `Hello, World!
    Welcome to Python Programming!`,
        explanation:
          'The print() function outputs text to the console. Lines starting with # are comments.'
      },
    
      {
        type: 'exam',
        title: 'Module 1 Exam: Python Basics',
        description: 'Answer the following questions to test your understanding of Python basics.',
        duration: 20, // minutes
        passingScore: 70, // percent
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What type of programming language is Python?',
            options: [
              'Low-level compiled language',
              'High-level interpreted language',
              'Assembly language',
              'Machine language'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Who created Python?',
            options: [
              'Dennis Ritchie',
              'James Gosling',
              'Guido van Rossum',
              'Bjarne Stroustrup'
            ],
            correctAnswer: 2
          },
          {
            id: 3,
            type: 'true-false',
            question: 'Python code must be compiled before running.',
            correctAnswer: false
          },
          {
            id: 4,
            type: 'true-false',
            question: 'VS Code can be used to write Python programs.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'code',
            question: 'Write a Python program that prints your name.',
            sampleAnswer: `print("Your Name")`,
            evaluation: 'manual'
          }
        ]
      }
    ],      

    // Module 2: Python Basics
2: [
  {
    type: 'overview',
    title: 'Python Basics',
    content:
      'Learn the fundamental building blocks of Python programming including variables, data types, operators, input/output, and basic syntax.',
    topics: [
      { title: 'Variables & Data Types', description: 'Storing and working with different types of data' },
      { title: 'Operators', description: 'Performing calculations and comparisons' },
      { title: 'Input/Output', description: 'Getting user input and displaying output' },
      { title: 'Basic Syntax', description: 'Understanding Python code structure' },
      { title: 'Module Exam', description: 'Test your understanding of Python basics' }
    ]
  },

  {
    type: 'lesson',
    title: 'Variables and Data Types',
    content: [
      'Variables are used to store data values in Python.',
      'A variable is created when a value is assigned to it.',
      'Python automatically determines the data type of a variable.'
    ],
    points: [
      'int – Integer numbers (e.g., 10, -5)',
      'float – Decimal numbers (e.g., 3.14, 2.0)',
      'str – Text values (e.g., "Hello")',
      'bool – Boolean values (True or False)',
      'list – Ordered collection of values',
      'dict – Key-value pairs'
    ]
  },

  {
    type: 'example',
    title: 'Working with Variables',
    description: 'Create and use variables with different data types.',
    code: `# Variables and Data Types

age = 25
price = 19.99
name = "Alice"
is_student = True

print(age)
print(price)
print(name)
print(is_student)

print(type(age))
print(type(price))
print(type(name))
print(type(is_student))`,
    output: `25
19.99
Alice
True
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>`,
    explanation:
      'Variables are created using assignment. Python automatically detects the data type.'
  },

  {
    type: 'lesson',
    title: 'Operators in Python',
    content: [
      'Operators are used to perform operations on variables and values.',
      'Python supports arithmetic, comparison, logical, and assignment operators.'
    ],
    points: [
      'Arithmetic: +, -, *, /, %, **',
      'Comparison: ==, !=, >, <, >=, <=',
      'Logical: and, or, not',
      'Assignment: =, +=, -=, *=, /='
    ]
  },

  {
    type: 'example',
    title: 'Using Operators',
    description: 'Examples of arithmetic, comparison, and logical operators.',
    code: `a = 10
b = 3

print(a + b)
print(a * b)
print(a > b)
print(a == b)
print(True and False)`,
    output: `13
30
True
False
False`,
    explanation:
      'Operators allow Python programs to perform calculations and make decisions.'
  },

  {
    type: 'lesson',
    title: 'Input and Output',
    content: [
      'Python allows interaction with users using input and output.',
      'The input() function gets data from the user.',
      'The print() function displays output on the screen.'
    ],
    points: [
      'input() always returns a string',
      'Use int() or float() to convert input',
      'print() is used to display results'
    ]
  },

  {
    type: 'example',
    title: 'Getting User Input',
    description: 'Use input() and print() in a Python program.',
    code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))

print("Hello", name)
print("You are", age, "years old")`,
    output: `Enter your name: John
Enter your age: 20
Hello John
You are 20 years old`,
    explanation:
      'User input must be converted to numbers before doing calculations.'
  },

  {
    type: 'lesson',
    title: 'Basic Python Syntax',
    content: [
      'Python uses indentation to define code blocks.',
      'Statements are written line by line.',
      'Comments start with the # symbol.'
    ],
    points: [
      'Indentation is required (usually 4 spaces)',
      'Python is case-sensitive',
      'Use comments to explain code'
    ]
  },

  {
    type: 'example',
    title: 'Basic Syntax Example',
    description: 'Understand indentation and comments in Python.',
    code: `# Check if number is positive
number = 5

if number > 0:
    print("Positive number")
else:
    print("Not positive")`,
    output: `Positive number`,
    explanation:
      'Indentation tells Python which code belongs to a block such as if/else.'
  },

  {
    type: 'exam',
    title: 'Module 2 Exam: Python Basics',
    description: 'Answer the following questions to test your understanding.',
    duration: 30,
    passingScore: 70,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Which data type is used to store text in Python?',
        options: ['int', 'float', 'str', 'bool'],
        correctAnswer: 2
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Which operator is used for multiplication?',
        options: ['+', '-', '*', '/'],
        correctAnswer: 2
      },
      {
        id: 3,
        type: 'true-false',
        question: 'The input() function returns a string.',
        correctAnswer: true
      },
      {
        id: 4,
        type: 'true-false',
        question: 'Python uses indentation to define code blocks.',
        correctAnswer: true
      },
      {
        id: 5,
        type: 'code',
        question: 'Write a Python program that asks for a number and prints it.',
        sampleAnswer: `num = input("Enter a number: ")
print(num)`,
        evaluation: 'manual'
      }
    ]
  }
],

    // Module 3: Control Structures
    3: [
      {
        type: 'overview',
        title: 'Control Structures',
        content: 'Control structures allow you to control the flow of execution in your Python programs. Learn about conditionals, loops, and how to use them effectively.',
        topics: [
          { title: 'If Statements', description: 'Making decisions in your code' },
          { title: 'Loops', description: 'Repeating code with for and while loops' },
          { title: 'Break & Continue', description: 'Controlling loop execution' },
          { title: 'Comprehensions', description: 'Concise way to create lists' },
          { title: 'Module Exam', description: 'Test your understanding of Control structures' }
        ]
      },
      {
        type: 'lesson',
        title: 'Conditional Statements (if/else)',
        content: [
          'Conditional statements allow your program to make decisions based on certain conditions. Python uses if, elif (else if), and else keywords for conditional execution.'
        ],
        points: [
          'if - executes code if condition is True',
          'elif - checks additional conditions if previous ones were False',
          'else - executes code if all conditions are False',
          'Conditions are evaluated in order until one is True',
          'Indentation is crucial in Python for code blocks'
        ]
      },
      {
        type: 'example',
        title: 'If/Else Statements',
        description: 'Examples of using conditional statements to make decisions in your code.',
        code: `# If/Else Statements

# Simple if statement
age = 18
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Multiple conditions with elif
score = 85
print("\\n--- Grade Calculator ---")
if score >= 90:
    grade = "A"
    print(f"Score: {score} - Grade: {grade} (Excellent!)")
elif score >= 80:
    grade = "B"
    print(f"Score: {score} - Grade: {grade} (Good!)")
elif score >= 70:
    grade = "C"
    print(f"Score: {score} - Grade: {grade} (Average)")
elif score >= 60:
    grade = "D"
    print(f"Score: {score} - Grade: {grade} (Below Average)")
else:
    grade = "F"
    print(f"Score: {score} - Grade: {grade} (Fail)")

# Nested if statements
temperature = 25
is_sunny = True

if temperature > 20:
    if is_sunny:
        print("\\nPerfect weather for a picnic!")
    else:
        print("\\nWarm but cloudy - still good for outdoor activities")
else:
    print("\\nIt's too cold outside")`,
        output: `You are an adult

--- Grade Calculator ---
Score: 85 - Grade: B (Good!)

Perfect weather for a picnic!`,
        explanation: 'Conditional statements execute different code blocks based on whether conditions are True or False. Pay attention to indentation - it defines code blocks in Python.'
      },
      {
        type: 'lesson',
        title: 'Loops in Python',
        content: [
          'Loops allow you to execute a block of code repeatedly. Python has two main types of loops: for loops (for iterating over sequences) and while loops (for repeating until a condition becomes False).'
        ],
        points: [
          'for loop - iterates over a sequence (list, string, range, etc.)',
          'while loop - repeats as long as a condition is True',
          'range() function - generates a sequence of numbers',
          'break - exits the loop immediately',
          'continue - skips the rest of the current iteration'
        ]
      },
      {
        type: 'example',
        title: 'For Loops',
        description: 'Using for loops to iterate over sequences and perform repeated actions.',
        code: `# For Loops

# Loop through a list
fruits = ["apple", "banana", "orange", "grape"]
print("Favorite Fruits:")
for fruit in fruits:
    print(f"  - {fruit}")

# Loop with range()
print("\\nCounting 1 to 5:")
for i in range(1, 6):
    print(f"  Number {i}")

# Loop with range() and step
print("\\nEven numbers from 0 to 10:")
for num in range(0, 11, 2):
    print(f"  {num}")

# Loop with enumerate (get index and value)
print("\\nFruits with index:")
for index, fruit in enumerate(fruits):
    print(f"  {index + 1}. {fruit}")

# Nested loops
print("\\nMultiplication Table (2x2):")
for i in range(1, 3):
    for j in range(1, 3):
        result = i * j
        print(f"  {i} x {j} = {result}")`,
        output: `Favorite Fruits:
  - apple
  - banana
  - orange
  - grape

Counting 1 to 5:
  Number 1
  Number 2
  Number 3
  Number 4
  Number 5

Even numbers from 0 to 10:
  0
  2
  4
  6
  8
  10

Fruits with index:
  1. apple
  2. banana
  3. orange
  4. grape

Multiplication Table (2x2):
  1 x 1 = 1
  1 x 2 = 2
  2 x 1 = 2
  2 x 2 = 4`,
        explanation: 'For loops iterate over sequences. The range() function creates a sequence of numbers. enumerate() gives you both index and value during iteration.'
      },
      {
        type: 'example',
        title: 'While Loops and Control Flow',
        description: 'Using while loops and controlling loop execution with break and continue statements.',
        code: `# While Loops

# Basic while loop
count = 0
print("Counting up to 5:")
while count < 5:
    print(f"  Count: {count}")
    count += 1  # Increment counter

# While loop with break
print("\\n--- Break Example ---")
num = 0
while True:
    if num >= 10:
        break  # Exit loop
    print(f"  Number: {num}")
    num += 2

# While loop with continue
print("\\n--- Continue Example (skip even numbers) ---")
num = 0
while num < 10:
    num += 1
    if num % 2 == 0:
        continue  # Skip rest of iteration
    print(f"  Odd number: {num}")

# Practical example: Guessing game
print("\\n--- Number Guessing ---")
secret_number = 7
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    guess = int(input(f"Attempt {attempts + 1}: Guess a number (1-10): "))
    attempts += 1
    
    if guess == secret_number:
        print(f"  Congratulations! You guessed it in {attempts} attempts!")
        break
    elif guess < secret_number:
        print("  Too low! Try again.")
    else:
        print("  Too high! Try again.")
else:
    print(f"  Sorry! The secret number was {secret_number}")`,
        output: `Counting up to 5:
  Count: 0
  Count: 1
  Count: 2
  Count: 3
  Count: 4

--- Break Example ---
  Number: 0
  Number: 2
  Number: 4
  Number: 6
  Number: 8

--- Continue Example (skip even numbers) ---
  Odd number: 1
  Odd number: 3
  Odd number: 5
  Odd number: 7
  Odd number: 9

--- Number Guessing ---
Attempt 1: Guess a number (1-10): 5
  Too low! Try again.
Attempt 2: Guess a number (1-10): 8
  Too high! Try again.
Attempt 3: Guess a number (1-10): 7
  Congratulations! You guessed it in 3 attempts!`,
        explanation: 'While loops repeat as long as a condition is True. break exits the loop immediately, while continue skips to the next iteration. Make sure your loop has a way to terminate!'
      },
      {
        type: 'example',
        title: 'List Comprehensions',
        description: 'List comprehensions provide a concise way to create lists based on existing lists or ranges.',
        code: `# List Comprehensions

# Traditional way to create a list of squares
squares_traditional = []
for x in range(10):
    squares_traditional.append(x ** 2)

# Using list comprehension (more concise)
squares_comprehension = [x ** 2 for x in range(10)]
print("Squares (0-9):", squares_comprehension)

# List comprehension with condition
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print("\\nEven squares only:", even_squares)

# Convert strings to uppercase
fruits = ["apple", "banana", "orange"]
upper_fruits = [fruit.upper() for fruit in fruits]
print("\\nUppercase fruits:", upper_fruits)

# Create list with filtering
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = [num for num in numbers if num % 2 == 0]
print("\\nEven numbers from list:", even_numbers)

# Nested list comprehension
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print("\\n3x3 Multiplication matrix:")
for row in matrix:
    print(f"  {row}")`,
        output: `Squares (0-9): [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

Even squares only: [0, 4, 16, 36, 64]

Uppercase fruits: ['APPLE', 'BANANA', 'ORANGE']

Even numbers from list: [2, 4, 6, 8, 10]

3x3 Multiplication matrix:
  [1, 2, 3]
  [2, 4, 6]
  [3, 6, 9]`,
        explanation: 'List comprehensions are a Pythonic way to create lists. They\'re more readable and often faster than traditional loops. Syntax: [expression for item in iterable if condition]'
      },
      {
        type: 'exam',
        title: 'Module 3 Exam: Control Structures',
        description: 'Test your understanding of conditional statements, loops, and control flow.',
        duration: 30,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which keyword is used to check another condition if the previous one is False?',
            options: ['if', 'else', 'elif', 'switch'],
            correctAnswer: 2
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which loop is best used when you know how many times to repeat?',
            options: ['while', 'for', 'do-while', 'repeat'],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'true-false',
            question: 'Indentation is required in Python to define code blocks.',
            correctAnswer: true
          },
          {
            id: 4,
            type: 'true-false',
            question: 'The break statement skips the current iteration and continues the loop.',
            correctAnswer: false
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What does the continue statement do?',
            options: [
              'Stops the loop completely',
              'Skips the current iteration',
              'Restarts the program',
              'Ends the program'
            ],
            correctAnswer: 1
          },
          {
            id: 6,
            type: 'code',
            question: 'Write a Python program that prints numbers from 1 to 5 using a loop.',
            sampleAnswer: `for i in range(1, 6):
    print(i)`,
            evaluation: 'manual'
          }
        ]
      }
    ],

    // Module 4: Functions & Modules
    4: [
      {
        type: 'overview',
        title: 'Functions & Modules',
        content: 'Functions allow you to organize code into reusable blocks. Modules let you organize functions and use code from other files. Learn how to define functions, use parameters, and work with Python modules.',
        topics: [
          { title: 'Defining Functions', description: 'Creating your own functions' },
          { title: 'Parameters & Return', description: 'Passing data to functions and getting results' },
          { title: 'Modules & Packages', description: 'Organizing code into modules' },
          { title: 'Importing Libraries', description: 'Using Python\'s built-in and third-party libraries' }
        ]
      },
      {
        type: 'lesson',
        title: 'Defining Functions',
        content: [
          'A function is a block of code that runs only when it is called. You can pass data, known as parameters, into a function. Functions can return data as a result.',
          'Functions help you organize code, make it reusable, and easier to understand and maintain.'
        ],
        points: [
          'Use def keyword to define a function',
          'Function names should be descriptive and follow naming conventions',
          'Functions can take zero or more parameters',
          'Functions can return values using return statement',
          'Functions can have default parameter values',
          'Use docstrings to document your functions'
        ]
      },
      {
        type: 'example',
        title: 'Basic Functions',
        description: 'Learn how to define and call functions in Python.',
        code: `# Defining Functions

# Simple function without parameters
def greet():
    """This function greets the user"""
    print("Hello! Welcome to Python Functions!")

# Function with parameters
def greet_person(name):
    """Greet a specific person"""
    print(f"Hello, {name}! Nice to meet you.")

# Function with return value
def add_numbers(a, b):
    """Add two numbers and return the result"""
    result = a + b
    return result

# Function with multiple return values
def get_name_and_age():
    """Get user's name and age"""
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    return name, age

# Calling functions
print("=== Function Examples ===\\n")
greet()
print()

greet_person("Alice")
greet_person("Bob")
print()

sum_result = add_numbers(5, 3)
print(f"5 + 3 = {sum_result}")
print()

name, age = get_name_and_age()
print(f"\\nYou entered: Name = {name}, Age = {age}")`,
        output: `=== Function Examples ===

Hello! Welcome to Python Functions!

Hello, Alice! Nice to meet you.
Hello, Bob! Nice to meet you.

5 + 3 = 8

Enter your name: John
Enter your age: 25

You entered: Name = John, Age = 25`,
        explanation: 'Functions are defined with def keyword. They can take parameters, perform operations, and return values. Functions are called by their name followed by parentheses.'
      },
      {
        type: 'example',
        title: 'Function Parameters and Default Values',
        description: 'Advanced function concepts including default parameters, keyword arguments, and variable-length arguments.',
        code: `# Function Parameters

# Function with default parameters
def create_profile(name, age=18, city="Unknown"):
    """Create a user profile with optional parameters"""
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"City: {city}")

# Function with keyword arguments
def calculate_total(price, tax_rate=0.1, discount=0):
    """Calculate total price with tax and discount"""
    subtotal = price - (price * discount)
    total = subtotal + (subtotal * tax_rate)
    return total

# Function with variable arguments (*args)
def sum_all(*numbers):
    """Sum any number of arguments"""
    total = 0
    for num in numbers:
        total += num
    return total

# Function with keyword arguments (**kwargs)
def create_student(**info):
    """Create student profile with keyword arguments"""
    print("Student Information:")
    for key, value in info.items():
        print(f"  {key}: {value}")

# Using functions
print("=== Default Parameters ===\\n")
create_profile("Alice")
print()
create_profile("Bob", 25)
print()
create_profile("Charlie", 30, "New York")
print()

print("=== Calculate Total ===")
total1 = calculate_total(100)
print(f"Total (no discount): \${total1:.2f}")

total2 = calculate_total(100, discount=0.2)
print(f"Total (20% discount): \${total2:.2f}")

total3 = calculate_total(100, tax_rate=0.15, discount=0.1)
print(f"Total (custom): \${total3:.2f}")
print()

print("=== Variable Arguments ===")
print(f"Sum of 1, 2, 3: {sum_all(1, 2, 3)}")
print(f"Sum of 10, 20, 30, 40: {sum_all(10, 20, 30, 40)}")
print()

print("=== Keyword Arguments ===")
create_student(name="Alice", age=20, grade="A", course="Python")
create_student(name="Bob", age=22, grade="B")`,
        output: `=== Default Parameters ===

Name: Alice
Age: 18
City: Unknown

Name: Bob
Age: 25
City: Unknown

Name: Charlie
Age: 30
City: New York

=== Calculate Total ===
Total (no discount): $110.00
Total (20% discount): $88.00
Total (custom): $103.50

=== Variable Arguments ===
Sum of 1, 2, 3: 6
Sum of 10, 20, 30, 40: 100

=== Keyword Arguments ===
Student Information:
  name: Alice
  age: 20
  grade: A
  course: Python
Student Information:
  name: Bob
  age: 22
  grade: B`,
        explanation: 'Default parameters allow functions to work with optional arguments. *args collects positional arguments into a tuple, and **kwargs collects keyword arguments into a dictionary.'
      },
      {
        type: 'example',
        title: 'Working with Modules',
        description: 'Learn how to import and use Python modules and create your own modules.',
        code: `# Working with Modules

# Import entire module
import math
print("=== Math Module ===\\n")
print(f"Pi: {math.pi}")
print(f"Square root of 16: {math.sqrt(16)}")
print(f"2 to the power of 8: {math.pow(2, 8)}")
print(f"Ceiling of 4.3: {math.ceil(4.3)}")
print(f"Floor of 4.9: {math.floor(4.9)}")
print()

# Import specific functions
from datetime import datetime, timedelta
print("=== DateTime Module ===\\n")
now = datetime.now()
print(f"Current date and time: {now}")
print(f"Formatted: {now.strftime('%Y-%m-%d %H:%M:%S')}")

future_date = now + timedelta(days=7)
print(f"Date in 7 days: {future_date.strftime('%Y-%m-%d')}")
print()

# Import with alias
import random as rnd
print("=== Random Module ===\\n")
print(f"Random integer (1-100): {rnd.randint(1, 100)}")
print(f"Random float (0-1): {rnd.random()}")

colors = ["red", "blue", "green", "yellow"]
print(f"Random color: {rnd.choice(colors)}")
print(f"Shuffled colors: {rnd.sample(colors, len(colors))}")
print()

# Import all (not recommended, but sometimes used)
from math import *
print("=== Using import * ===")
print(f"Pi (no module prefix): {pi}")
print(f"Square root: {sqrt(25)}")`,
        output: `=== Math Module ===

Pi: 3.141592653589793
Square root of 16: 4.0
2 to the power of 8: 256.0
Ceiling of 4.3: 5
Floor of 4.9: 4

=== DateTime Module ===

Current date and time: 2024-01-15 14:30:45.123456
Formatted: 2024-01-15 14:30:45

Date in 7 days: 2024-01-22

=== Random Module ===

Random integer (1-100): 42
Random float (0-1): 0.756
Random color: blue
Shuffled colors: ['green', 'red', 'yellow', 'blue']

=== Using import * ===
Pi (no module prefix): 3.141592653589793
Square root: 25`,
        explanation: 'Modules are files containing Python code. Use import to bring them into your program. You can import entire modules, specific functions, or use aliases. The standard library has many useful modules like math, datetime, and random.'
      }
    ]
  }
};

// Helper function to get slides for a course module
export const getSlidesForModule = (courseId, moduleNumber) => {
  if (slidesData[courseId] && slidesData[courseId][moduleNumber]) {
    return slidesData[courseId][moduleNumber];
  }
  return [];
};

// Helper function to get all slides for a course
export const getSlidesForCourse = (courseId) => {
  return slidesData[courseId] || {};
};
