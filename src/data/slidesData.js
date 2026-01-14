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
          { title: 'Importing Libraries', description: 'Using Python\'s built-in and third-party libraries' },
          { title: 'Module Exam', description: 'Test your knowledge' }
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
      },
      {
        type: 'exam',
        title: 'Module 4 Exam: Functions & Modules',
        description: 'Test your understanding of functions, parameters, return values, and Python modules.',
        duration: 30, // minutes
        passingScore: 70, // percent
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which keyword is used to define a function in Python?',
            options: ['function', 'define', 'def', 'fun'],
            correctAnswer: 2
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What does the return statement do in a function?',
            options: [
              'Prints a value',
              'Ends the program',
              'Sends a value back to the caller',
              'Defines a variable'
            ],
            correctAnswer: 2
          },
          {
            id: 3,
            type: 'true-false',
            question: 'A function can return multiple values in Python.',
            correctAnswer: true
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which symbol is used to collect multiple positional arguments?',
            options: ['&', '*', '**', '#'],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which statement correctly imports the math module?',
            options: [
              'include math',
              'import math',
              'using math',
              'require math'
            ],
            correctAnswer: 1
          },
          {
            id: 6,
            type: 'code',
            question: 'Write a function named add that takes two numbers and returns their sum.',
            sampleAnswer: `def add(a, b):
    return a + b`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    // Module 5: Data Collections
    5: [
      {
        type: 'overview',
        title: 'Data Collections in Python',
        content: 'Python provides several built-in data structures to store and organize data: lists, tuples, sets, and dictionaries. In this module, you will learn how to use these collections effectively.',
        topics: [
          { title: 'Lists, Tuples, Sets, Dictionaries', description: 'Understanding the main Python collections' },
          { title: 'Operations', description: 'Manipulating data in collections' },
          { title: 'Iteration', description: 'Looping through collections' },
          { title: 'Use Cases', description: 'When to use each collection type' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      {
        type: 'lesson',
        title: 'Lists, Tuples, Sets, Dictionaries',
        content: [
          'Python has four main collection types: lists, tuples, sets, and dictionaries.',
          'Lists are ordered, mutable collections.',
          'Tuples are ordered, immutable collections.',
          'Sets are unordered collections of unique elements.',
          'Dictionaries are unordered collections of key-value pairs.'
        ],
        points: [
          'List: [1, 2, 3] — mutable, ordered',
          'Tuple: (1, 2, 3) — immutable, ordered',
          'Set: {1, 2, 3} — unordered, no duplicates',
          'Dictionary: {"key": "value"} — unordered, key-value pairs'
        ]
      },

      {
        type: 'example',
        title: 'Working with Lists',
        description: 'Learn how to create, access, and modify lists.',
        code: `# Lists
fruits = ["apple", "banana", "cherry"]
print("Fruits:", fruits)

# Accessing elements
print("First fruit:", fruits[0])

# Adding elements
fruits.append("orange")
fruits.insert(1, "mango")
print("Updated fruits:", fruits)

# Removing elements
fruits.remove("banana")
print("After removal:", fruits)

# Slicing
print("First two fruits:", fruits[:2])`,
        output: `Fruits: ['apple', 'banana', 'cherry']
First fruit: apple
Updated fruits: ['apple', 'mango', 'banana', 'cherry', 'orange']
After removal: ['apple', 'mango', 'cherry', 'orange']
First two fruits: ['apple', 'mango']`,
        explanation: 'Lists are mutable and ordered. You can access elements by index, modify them, add, remove, and slice to get sublists.'
      },

      {
        type: 'example',
        title: 'Working with Tuples',
        description: 'Learn how to create and use tuples.',
        code: `# Tuples
dimensions = (1920, 1080)
print("Screen resolution:", dimensions)

# Accessing elements
print("Width:", dimensions[0])
print("Height:", dimensions[1])

# Tuples are immutable
# dimensions[0] = 1280  # This would raise an error

# Tuple unpacking
width, height = dimensions
print("Width:", width, "Height:", height)`,
        output: `Screen resolution: (1920, 1080)
Width: 1920
Height: 1080
Width: 1920 Height: 1080`,
        explanation: 'Tuples are immutable sequences. You can access elements by index and use tuple unpacking to assign elements to variables.'
      },

      {
        type: 'example',
        title: 'Working with Sets',
        description: 'Learn how to create sets and perform operations.',
        code: `# Sets
colors = {"red", "green", "blue"}
print("Colors:", colors)

# Adding elements
colors.add("yellow")
print("After adding yellow:", colors)

# Removing elements
colors.discard("green")
print("After discarding green:", colors)

# Set operations
set_a = {1, 2, 3}
set_b = {3, 4, 5}
print("Union:", set_a | set_b)
print("Intersection:", set_a & set_b)
print("Difference:", set_a - set_b)`,
        output: `Colors: {'blue', 'red', 'green'}
After adding yellow: {'yellow', 'blue', 'red', 'green'}
After discarding green: {'yellow', 'blue', 'red'}
Union: {1, 2, 3, 4, 5}
Intersection: {3}
Difference: {1, 2}`,
        explanation: 'Sets are unordered collections of unique elements. You can perform union, intersection, and difference operations.'
      },

      {
        type: 'example',
        title: 'Working with Dictionaries',
        description: 'Learn how to create, access, and modify dictionaries.',
        code: `# Dictionaries
student = {"name": "Alice", "age": 20, "course": "Python"}
print("Student:", student)

# Accessing values
print("Name:", student["name"])

# Adding/updating values
student["grade"] = "A"
student["age"] = 21
print("Updated student:", student)

# Removing values
del student["course"]
print("After removing course:", student)

# Iterating over dictionary
for key, value in student.items():
    print(key, "->", value)`,
        output: `Student: {'name': 'Alice', 'age': 20, 'course': 'Python'}
Name: Alice
Updated student: {'name': 'Alice', 'age': 21, 'course': 'Python', 'grade': 'A'}
After removing course: {'name': 'Alice', 'age': 21, 'grade': 'A'}
name -> Alice
age -> 21
grade -> A`,
        explanation: 'Dictionaries store key-value pairs. You can access, update, add, remove items, and iterate over keys and values.'
      },

      {
        type: 'exam',
        title: 'Module 5 Exam: Python Collections',
        description: 'Test your understanding of Python data collections.',
        duration: 30, // minutes
        passingScore: 70, // percent
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which collection type is immutable?',
            options: ['List', 'Tuple', 'Set', 'Dictionary'],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which collection type does not allow duplicate elements?',
            options: ['List', 'Tuple', 'Set', 'Dictionary'],
            correctAnswer: 2
          },
          {
            id: 3,
            type: 'true-false',
            question: 'Dictionaries are unordered collections of key-value pairs.',
            correctAnswer: true
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which of these operations can be used with sets?',
            options: ['Union', 'Intersection', 'Difference', 'All of the above'],
            correctAnswer: 3
          },
          {
            id: 5,
            type: 'code',
            question: 'Write a Python dictionary to store a student\'s name and age, then print the name.',
            sampleAnswer: `student = {"name": "Alice", "age": 20}
print(student["name"])`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    // Module 6: Object-Oriented Programming
    6: [
      {
        type: 'overview',
        title: 'Classes & Objects',
        content: 'Object-Oriented Programming (OOP) allows you to model real-world entities using classes and objects. In this module, you will learn how to create classes, define attributes and methods, and use inheritance and encapsulation.',
        topics: [
          { title: 'Classes & Objects', description: 'Defining your own classes and creating objects' },
          { title: 'Inheritance', description: 'Reusing code and creating hierarchies' },
          { title: 'Methods & Attributes', description: 'Using functions and variables inside classes' },
          { title: 'Encapsulation', description: 'Restricting access to internal class data' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      {
        type: 'lesson',
        title: 'Classes and Objects',
        content: [
          'A class is a blueprint for creating objects. Objects are instances of classes.',
          'Attributes are variables that belong to an object. Methods are functions that belong to an object.',
          'Classes allow you to organize data and behavior logically.'
        ],
        points: [
          'Define a class using the class keyword',
          'Create objects by calling the class as a function',
          'Use self to refer to the current object inside methods',
          'Attributes store object-specific data',
          'Methods define actions the object can perform'
        ]
      },

      {
        type: 'example',
        title: 'Creating a Class and Object',
        description: 'Learn how to define a simple class and create an object.',
        code: `# Defining a class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello! My name is {self.name} and I am {self.age} years old.")

# Creating objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# Calling methods
person1.greet()
person2.greet()`,
        output: `Hello! My name is Alice and I am 25 years old.
Hello! My name is Bob and I am 30 years old.`,
        explanation: 'The __init__ method initializes object attributes. Methods can access these attributes using self. Objects are created by calling the class with the required parameters.'
      },

      {
        type: 'lesson',
        title: 'Inheritance',
        content: [
          'Inheritance allows a class (child) to inherit attributes and methods from another class (parent).',
          'This helps to reuse code and create a hierarchical class structure.'
        ],
        points: [
          'Define a child class by specifying the parent class in parentheses',
          'Child classes inherit all attributes and methods from the parent',
          'Child classes can override parent methods or add new ones'
        ]
      },

      {
        type: 'example',
        title: 'Using Inheritance',
        description: 'Learn how to create a subclass that inherits from a parent class.',
        code: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound.")

# Child class
class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks.")

# Creating objects
animal = Animal("Generic Animal")
dog = Dog("Buddy")

animal.speak()
dog.speak()`,
        output: `Generic Animal makes a sound.
Buddy barks.`,
        explanation: 'The Dog class inherits from Animal. The speak method is overridden in Dog to provide a custom behavior while the parent class remains unchanged.'
      },

      {
        type: 'lesson',
        title: 'Methods and Attributes',
        content: [
          'Methods define behaviors of a class, while attributes store the state.',
          'Use instance attributes for data specific to an object, and class attributes for data shared across all objects.'
        ],
        points: [
          'Instance attributes: self.attribute_name',
          'Class attributes: defined directly inside the class but outside methods',
          'Instance methods operate on object data using self',
          'Class methods operate on class data and are decorated with @classmethod',
          'Static methods do not access instance or class data and are decorated with @staticmethod'
        ]
      },

      {
        type: 'example',
        title: 'Methods and Attributes Examples',
        description: 'Examples showing instance, class, and static methods.',
        code: `class Circle:
    pi = 3.1416  # Class attribute

    def __init__(self, radius):
        self.radius = radius  # Instance attribute

    def area(self):  # Instance method
        return Circle.pi * self.radius ** 2

    @classmethod
    def info(cls):  # Class method
        print(f"All circles use pi = {cls.pi}")

    @staticmethod
    def greet():  # Static method
        print("Welcome to the Circle class!")

# Using the class
c1 = Circle(5)
print(f"Area of circle: {c1.area()}")
Circle.info()
Circle.greet()`,
        output: `Area of circle: 78.54
All circles use pi = 3.1416
Welcome to the Circle class!`,
        explanation: 'Instance methods use self to access object data. Class methods use cls to access class-level data. Static methods do not access instance or class data.'
      },

      {
        type: 'lesson',
        title: 'Encapsulation',
        content: [
          'Encapsulation restricts direct access to an object’s attributes and methods to protect its internal state.',
          'Python uses naming conventions to indicate private variables and methods.'
        ],
        points: [
          'Prefix attributes with _ (single underscore) to indicate protected',
          'Prefix attributes with __ (double underscore) to make them private (name mangling)',
          'Access and modify private attributes using getter and setter methods'
        ]
      },

      {
        type: 'example',
        title: 'Encapsulation Example',
        description: 'Learn how to use private attributes with getter and setter methods.',
        code: `class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient funds!")

    def get_balance(self):
        return self.__balance

# Using the class
account = BankAccount("Alice", 1000)
account.deposit(500)
account.withdraw(200)
print(f"Balance: {account.get_balance()}")
# account.__balance  # This would raise an error`,
        output: `Balance: 1300`,
        explanation: 'The __balance attribute is private. Access is only possible through methods. This protects the data from being modified directly.'
      },

      {
        type: 'exam',
        title: 'Module 6 Exam: Object-Oriented Programming',
        description: 'Test your understanding of classes, objects, methods, inheritance, and encapsulation.',
        duration: 30, // minutes
        passingScore: 70, // percent
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which keyword is used to define a class in Python?',
            options: ['def', 'class', 'object', 'function'],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What does the __init__ method do?',
            options: [
              'Deletes an object',
              'Initializes an object’s attributes',
              'Calls a class method',
              'Defines a static method'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'true-false',
            question: 'Encapsulation prevents direct access to certain attributes and methods.',
            correctAnswer: true
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which symbol is used to make an attribute private?',
            options: ['_', '__', '$', '#'],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'code',
            question: 'Create a class Car with attributes make and model, and a method display_info that prints both.',
            sampleAnswer: `class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print(f"Make: {self.make}, Model: {self.model}")`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    // Module 7: File Handling & Exceptions
    7: [
      {
        type: 'overview',
        title: 'File Handling & Exceptions',
        content: 'Learn how to read and write files, handle exceptions, and use context managers in Python. This module helps you manage data safely and effectively.',
        topics: [
          { title: 'Reading/Writing Files', description: 'Work with text and binary files' },
          { title: 'Exception Handling', description: 'Handle errors gracefully using try/except' },
          { title: 'Context Managers', description: 'Use with statement for safe file handling' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      {
        type: 'lesson',
        title: 'Reading and Writing Files',
        content: [
          'Files are used to store data permanently. Python provides functions to open, read, write, and close files.',
          'Use open() function to access files in different modes: read (r), write (w), append (a), binary (b).'
        ],
        points: [
          'Use open(filename, mode) to open a file',
          'Use read(), readline(), readlines() to read content',
          'Use write() or writelines() to write data',
          'Always close the file after operations, or use a context manager'
        ]
      },

      {
        type: 'example',
        title: 'Reading and Writing Files',
        description: 'Example of reading from and writing to a text file.',
        code: `# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, world!\\n")
    file.write("Python file handling is easy.\\n")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(f"Line: {line.strip()}")`,
        output: `Hello, world!
Python file handling is easy.

Line: Hello, world!
Line: Python file handling is easy.`,
        explanation: 'The with statement automatically closes the file after use. read() reads the whole file, while iterating line by line lets you process large files efficiently.'
      },

      {
        type: 'lesson',
        title: 'Exception Handling',
        content: [
          'Exceptions are errors that occur during program execution. Python provides a way to handle them gracefully using try/except blocks.',
          'You can catch specific exceptions or use a generic exception handler.'
        ],
        points: [
          'Use try/except to catch errors',
          'You can have multiple except blocks for different exception types',
          'Optionally use else for code that runs if no exception occurs',
          'Use finally to run code regardless of exceptions'
        ]
      },

      {
        type: 'example',
        title: 'Handling Exceptions',
        description: 'Example of using try/except to catch errors.',
        code: `try:
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    result = num1 / num2
except ValueError:
    print("Invalid input! Please enter numbers only.")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Execution finished.")`,
        output: `Enter first number: 10
Enter second number: 2
Result: 5.0
Execution finished.`,
        explanation: 'The try block contains code that might raise an exception. except blocks handle specific errors. finally always runs at the end, ensuring cleanup code executes.'
      },

      {
        type: 'lesson',
        title: 'Context Managers',
        content: [
          'Context managers allow you to allocate and release resources precisely when needed.',
          'The with statement is commonly used with files to ensure they are properly closed after use.'
        ],
        points: [
          'Use with open(filename, mode) as file: to handle files safely',
          'Custom context managers can be created using the contextlib module',
          'Helps prevent resource leaks and ensures clean code'
        ]
      },

      {
        type: 'example',
        title: 'Context Manager Example',
        description: 'Using the with statement for safe file handling.',
        code: `# Writing with context manager
with open("data.txt", "w") as f:
    f.write("Python is powerful!\\n")
    f.write("Context managers are helpful.")

# Reading with context manager
with open("data.txt", "r") as f:
    print(f.read())`,
        output: `Python is powerful!
Context managers are helpful.`,
        explanation: 'The with statement ensures the file is closed automatically, even if an exception occurs during the block execution.'
      },

      {
        type: 'exam',
        title: 'Module 7 Exam: File Handling & Exceptions',
        description: 'Test your knowledge of reading/writing files, handling exceptions, and context managers.',
        duration: 30,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which mode opens a file for reading only?',
            options: ['r', 'w', 'a', 'rw'],
            correctAnswer: 0
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which statement is used to handle exceptions in Python?',
            options: ['try/catch', 'try/except', 'catch/try', 'error/except'],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'true-false',
            question: 'The with statement automatically closes a file after its block finishes.',
            correctAnswer: true
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which exception is raised when dividing a number by zero?',
            options: ['ZeroDivisionError', 'ValueError', 'TypeError', 'IndexError'],
            correctAnswer: 0
          },
          {
            id: 5,
            type: 'code',
            question: 'Write Python code to open a file "notes.txt", write "Hello Python" to it, and then read the content.',
            sampleAnswer: `with open("notes.txt", "w") as f:
    f.write("Hello Python")

with open("notes.txt", "r") as f:
    print(f.read())`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    // Module 8: Python Libraries for Data
    8: [
      {
        type: 'overview',
        title: 'Python Libraries for Data',
        content: 'Learn how to work with popular Python libraries for data handling and visualization. This module covers making HTTP requests, basic data manipulation with Pandas and NumPy, and plotting with Matplotlib.',
        topics: [
          { title: 'Requests', description: 'Fetching data from the web' },
          { title: 'Pandas Basics', description: 'Working with tables and dataframes' },
          { title: 'NumPy Basics', description: 'Efficient numerical computations' },
          { title: 'Matplotlib Introduction', description: 'Creating charts and visualizations' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      {
        type: 'lesson',
        title: 'Requests Library',
        content: [
          'The Requests library allows you to send HTTP requests easily in Python. It is widely used for fetching data from APIs or web pages.',
          'Common methods include get(), post(), put(), and delete().'
        ],
        points: [
          'Install Requests: pip install requests',
          'Use requests.get(url) to fetch data',
          'Check response status with response.status_code',
          'Access content with response.text or response.json()',
          'Handle errors with try/except blocks'
        ]
      },

      {
        type: 'example',
        title: 'Using Requests',
        description: 'Fetching data from a web API using Requests library.',
        code: `import requests

url = "https://jsonplaceholder.typicode.com/todos/1"
try:
    response = requests.get(url)
    response.raise_for_status()  # Raise error if status is not 200
    data = response.json()
    print("Fetched Data:", data)
except requests.exceptions.RequestException as e:
    print("Error fetching data:", e)`,
        output: `Fetched Data: {'userId': 1, 'id': 1, 'title': 'delectus aut autem', 'completed': False}`,
        explanation: 'Requests allows easy HTTP calls. Use .json() to parse JSON responses. Always handle exceptions for network errors or invalid responses.'
      },

      {
        type: 'lesson',
        title: 'Pandas Basics',
        content: [
          'Pandas is a powerful library for data manipulation and analysis. Its main data structures are Series (1D) and DataFrame (2D).',
          'You can read data from CSV, Excel, or JSON files and perform operations like filtering, grouping, and aggregating.'
        ],
        points: [
          'Install Pandas: pip install pandas',
          'Use pd.Series() and pd.DataFrame() to create data structures',
          'Read CSV with pd.read_csv("file.csv")',
          'Select, filter, and modify columns easily',
          'Use methods like describe(), head(), tail() for quick insights'
        ]
      },

      {
        type: 'example',
        title: 'Working with Pandas',
        description: 'Create a DataFrame, manipulate it, and analyze data.',
        code: `import pandas as pd

# Create a DataFrame
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35],
    "City": ["New York", "Los Angeles", "Chicago"]
}
df = pd.DataFrame(data)

# View data
print("DataFrame:")
print(df)

# Select column
print("\\nNames:", df["Name"].tolist())

# Filter rows
adults = df[df["Age"] >= 30]
print("\\nAdults:")
print(adults)

# Summary statistics
print("\\nSummary statistics:")
print(df.describe(include="all"))`,
        output: `DataFrame:
      Name  Age         City
0    Alice   25     New York
1      Bob   30  Los Angeles
2  Charlie   35      Chicago

Names: ['Alice', 'Bob', 'Charlie']

Adults:
      Name  Age         City
1      Bob   30  Los Angeles
2  Charlie   35      Chicago

Summary statistics:
        Name        Age         City
count       3   3.000000            3
unique      3        NaN            3
top     Alice       NaN      New York
freq        1        NaN            1
mean      NaN  30.000000          NaN
std       NaN   5.000000          NaN
min       NaN  25.000000          NaN
25%       NaN  27.500000          NaN
50%       NaN  30.000000          NaN
75%       NaN  32.500000          NaN
max       NaN  35.000000          NaN`,
        explanation: 'Pandas makes data manipulation easy. You can select columns, filter rows, and compute statistics quickly. DataFrames are similar to Excel tables in Python.'
      },

      {
        type: 'lesson',
        title: 'NumPy Basics',
        content: [
          'NumPy is a library for numerical computing in Python. It provides high-performance multidimensional arrays and mathematical functions.',
          'NumPy arrays are faster and more memory-efficient than Python lists for large datasets.'
        ],
        points: [
          'Install NumPy: pip install numpy',
          'Use np.array() to create arrays',
          'Perform element-wise operations efficiently',
          'Use np.mean(), np.sum(), np.max(), np.min() for calculations',
          'Use np.arange() and np.linspace() to generate sequences'
        ]
      },

      {
        type: 'example',
        title: 'Working with NumPy',
        description: 'Creating arrays and performing calculations with NumPy.',
        code: `import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
print("Array:", arr)

# Operations
print("Sum:", np.sum(arr))
print("Mean:", np.mean(arr))
print("Squared:", arr**2)

# 2D array
matrix = np.array([[1, 2], [3, 4]])
print("\\nMatrix:")
print(matrix)

# Generate sequences
seq = np.arange(0, 10, 2)
print("Sequence:", seq)`,

        output: `Array: [1 2 3 4 5]
Sum: 15
Mean: 3.0
Squared: [ 1  4  9 16 25]

Matrix:
[[1 2]
 [3 4]]
Sequence: [0 2 4 6 8]`,
        explanation: 'NumPy arrays enable fast computation on large datasets. Use built-in functions for calculations instead of looping over lists.'
      },

      {
        type: 'lesson',
        title: 'Matplotlib Introduction',
        content: [
          'Matplotlib is a popular Python library for creating visualizations. It allows you to plot line charts, bar charts, histograms, scatter plots, and more.'
        ],
        points: [
          'Install Matplotlib: pip install matplotlib',
          'Use plt.plot(), plt.bar(), plt.scatter() for different chart types',
          'Use plt.xlabel(), plt.ylabel(), plt.title() to label charts',
          'Use plt.show() to display the chart'
        ]
      },

      {
        type: 'example',
        title: 'Plotting with Matplotlib',
        description: 'Create a simple line chart and bar chart using Matplotlib.',
        code: `import matplotlib.pyplot as plt

# Line chart
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y, marker='o', color='green', label='Line Chart')
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('Simple Line Chart')
plt.legend()
plt.show()

# Bar chart
labels = ['A', 'B', 'C', 'D']
values = [10, 15, 7, 12]
plt.bar(labels, values, color='skyblue')
plt.title('Simple Bar Chart')
plt.show()`,

        output: 'Two charts displayed: a green line chart with markers and a skyblue bar chart.',
        explanation: 'Matplotlib provides a wide range of customization. You can create multiple types of plots, label them, and display them using plt.show().'
      },

      {
        type: 'exam',
        title: 'Module 8 Exam: Python Libraries for Data',
        description: 'Test your knowledge of Requests, Pandas, NumPy, and Matplotlib.',
        duration: 30,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which method is used to fetch data from a URL using Requests?',
            options: ['requests.post()', 'requests.get()', 'requests.fetch()', 'requests.read()'],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'true-false',
            question: 'Pandas DataFrame is a 2-dimensional labeled data structure.',
            correctAnswer: true
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Which function creates a NumPy array?',
            options: ['np.array()', 'np.list()', 'np.data()', 'np.matrix()'],
            correctAnswer: 0
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which Matplotlib function is used to display a chart?',
            options: ['plt.show()', 'plt.display()', 'plt.plot()', 'plt.draw()'],
            correctAnswer: 0
          },
          {
            id: 5,
            type: 'code',
            question: 'Write Python code to create a Pandas DataFrame with columns "Name" and "Age" and add 3 rows of data.',
            sampleAnswer: `import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [25, 30, 35]
}
df = pd.DataFrame(data)
print(df)`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    // Module 9: Advanced Python Concepts
    9: [
      {
        type: 'overview',
        title: 'Advanced Python Concepts',
        content: 'In this module, you will learn advanced Python programming concepts including decorators, generators, context managers, and Pythonic best practices.',
        topics: [
          { title: 'Decorators & Higher-Order Functions', description: 'Enhance functions and reuse code efficiently' },
          { title: 'Generators & Iterators', description: 'Efficient ways to handle sequences of data' },
          { title: 'Context Managers & with Statement', description: 'Manage resources cleanly and safely' },
          { title: 'Pythonic Patterns & Best Practices', description: 'Write clean, readable, and efficient Python code' },
          { title: 'Module Exam', description: 'Test your knowledge of advanced Python concepts' }
        ]
      },

      {
        type: 'lesson',
        title: 'Decorators & Higher-Order Functions',
        content: [
          'Decorators are functions that modify the behavior of another function or method.',
          'Higher-order functions are functions that take other functions as arguments or return them as results.'
        ],
        points: [
          'Use @decorator syntax to apply a decorator',
          'Decorators can add functionality without changing the original function code',
          'Higher-order functions include map(), filter(), and custom functions',
          'Useful for logging, timing, access control, and caching'
        ]
      },

      {
        type: 'example',
        title: 'Using Decorators',
        description: 'Example of a simple decorator that measures execution time.',
        code: `import time

def timer(func):
    """Decorator to measure execution time"""
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Execution time: {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def compute_squares(n):
    return [i**2 for i in range(n)]

compute_squares(1000000)`,
        output: `Execution time: 0.0853 seconds`,
        explanation: 'The timer decorator wraps the compute_squares function and prints how long it took to execute.'
      },

      {
        type: 'lesson',
        title: 'Generators & Iterators',
        content: [
          'Generators are a simple way to create iterators using functions and the yield keyword.',
          'Iterators allow you to loop over data efficiently without storing everything in memory.'
        ],
        points: [
          'Use yield in a function to create a generator',
          'Generators are memory efficient for large datasets',
          'Iterators implement __iter__() and __next__() methods',
          'Useful for streaming data, reading files line by line, or large computations'
        ]
      },

      {
        type: 'example',
        title: 'Generator Example',
        description: 'Create a generator that yields Fibonacci numbers.',
        code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)`,
        output: `0
1
1
2
3
5
8
13
21
34`,
        explanation: 'The fibonacci function is a generator that yields the next number in the Fibonacci sequence each time it is iterated.'
      },

      {
        type: 'lesson',
        title: 'Context Managers & with Statement',
        content: [
          'Context managers allow you to manage resources such as files or network connections safely.',
          'The with statement ensures proper acquisition and release of resources.'
        ],
        points: [
          'Use with to open files safely (automatically closes the file)',
          'Create custom context managers using __enter__() and __exit__()',
          'Useful for file handling, database connections, or temporary resources',
          'Reduces errors and improves readability'
        ]
      },

      {
        type: 'example',
        title: 'Context Manager Example',
        description: 'Using the with statement to read a file safely.',
        code: `# Writing to a file using context manager
with open("example.txt", "w") as f:
    f.write("Hello, Python context managers!")

# Reading from the file
with open("example.txt", "r") as f:
    content = f.read()
    print(content)`,
        output: `Hello, Python context managers!`,
        explanation: 'The with statement ensures that the file is properly closed after the block, even if an error occurs.'
      },

      {
        type: 'lesson',
        title: 'Pythonic Patterns & Best Practices',
        content: [
          'Pythonic code is readable, concise, and takes advantage of Python\'s features.',
          'Using list comprehensions, unpacking, and built-in functions can make code cleaner and faster.'
        ],
        points: [
          'Follow PEP8 style guidelines',
          'Use list/dict/set comprehensions',
          'Use unpacking to assign multiple variables',
          'Use built-in functions like map(), filter(), zip()',
          'Write meaningful function and variable names'
        ]
      },

      {
        type: 'example',
        title: 'Pythonic Code Example',
        description: 'Compare traditional vs Pythonic ways to filter even numbers.',
        code: `# Traditional way
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = []
for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
print(even_numbers)

# Pythonic way
even_numbers2 = [num for num in numbers if num % 2 == 0]
print(even_numbers2)`,
        output: `[2, 4, 6]
[2, 4, 6]`,
        explanation: 'Using list comprehensions makes the code shorter and more readable.'
      },

      {
        type: 'exam',
        title: 'Module 9 Exam: Advanced Python Concepts',
        description: 'Test your understanding of decorators, generators, context managers, and Pythonic coding.',
        duration: 30, // minutes
        passingScore: 70, // percent
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which keyword is used to create a generator in Python?',
            options: ['yield', 'return', 'generate', 'iter'],
            correctAnswer: 0
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What does a context manager help with?',
            options: [
              'Memory management',
              'Resource management',
              'Sorting data',
              'Printing output'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'true-false',
            question: 'Decorators can modify the behavior of a function without changing its code.',
            correctAnswer: true
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which of the following is a Pythonic way to create a list of squares?',
            options: [
              'squares = []\nfor i in range(10): squares.append(i**2)',
              'squares = [i**2 for i in range(10)]',
              'Both 1 and 2',
              'None of the above'
            ],
            correctAnswer: 2
          },
          {
            id: 5,
            type: 'code',
            question: 'Write a decorator that prints "Function called" every time a function is executed.',
            sampleAnswer: `def notify(func):
    def wrapper(*args, **kwargs):
        print("Function called")
        return func(*args, **kwargs)
    return wrapper`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    // Module 10: Final Python Projects
    10: [
      {
        type: 'overview',
        title: 'Final Python Projects',
        content: 'Apply everything you learned in previous modules by building real Python projects. This module will guide you through creating a project from planning to implementation.',
        topics: [
          { title: 'TODO List Project', description: 'Create a Python application to manage tasks' },
          { title: 'Portfolio Website (Python Backend)', description: 'Build a personal portfolio using Python frameworks' },
          { title: 'Personal Finance Management System', description: 'Track income, expenses, and savings using Python' },
          { title: 'Music Player', description: 'Build a simple desktop music player using Python' }
        ]
      },

      {
        type: 'lesson',
        title: 'Planning Your Project',
        content: [
          'Every project starts with careful planning. Define your project goals, required features, and expected outputs.',
          'Break your project into smaller tasks and modules for easier development and testing.'
        ],
        points: [
          'Define project objectives clearly',
          'List main features and optional features',
          'Break features into smaller tasks or functions',
          'Think about input/output, user interface, and data storage',
          'Decide which Python libraries or frameworks you need'
        ]
      },

      {
        type: 'example',
        title: 'TODO List Project',
        description: 'A command-line Python application to manage tasks efficiently.',
        guidelines: [
          'Use Python lists to store tasks and functions to add, remove, and view tasks.',
          'Optional: Save tasks to a CSV or text file for persistence.',
          'Features to implement: add task, remove task, mark task as done, view all tasks.',
          'Extendable: Add due dates, priorities, or categories.'
        ],
        steps: [
          'Step 1: Initialize an empty task list',
          'Step 2: Write functions to add, remove, and view tasks',
          'Step 3: Implement a simple menu loop for user interaction',
          'Step 4: Optional - Save/load tasks from a file',
          'Step 5: Test all features and handle invalid inputs'
        ]
      },

      {
        type: 'example',
        title: 'Portfolio Website (Python Backend)',
        description: 'Build a portfolio website using Flask or FastAPI to showcase projects, skills, and personal information.',
        guidelines: [
          'Use Flask or FastAPI to create routes and serve HTML templates.',
          'Include pages like Home, Projects, About, Contact.',
          'Optional: Use Jinja2 templates for dynamic content.',
          'Optional: Use SQLite or JSON to store project data.'
        ],
        steps: [
          'Step 1: Install Flask/FastAPI and set up a basic app',
          'Step 2: Create HTML templates for your pages',
          'Step 3: Add routes in Python to render pages',
          'Step 4: Add content for projects, skills, and contact info',
          'Step 5: Optional - Deploy to a local server or online hosting'
        ]
      },

      {
        type: 'example',
        title: 'Personal Finance Management System',
        description: 'A Python project to track income, expenses, and savings.',
        guidelines: [
          'Use CSV files or JSON to store transactions.',
          'Implement functions for adding, viewing, and summarizing transactions.',
          'Optional: Generate reports or visualize data with Matplotlib.',
          'Optional: Add categories for expenses like food, rent, utilities.'
        ],
        steps: [
          'Step 1: Decide the data structure (CSV, JSON, or dictionary)',
          'Step 2: Write functions to add and view transactions',
          'Step 3: Calculate total income, expenses, and balance',
          'Step 4: Optional - Visualize data using charts',
          'Step 5: Test with sample transactions'
        ]
      },

      {
        type: 'example',
        title: 'Music Player',
        description: 'Create a simple desktop music player using Python.',
        guidelines: [
          'Use Pygame or Tkinter for playing audio and creating a GUI.',
          'Allow users to play, pause, stop, and load music files.',
          'Optional: Add playlist support, volume control, and track duration display.',
          'Optional: Use os module to load multiple files from a folder.'
        ],
        steps: [
          'Step 1: Install Pygame or Tkinter and initialize audio module',
          'Step 2: Write functions to load and play audio files',
          'Step 3: Implement basic controls (play, pause, stop)',
          'Step 4: Optional - Add GUI buttons and playlist management',
          'Step 5: Test with different audio formats'
        ]
      }
    ]
  },
  webdesign: {
    // Module 1: Introduction to Web Design
    1: [
      {
        type: 'overview',
        title: 'Welcome to Web Design',
        content:
          'Web design focuses on creating visually appealing, user-friendly, and effective websites. In this module, you will learn the fundamentals of web design, including principles, thinking processes, trends, and career opportunities.',
        topics: [
          { title: 'Web Design Principles', description: 'Core principles for effective website design' },
          { title: 'Design Thinking', description: 'Problem-solving approach in design' },
          { title: 'Current Trends', description: 'Modern web design trends and styles' },
          { title: 'Career Paths', description: 'Job roles and opportunities in web design' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      {
        type: 'lesson',
        title: 'Web Design Principles',
        content: [
          'Web design principles guide designers in creating functional and attractive websites.',
          'Good design improves usability, accessibility, and user experience.',
          'Consistency and simplicity are key elements of effective web design.'
        ],
        points: [
          'Balance and alignment',
          'Contrast and color usage',
          'Typography and readability',
          'Visual hierarchy',
          'Responsive design'
        ]
      },

      {
        type: 'lesson',
        title: 'Design Thinking',
        content: [
          'Design thinking is a user-centered approach to solving problems.',
          'It helps designers understand user needs before creating solutions.',
          'This process encourages creativity and innovation.'
        ],
        points: [
          'Empathize with users',
          'Define the problem',
          'Ideate solutions',
          'Create prototypes',
          'Test and improve designs'
        ]
      },

      {
        type: 'lesson',
        title: 'Current Web Design Trends',
        content: [
          'Web design trends evolve with technology and user expectations.',
          'Modern websites focus on performance, accessibility, and aesthetics.'
        ],
        points: [
          'Minimalist design',
          'Dark mode',
          'Mobile-first design',
          'Micro-interactions',
          'AI-powered interfaces'
        ]
      },

      {
        type: 'lesson',
        title: 'Web Design Career Paths',
        content: [
          'Web design offers multiple career opportunities across industries.',
          'Designers can specialize based on skills and interests.'
        ],
        points: [
          'Web Designer',
          'UI Designer',
          'UX Designer',
          'Product Designer',
          'Frontend Developer'
        ]
      },

      {
        type: 'example',
        title: 'Simple Web Page Structure',
        description: 'A basic HTML structure for a web page.',
        code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Website</title>
</head>
<body>
  <h1>Welcome to Web Design</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
        output: 'A simple web page displaying a heading and paragraph.',
        explanation:
          'HTML provides the structure of a website. Headings and paragraphs help organize content clearly.'
      },

      {
        type: 'exam',
        title: 'Module 1 Exam: Web Design Basics',
        description: 'Answer the following questions to test your understanding of web design fundamentals.',
        duration: 20, // minutes
        passingScore: 70, // percent
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What is the main goal of web design?',
            options: [
              'Writing server-side code',
              'Creating user-friendly and visually appealing websites',
              'Managing databases',
              'Configuring servers'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which principle helps guide the user’s attention?',
            options: [
              'Visual hierarchy',
              'Compilation',
              'Encryption',
              'Debugging'
            ],
            correctAnswer: 0
          },
          {
            id: 3,
            type: 'true-false',
            question: 'Design thinking focuses on user needs.',
            correctAnswer: true
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Web design trends never change.',
            correctAnswer: false
          },
          {
            id: 5,
            type: 'code',
            question: 'Write an HTML heading that displays "Hello Web Design".',
            sampleAnswer: `<h1>Hello Web Design</h1>`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    // Module 2: HTML Fundamentals
    2: [
      {
        type: 'overview',
        title: 'HTML Fundamentals',
        content:
          'HTML (HyperText Markup Language) is the foundation of every website. In this module, you will learn how to structure web pages, use semantic elements, build forms, and explore HTML5 APIs.',
        topics: [
          { title: 'HTML Structure', description: 'Basic structure of an HTML document' },
          { title: 'Semantic HTML', description: 'Meaningful HTML elements for better accessibility' },
          { title: 'Forms & Inputs', description: 'Collecting user data using forms' },
          { title: 'HTML5 APIs', description: 'Modern browser APIs provided by HTML5' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'HTML Structure',
        content: [
          'HTML documents follow a standard structure that browsers understand.',
          'The structure defines how content is organized and displayed.',
          'Correct structure improves browser compatibility and SEO.'
        ],
        points: [
          '<!DOCTYPE html> declaration',
          '<html> root element',
          '<head> for metadata',
          '<body> for visible content',
          'Proper nesting and indentation'
        ]
      },

      {
        type: 'lesson',
        title: 'Semantic HTML',
        content: [
          'Semantic HTML uses elements that clearly describe their meaning.',
          'It improves accessibility and helps search engines understand content.',
          'Semantic elements should replace generic divs when possible.'
        ],
        points: [
          '<header>, <nav>, <main>, <footer>',
          '<section> vs <article>',
          '<aside> for secondary content',
          '<figure> and <figcaption>',
          'Accessibility for screen readers'
        ]
      },

      {
        type: 'lesson',
        title: 'Forms & Inputs',
        content: [
          'Forms allow users to submit data to a website.',
          'HTML provides many input types to improve user experience.',
          'Built-in validation reduces JavaScript dependency.'
        ],
        points: [
          '<form action="" method="">',
          'Input types: text, email, password, number, date',
          'Required and placeholder attributes',
          '<label> for accessibility',
          'Client-side validation'
        ]
      },

      {
        type: 'lesson',
        title: 'HTML5 APIs',
        content: [
          'HTML5 introduced APIs that enhance web applications.',
          'These APIs enable offline storage, graphics, and device interaction.'
        ],
        points: [
          'Geolocation API',
          'LocalStorage & SessionStorage',
          'Canvas API',
          'Drag and Drop API',
          'Web Storage API'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Basic HTML Structure Example',
        description: 'Standard structure of an HTML document.',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
<body>
  <h1>Hello HTML</h1>
  <p>This is a basic HTML page.</p>
</body>
</html>`,
        output: 'A web page with a heading and paragraph.',
        explanation:
          'Every HTML page must include doctype, html, head, and body elements.'
      },

      {
        type: 'example',
        title: 'Semantic Layout Example',
        description: 'Using semantic elements for page layout.',
        code: `<header>
  <h1>My Blog</h1>
</header>

<main>
  <article>
    <h2>Post Title</h2>
    <p>Article content here...</p>
  </article>
</main>

<footer>
  <p>© 2026 My Blog</p>
</footer>`,
        output: 'A structured blog layout.',
        explanation:
          'Semantic elements describe the role of each section clearly.'
      },

      {
        type: 'example',
        title: 'Advanced Form Example',
        description: 'Form with validation and multiple input types.',
        code: `<form>
  <label>Username:</label>
  <input type="text" required />

  <label>Email:</label>
  <input type="email" required />

  <label>Password:</label>
  <input type="password" required minlength="6" />

  <button type="submit">Register</button>
</form>`,
        output: 'A registration form with validation.',
        explanation:
          'HTML validation improves user experience before form submission.'
      },

      {
        type: 'example',
        title: 'Local Storage Example',
        description: 'Storing data using HTML5 Web Storage.',
        code: `<script>
  localStorage.setItem("username", "student01");
</script>`,
        output: 'Username saved in browser storage.',
        explanation:
          'LocalStorage stores data persistently in the browser.'
      },

      /* ===================== EXAM (15 QUESTIONS) ===================== */

      {
        type: 'exam',
        title: 'Module 2 Exam: HTML Fundamentals',
        description: 'Answer the following questions to test your HTML knowledge.',
        duration: 30,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What does HTML stand for?',
            options: [
              'Hyper Trainer Marking Language',
              'HyperText Markup Language',
              'HighText Machine Language',
              'Hyper Tool Markup Language'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which tag defines the root of an HTML document?',
            options: ['<body>', '<head>', '<html>', '<main>'],
            correctAnswer: 2
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Which element is semantic?',
            options: ['<div>', '<span>', '<section>', '<b>'],
            correctAnswer: 2
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which input type validates email format?',
            options: ['text', 'email', 'password', 'number'],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which tag is used for navigation links?',
            options: ['<header>', '<nav>', '<section>', '<footer>'],
            correctAnswer: 1
          },
          {
            id: 6,
            type: 'true-false',
            question: '<!DOCTYPE html> is required for modern HTML.',
            correctAnswer: true
          },
          {
            id: 7,
            type: 'true-false',
            question: '<div> is a semantic element.',
            correctAnswer: false
          },
          {
            id: 8,
            type: 'true-false',
            question: 'Forms can be submitted without JavaScript.',
            correctAnswer: true
          },
          {
            id: 9,
            type: 'true-false',
            question: 'LocalStorage data is removed when browser closes.',
            correctAnswer: false
          },
          {
            id: 10,
            type: 'code',
            question: 'Write a basic HTML document structure.',
            sampleAnswer: `<!DOCTYPE html><html><head></head><body></body></html>`,
            evaluation: 'manual'
          },
          {
            id: 11,
            type: 'code',
            question: 'Write a semantic tag for page footer.',
            sampleAnswer: `<footer></footer>`,
            evaluation: 'manual'
          },
          {
            id: 12,
            type: 'code',
            question: 'Create an input field for password.',
            sampleAnswer: `<input type="password" />`,
            evaluation: 'manual'
          },
          {
            id: 13,
            type: 'multiple-choice',
            question: 'Which API is used for offline data storage?',
            options: ['Canvas', 'Geolocation', 'LocalStorage', 'Drag and Drop'],
            correctAnswer: 2
          },
          {
            id: 14,
            type: 'true-false',
            question: 'Semantic HTML improves accessibility.',
            correctAnswer: true
          },
          {
            id: 15,
            type: 'code',
            question: 'Write a label linked to an input field.',
            sampleAnswer: `<label>Email</label><input type="email" />`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    3: [
      {
        type: 'overview',
        title: 'CSS Fundamentals',
        content:
          'CSS (Cascading Style Sheets) is used to style and layout web pages. In this module, you will learn how to apply styles, control spacing, build modern layouts, and create animations.',
        topics: [
          { title: 'CSS Selectors', description: 'Targeting HTML elements for styling' },
          { title: 'Box Model', description: 'Understanding spacing and sizing' },
          { title: 'Flexbox', description: 'Flexible one-dimensional layouts' },
          { title: 'Grid Layout', description: 'Two-dimensional layout system' },
          { title: 'Animations', description: 'Adding motion and transitions' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'CSS Selectors',
        content: [
          'CSS selectors define which HTML elements styles apply to.',
          'Selectors can be simple or combined for precise control.',
          'Good selector usage improves maintainability.'
        ],
        points: [
          'Element selectors (p, div)',
          'Class selectors (.box)',
          'ID selectors (#header)',
          'Attribute selectors ([type="text"])',
          'Pseudo-classes (:hover, :focus)'
        ]
      },

      {
        type: 'lesson',
        title: 'CSS Box Model',
        content: [
          'Every HTML element is treated as a box.',
          'The box model controls layout spacing.',
          'Understanding it prevents layout bugs.'
        ],
        points: [
          'Content area',
          'Padding (inside spacing)',
          'Border',
          'Margin (outside spacing)',
          'box-sizing: border-box'
        ]
      },

      {
        type: 'lesson',
        title: 'Flexbox',
        content: [
          'Flexbox is designed for one-dimensional layouts.',
          'It simplifies alignment and spacing.',
          'Flexbox is ideal for navigation bars and cards.'
        ],
        points: [
          'display: flex',
          'flex-direction',
          'justify-content',
          'align-items',
          'gap'
        ]
      },

      {
        type: 'lesson',
        title: 'Grid Layout',
        content: [
          'CSS Grid is a powerful two-dimensional layout system.',
          'It controls rows and columns simultaneously.',
          'Grid is best for page-level layouts.'
        ],
        points: [
          'display: grid',
          'grid-template-columns',
          'grid-template-rows',
          'gap',
          'grid-area'
        ]
      },

      {
        type: 'lesson',
        title: 'CSS Animations',
        content: [
          'Animations improve user experience when used carefully.',
          'CSS supports transitions and keyframe animations.'
        ],
        points: [
          'transition property',
          '@keyframes',
          'animation-duration',
          'animation-delay',
          'animation-iteration-count'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Selector Example',
        description: 'Using class and ID selectors.',
        code: `#title {
  color: blue;
}

.card {
  padding: 16px;
  border: 1px solid #ccc;
}`,
        output: 'Title turns blue and card has padding and border.',
        explanation:
          'ID selectors are unique, while classes are reusable.'
      },

      {
        type: 'example',
        title: 'Box Model Example',
        description: 'Spacing using padding, border, and margin.',
        code: `.box {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  box-sizing: border-box;
}`,
        output: 'Element keeps fixed width including padding.',
        explanation:
          'border-box prevents size expansion.'
      },

      {
        type: 'example',
        title: 'Flexbox Centering Example',
        description: 'Centering content using Flexbox.',
        code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
        output: 'Content is centered vertically and horizontally.',
        explanation:
          'Flexbox simplifies alignment.'
      },

      {
        type: 'example',
        title: 'Grid Layout Example',
        description: 'Creating a 3-column layout.',
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
        output: 'Items display in three equal columns.',
        explanation:
          'Grid controls both rows and columns.'
      },

      {
        type: 'example',
        title: 'Animation Example',
        description: 'Hover animation using transition.',
        code: `.button {
  background: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background: green;
}`,
        output: 'Button color changes smoothly on hover.',
        explanation:
          'Transitions animate property changes.'
      },

      /* ===================== EXAM (15 QUESTIONS) ===================== */

      {
        type: 'exam',
        title: 'Module 3 Exam: CSS Fundamentals',
        description: 'Answer the following questions to test your CSS knowledge.',
        duration: 30,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which selector targets a class?',
            options: ['#box', '.box', 'box', '*box'],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which property adds space inside an element?',
            options: ['margin', 'padding', 'border', 'outline'],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Which value enables Flexbox?',
            options: ['block', 'inline', 'flex', 'grid'],
            correctAnswer: 2
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which property aligns items vertically in Flexbox?',
            options: ['justify-content', 'align-items', 'gap', 'flex-wrap'],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which layout system is two-dimensional?',
            options: ['Flexbox', 'Float', 'Grid', 'Position'],
            correctAnswer: 2
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Margin controls space outside elements.',
            correctAnswer: true
          },
          {
            id: 7,
            type: 'true-false',
            question: 'CSS Grid cannot control rows.',
            correctAnswer: false
          },
          {
            id: 8,
            type: 'true-false',
            question: 'Animations should be subtle and meaningful.',
            correctAnswer: true
          },
          {
            id: 9,
            type: 'true-false',
            question: 'ID selectors can be reused multiple times.',
            correctAnswer: false
          },
          {
            id: 10,
            type: 'code',
            question: 'Write CSS to enable Flexbox on a container.',
            sampleAnswer: `.container { display: flex; }`,
            evaluation: 'manual'
          },
          {
            id: 11,
            type: 'code',
            question: 'Create a 2-column grid layout.',
            sampleAnswer: `.grid { display: grid; grid-template-columns: repeat(2, 1fr); }`,
            evaluation: 'manual'
          },
          {
            id: 12,
            type: 'code',
            question: 'Write CSS to add 10px margin.',
            sampleAnswer: `.box { margin: 10px; }`,
            evaluation: 'manual'
          },
          {
            id: 13,
            type: 'multiple-choice',
            question: 'Which property animates changes smoothly?',
            options: ['transition', 'float', 'position', 'overflow'],
            correctAnswer: 0
          },
          {
            id: 14,
            type: 'true-false',
            question: 'Flexbox is best for 1D layouts.',
            correctAnswer: true
          },
          {
            id: 15,
            type: 'code',
            question: 'Write a keyframes animation for fading in.',
            sampleAnswer: `@keyframes fade { from { opacity: 0; } to { opacity: 1; } }`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    4: [
      {
        type: 'overview',
        title: 'Responsive Web Design',
        content:
          'Responsive Web Design ensures websites look and work well on all devices, from mobile phones to large desktop screens. This module focuses on mobile-first design, media queries, responsive images, and breakpoints.',
        topics: [
          { title: 'Mobile-First Design', description: 'Designing for small screens first' },
          { title: 'Media Queries', description: 'Applying styles based on screen size' },
          { title: 'Responsive Images', description: 'Optimizing images for different devices' },
          { title: 'Breakpoints', description: 'Adjusting layout at specific screen widths' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'What Is Responsive Web Design?',
        content: [
          'Responsive Web Design adapts layouts to different screen sizes and devices.',
          'It improves usability, accessibility, and performance.',
          'Responsive design is essential for modern web development.'
        ],
        points: [
          'Supports mobile, tablet, and desktop',
          'Improves user experience',
          'Reduces maintenance cost',
          'Preferred by search engines',
          'Industry standard approach'
        ]
      },

      {
        type: 'lesson',
        title: 'Mobile-First Design Concept',
        content: [
          'Mobile-first design starts by designing for the smallest screen.',
          'Layouts are progressively enhanced for larger screens.',
          'This approach improves performance and focus.'
        ],
        points: [
          'Design for mobile first',
          'Add features for larger screens',
          'Faster loading on mobile',
          'Better content prioritization',
          'Recommended by Google'
        ]
      },

      {
        type: 'lesson',
        title: 'Why Mobile-First Matters',
        content: [
          'Most users browse the web on mobile devices.',
          'Mobile-first improves performance and accessibility.',
          'It forces designers to focus on essential content.'
        ],
        points: [
          'Mobile traffic dominance',
          'Simpler layouts',
          'Improved SEO',
          'Better performance',
          'Scalable design'
        ]
      },

      {
        type: 'lesson',
        title: 'Media Queries Basics',
        content: [
          'Media queries allow CSS to apply styles conditionally.',
          'They detect screen size, orientation, and resolution.',
          'Media queries are core to responsive design.'
        ],
        points: [
          '@media rule',
          'min-width and max-width',
          'Orientation queries',
          'Multiple conditions',
          'Logical operators'
        ]
      },

      {
        type: 'lesson',
        title: 'Common Media Query Patterns',
        content: [
          'Media queries are commonly used to change layouts.',
          'They help adapt font size, spacing, and structure.'
        ],
        points: [
          'Mobile-first queries',
          'Desktop-first queries',
          'Range-based queries',
          'Orientation-based queries',
          'Device-independent queries'
        ]
      },

      {
        type: 'lesson',
        title: 'Responsive Images',
        content: [
          'Images must adapt to different screen sizes.',
          'Large images can harm performance on mobile.',
          'Responsive images improve loading speed.'
        ],
        points: [
          'max-width: 100%',
          'height: auto',
          'srcset attribute',
          'sizes attribute',
          'Modern image formats'
        ]
      },

      {
        type: 'lesson',
        title: 'Understanding Breakpoints',
        content: [
          'Breakpoints define when layout changes occur.',
          'They are based on content, not specific devices.',
          'Choosing good breakpoints improves UX.'
        ],
        points: [
          'Mobile breakpoint',
          'Tablet breakpoint',
          'Desktop breakpoint',
          'Content-driven breakpoints',
          'Avoid device-specific thinking'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Mobile-First CSS Example',
        description: 'Starting layout for mobile screens.',
        code: `body {
  font-family: Arial, sans-serif;
}

.container {
  padding: 16px;
}`,
        output: 'Clean layout optimized for mobile.',
        explanation:
          'Base styles target mobile devices first.'
      },

      {
        type: 'example',
        title: 'Media Query Example',
        description: 'Enhancing layout for larger screens.',
        code: `@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: auto;
  }
}`,
        output: 'Layout expands on tablets and desktops.',
        explanation:
          'min-width follows mobile-first principles.'
      },

      {
        type: 'example',
        title: 'Responsive Image Example',
        description: 'Ensuring images scale correctly.',
        code: `img {
  max-width: 100%;
  height: auto;
}`,
        output: 'Images resize with screen width.',
        explanation:
          'Prevents images from overflowing containers.'
      },

      {
        type: 'example',
        title: 'Breakpoint Layout Example',
        description: 'Changing layout at breakpoints.',
        code: `.grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
        output: 'Single column on mobile, three columns on desktop.',
        explanation:
          'Layout adapts based on screen width.'
      },

      {
        type: 'example',
        title: 'Orientation Media Query',
        description: 'Applying styles based on orientation.',
        code: `@media (orientation: landscape) {
  body {
    background-color: #f5f5f5;
  }
}`,
        output: 'Different styling in landscape mode.',
        explanation:
          'Orientation queries enhance UX.'
      },

      /* ===================== EXAM (15 QUESTIONS) ===================== */

      {
        type: 'exam',
        title: 'Module 4 Exam: Responsive Web Design',
        description: 'Answer the following questions to test your responsive design knowledge.',
        duration: 40,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What is the goal of responsive web design?',
            options: [
              'Increase JavaScript usage',
              'Adapt layouts to all screen sizes',
              'Use only mobile devices',
              'Remove CSS'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What does mobile-first design mean?',
            options: [
              'Design desktop first',
              'Design mobile first then scale up',
              'Ignore mobile devices',
              'Use only media queries'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Which media query is mobile-first?',
            options: [
              'max-width',
              'min-width',
              'device-width',
              'orientation'
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which CSS makes images responsive?',
            options: [
              'width: auto',
              'max-width: 100%',
              'display: block',
              'float: left'
            ],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What are breakpoints?',
            options: [
              'Browser bugs',
              'Fixed device sizes',
              'Screen widths where layout changes',
              'CSS errors'
            ],
            correctAnswer: 2
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Mobile-first design improves performance.',
            correctAnswer: true
          },
          {
            id: 7,
            type: 'true-false',
            question: 'Breakpoints should be based on devices only.',
            correctAnswer: false
          },
          {
            id: 8,
            type: 'true-false',
            question: 'Media queries can detect screen orientation.',
            correctAnswer: true
          },
          {
            id: 9,
            type: 'true-false',
            question: 'Responsive images improve page loading speed.',
            correctAnswer: true
          },
          {
            id: 10,
            type: 'code',
            question: 'Write a mobile-first media query for screens wider than 768px.',
            sampleAnswer: `@media (min-width: 768px) { }`,
            evaluation: 'manual'
          },
          {
            id: 11,
            type: 'code',
            question: 'Write CSS to make an image responsive.',
            sampleAnswer: `img { max-width: 100%; height: auto; }`,
            evaluation: 'manual'
          },
          {
            id: 12,
            type: 'code',
            question: 'Create a breakpoint for desktop screens.',
            sampleAnswer: `@media (min-width: 1024px) { }`,
            evaluation: 'manual'
          },
          {
            id: 13,
            type: 'multiple-choice',
            question: 'Which approach is recommended by Google?',
            options: [
              'Desktop-first',
              'Mobile-first',
              'Fixed layout',
              'No CSS'
            ],
            correctAnswer: 1
          },
          {
            id: 14,
            type: 'true-false',
            question: 'Responsive design reduces the need for multiple websites.',
            correctAnswer: true
          },
          {
            id: 15,
            type: 'code',
            question: 'Write a media query for landscape orientation.',
            sampleAnswer: `@media (orientation: landscape) { }`,
            evaluation: 'manual'
          }
        ]
      }
    ],
    5: [
      {
        type: 'overview',
        title: 'UX / UI Design Fundamentals',
        content:
          'UX (User Experience) and UI (User Interface) design focus on creating products that are easy to use, accessible, and enjoyable. In this module, students will learn user research, wireframing, prototyping, usability testing, and accessibility principles.',
        topics: [
          { title: 'User Research', description: 'Understanding user needs and behavior' },
          { title: 'Wireframing', description: 'Planning layouts and structure' },
          { title: 'Prototyping', description: 'Creating interactive design samples' },
          { title: 'Usability Testing', description: 'Testing designs with real users' },
          { title: 'Accessibility', description: 'Designing for all users' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Introduction to UX and UI',
        content: [
          'UX focuses on how users feel when using a product.',
          'UI focuses on how the product looks and interacts.',
          'Good UX/UI design balances user needs and business goals.'
        ],
        points: [
          'UX = experience and usability',
          'UI = visual and interaction design',
          'User-centered design approach',
          'Problem-solving mindset',
          'Iterative design process'
        ]
      },

      {
        type: 'lesson',
        title: 'User Research',
        content: [
          'User research helps designers understand real user problems.',
          'Research should be done before design begins.',
          'Decisions should be based on data, not assumptions.'
        ],
        points: [
          'User interviews',
          'Surveys and questionnaires',
          'User personas',
          'User journeys',
          'Competitive analysis'
        ]
      },

      {
        type: 'lesson',
        title: 'Wireframing',
        content: [
          'Wireframes are simple visual guides for page structure.',
          'They focus on layout, not colors or images.',
          'Wireframes save time by validating ideas early.'
        ],
        points: [
          'Low-fidelity wireframes',
          'High-fidelity wireframes',
          'Page layout structure',
          'Content hierarchy',
          'Navigation planning'
        ]
      },

      {
        type: 'lesson',
        title: 'Prototyping',
        content: [
          'Prototypes simulate how a product will work.',
          'They help stakeholders and users understand interactions.',
          'Prototypes reduce development risk.'
        ],
        points: [
          'Clickable prototypes',
          'Low vs high fidelity',
          'Design tools (Figma, Adobe XD)',
          'Interaction flow',
          'Design validation'
        ]
      },

      {
        type: 'lesson',
        title: 'Usability Testing',
        content: [
          'Usability testing evaluates how easy a design is to use.',
          'Testing reveals problems early in development.',
          'Real users provide the most valuable feedback.'
        ],
        points: [
          'Task-based testing',
          'Observing user behavior',
          'Think-aloud method',
          'Identifying pain points',
          'Iterating based on feedback'
        ]
      },

      {
        type: 'lesson',
        title: 'Accessibility in Design',
        content: [
          'Accessibility ensures products can be used by everyone.',
          'Designs should support users with disabilities.',
          'Accessibility is a legal and ethical requirement.'
        ],
        points: [
          'WCAG guidelines',
          'Color contrast',
          'Keyboard navigation',
          'Screen reader support',
          'Accessible forms and labels'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'User Persona Example',
        description: 'A simple user persona created from research.',
        code: `{
  name: "Sokha",
  age: 21,
  goal: "Learn web development",
  painPoint: "Complex interfaces",
  device: "Mobile"
}`,
        output: 'A persona representing target users.',
        explanation:
          'Personas help designers focus on real user needs.'
      },

      {
        type: 'example',
        title: 'Wireframe Example',
        description: 'Low-fidelity wireframe layout.',
        code: `Header
----------------
Navigation
----------------
Main Content
----------------
Footer`,
        output: 'Simple page layout structure.',
        explanation:
          'Wireframes focus on structure, not visuals.'
      },

      {
        type: 'example',
        title: 'Prototype Flow Example',
        description: 'Simple login flow.',
        code: `Login Page → Dashboard → Profile`,
        output: 'User navigation flow.',
        explanation:
          'Prototypes help visualize user interaction.'
      },

      {
        type: 'example',
        title: 'Usability Test Task Example',
        description: 'Task given to a test user.',
        code: `Task: Register an account and update profile information.`,
        output: 'User completes task while being observed.',
        explanation:
          'Task-based testing identifies usability issues.'
      },

      {
        type: 'example',
        title: 'Accessibility Example',
        description: 'Accessible form input.',
        code: `<label for="email">Email</label>
<input id="email" type="email" aria-required="true" />`,
        output: 'Form accessible to screen readers.',
        explanation:
          'Labels and ARIA attributes improve accessibility.'
      },

      /* ===================== EXAM (15 QUESTIONS) ===================== */

      {
        type: 'exam',
        title: 'Module 5 Exam: UX / UI Design Fundamentals',
        description: 'Answer the following questions to test your UX/UI knowledge.',
        duration: 40,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What is the main goal of UX design?',
            options: [
              'Make interfaces colorful',
              'Improve user experience',
              'Write code',
              'Create animations'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which activity helps understand user needs?',
            options: ['Wireframing', 'User research', 'Coding', 'Deployment'],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'What is a wireframe?',
            options: [
              'Final design',
              'Code structure',
              'Layout blueprint',
              'User database'
            ],
            correctAnswer: 2
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'What is a prototype?',
            options: [
              'Static image',
              'Interactive design sample',
              'Database schema',
              'CSS file'
            ],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Why is usability testing important?',
            options: [
              'To add features',
              'To test server speed',
              'To find usability issues',
              'To deploy faster'
            ],
            correctAnswer: 2
          },
          {
            id: 6,
            type: 'true-false',
            question: 'User research should be done after development.',
            correctAnswer: false
          },
          {
            id: 7,
            type: 'true-false',
            question: 'Wireframes focus on layout, not colors.',
            correctAnswer: true
          },
          {
            id: 8,
            type: 'true-false',
            question: 'Accessibility benefits only disabled users.',
            correctAnswer: false
          },
          {
            id: 9,
            type: 'true-false',
            question: 'Usability testing uses real users.',
            correctAnswer: true
          },
          {
            id: 10,
            type: 'code',
            question: 'Write one example of accessible HTML.',
            sampleAnswer: `<label for="name">Name</label><input id="name" />`,
            evaluation: 'manual'
          },
          {
            id: 11,
            type: 'multiple-choice',
            question: 'Which guideline relates to accessibility?',
            options: ['WCAG', 'HTTP', 'DOM', 'API'],
            correctAnswer: 0
          },
          {
            id: 12,
            type: 'true-false',
            question: 'Prototypes help reduce development risk.',
            correctAnswer: true
          },
          {
            id: 13,
            type: 'multiple-choice',
            question: 'Which tool is commonly used for prototyping?',
            options: ['Figma', 'Git', 'Docker', 'Node.js'],
            correctAnswer: 0
          },
          {
            id: 14,
            type: 'true-false',
            question: 'Good UX balances user and business needs.',
            correctAnswer: true
          },
          {
            id: 15,
            type: 'short-answer',
            question: 'Name one benefit of usability testing.',
            sampleAnswer: 'Identifies user pain points early.',
            evaluation: 'manual'
          }
        ]
      }
    ],
    6: [
      {
        type: 'overview',
        title: 'JavaScript Fundamentals',
        content:
          'JavaScript is a powerful programming language used to make web pages interactive. In this module, students will learn JavaScript basics, DOM manipulation, events, form validation, and animations.',
        topics: [
          { title: 'JavaScript Basics', description: 'Core language concepts' },
          { title: 'DOM Manipulation', description: 'Interacting with HTML elements' },
          { title: 'Events', description: 'Handling user interactions' },
          { title: 'Form Validation', description: 'Validating user input' },
          { title: 'Animations', description: 'Creating simple animations' },
          { title: 'Module Exam', description: 'Test your JavaScript knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'JavaScript Basics',
        content: [
          'JavaScript runs in the browser and makes websites interactive.',
          'It allows you to control logic, data, and behavior.',
          'JavaScript works together with HTML and CSS.'
        ],
        points: [
          'Variables (let, const)',
          'Data types (string, number, boolean)',
          'Operators',
          'Conditions (if / else)',
          'Loops (for, while)',
          'Functions'
        ]
      },

      {
        type: 'lesson',
        title: 'DOM Manipulation',
        content: [
          'DOM stands for Document Object Model.',
          'JavaScript can access and modify HTML elements.',
          'DOM manipulation updates the page without reloading.'
        ],
        points: [
          'getElementById',
          'querySelector',
          'Changing text and HTML',
          'Changing styles',
          'Creating and removing elements'
        ]
      },

      {
        type: 'lesson',
        title: 'Events',
        content: [
          'Events occur when users interact with a webpage.',
          'JavaScript listens for events and responds to them.',
          'Events improve interactivity.'
        ],
        points: [
          'Click events',
          'Input and change events',
          'Keyboard events',
          'Mouse events',
          'addEventListener'
        ]
      },

      {
        type: 'lesson',
        title: 'Form Validation',
        content: [
          'Form validation ensures users enter correct data.',
          'Validation improves data quality and user experience.',
          'Validation can be done using JavaScript.'
        ],
        points: [
          'Required fields',
          'Email format validation',
          'Password length checks',
          'Preventing form submission',
          'Displaying error messages'
        ]
      },

      {
        type: 'lesson',
        title: 'Animations with JavaScript',
        content: [
          'Animations make web pages more engaging.',
          'JavaScript can control animations dynamically.',
          'Animations should be smooth and purposeful.'
        ],
        points: [
          'setTimeout and setInterval',
          'CSS class toggling',
          'Basic animations',
          'Transition control',
          'Performance considerations'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'JavaScript Variable Example',
        description: 'Basic variable declaration.',
        code: `let name = "Sokha";
const age = 20;
console.log(name, age);`,
        output: 'Sokha 20',
        explanation:
          'Variables store data that can be reused in the program.'
      },

      {
        type: 'example',
        title: 'DOM Manipulation Example',
        description: 'Change text content using JavaScript.',
        code: `document.getElementById("title").innerText = "Hello JavaScript";`,
        output: 'Text updated on the page.',
        explanation:
          'JavaScript can modify HTML content dynamically.'
      },

      {
        type: 'example',
        title: 'Event Handling Example',
        description: 'Click event listener.',
        code: `button.addEventListener("click", () => {
  alert("Button clicked!");
});`,
        output: 'Alert appears when button is clicked.',
        explanation:
          'Events respond to user actions.'
      },

      {
        type: 'example',
        title: 'Form Validation Example',
        description: 'Check if input is empty.',
        code: `if (email === "") {
  alert("Email is required");
}`,
        output: 'Validation message displayed.',
        explanation:
          'Form validation prevents incorrect submissions.'
      },

      {
        type: 'example',
        title: 'Animation Example',
        description: 'Toggle CSS class for animation.',
        code: `box.classList.toggle("animate");`,
        output: 'Element animates on screen.',
        explanation:
          'JavaScript controls animations by changing classes.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: JavaScript Fundamentals',
        description: 'Answer the following questions to test your JavaScript knowledge.',
        duration: 45,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which keyword is used to declare a variable?',
            options: ['var', 'let', 'const', 'All of the above'],
            correctAnswer: 3
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What does DOM stand for?',
            options: [
              'Data Object Model',
              'Document Object Model',
              'Display Object Method',
              'Digital Order Model'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Which method selects an element by ID?',
            options: [
              'querySelector',
              'getElementById',
              'getElementsByClass',
              'selectById'
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which event occurs when a button is clicked?',
            options: ['hover', 'submit', 'click', 'load'],
            correctAnswer: 2
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Why is form validation important?',
            options: [
              'Improve design',
              'Reduce server load',
              'Ensure correct data',
              'All of the above'
            ],
            correctAnswer: 3
          },
          {
            id: 6,
            type: 'true-false',
            question: 'JavaScript can change HTML content.',
            correctAnswer: true
          },
          {
            id: 7,
            type: 'true-false',
            question: 'Events cannot be handled by JavaScript.',
            correctAnswer: false
          },
          {
            id: 8,
            type: 'true-false',
            question: 'Form validation improves user experience.',
            correctAnswer: true
          },
          {
            id: 9,
            type: 'true-false',
            question: 'Animations should always be complex.',
            correctAnswer: false
          },
          {
            id: 10,
            type: 'code',
            question: 'Write JavaScript to display an alert message.',
            sampleAnswer: `alert("Hello!");`,
            evaluation: 'manual'
          },
          {
            id: 11,
            type: 'multiple-choice',
            question: 'Which function repeats code at intervals?',
            options: ['setTimeout', 'setInterval', 'repeat', 'loop'],
            correctAnswer: 1
          },
          {
            id: 12,
            type: 'true-false',
            question: 'querySelector can select CSS selectors.',
            correctAnswer: true
          },
          {
            id: 13,
            type: 'multiple-choice',
            question: 'Which is used to stop form submission?',
            options: ['stop()', 'preventDefault()', 'block()', 'cancel()'],
            correctAnswer: 1
          },
          {
            id: 14,
            type: 'short-answer',
            question: 'Name one example of a JavaScript event.',
            sampleAnswer: 'click',
            evaluation: 'manual'
          },
          {
            id: 15,
            type: 'short-answer',
            question: 'Why are animations used in websites?',
            sampleAnswer: 'To improve user engagement.',
            evaluation: 'manual'
          }
        ]
      }
    ],
    7: [
      {
        type: 'overview',
        title: 'CSS Frameworks & UI Libraries',
        content:
          'CSS frameworks and component libraries help developers build responsive, consistent, and professional user interfaces faster. In this module, students will learn Bootstrap 5, Tailwind CSS, custom themes, and modern component libraries.',
        topics: [
          { title: 'Bootstrap 5', description: 'Popular CSS framework for responsive design' },
          { title: 'Tailwind CSS', description: 'Utility-first CSS framework' },
          { title: 'Custom Themes', description: 'Branding and theme customization' },
          { title: 'Component Libraries', description: 'Reusable UI components' },
          { title: 'Module Exam', description: 'Test your understanding' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Bootstrap 5',
        content: [
          'Bootstrap 5 is a popular CSS framework for building responsive websites.',
          'It provides prebuilt components, layout systems, and utilities.',
          'Bootstrap uses a mobile-first approach.'
        ],
        points: [
          'Grid system (row, col)',
          'Responsive breakpoints',
          'Buttons, cards, navbar',
          'Forms and utilities',
          'Bootstrap icons',
          'No jQuery required in Bootstrap 5'
        ]
      },

      {
        type: 'lesson',
        title: 'Tailwind CSS',
        content: [
          'Tailwind CSS is a utility-first CSS framework.',
          'Styles are applied directly in HTML using utility classes.',
          'Tailwind gives developers full control over design.'
        ],
        points: [
          'Utility-first approach',
          'Responsive utilities',
          'Flexbox and Grid helpers',
          'Spacing, colors, typography',
          'Custom configuration (tailwind.config.js)'
        ]
      },

      {
        type: 'lesson',
        title: 'Custom Themes',
        content: [
          'Custom themes allow you to apply branding and consistent styles.',
          'Themes help maintain design consistency across pages.',
          'Both Bootstrap and Tailwind support theming.'
        ],
        points: [
          'Custom colors',
          'Typography styles',
          'Dark and light themes',
          'CSS variables',
          'Theme reuse across projects'
        ]
      },

      {
        type: 'lesson',
        title: 'Component Libraries',
        content: [
          'Component libraries provide reusable UI elements.',
          'They speed up development and ensure consistency.',
          'Often used with modern frameworks like React.'
        ],
        points: [
          'Buttons, modals, tables',
          'Accessibility-ready components',
          'Examples: Bootstrap Components, Material UI, Ant Design',
          'Reusable and scalable UI',
          'Consistent design system'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Bootstrap Button Example',
        description: 'Create a primary button using Bootstrap.',
        code: `<button class="btn btn-primary">Click Me</button>`,
        output: 'A blue Bootstrap button.',
        explanation:
          'Bootstrap provides predefined button styles using classes.'
      },

      {
        type: 'example',
        title: 'Bootstrap Grid Example',
        description: 'Responsive two-column layout.',
        code: `<div class="row">
  <div class="col-md-6">Column 1</div>
  <div class="col-md-6">Column 2</div>
</div>`,
        output: 'Two responsive columns.',
        explanation:
          'Bootstrap grid system uses rows and columns.'
      },

      {
        type: 'example',
        title: 'Tailwind Button Example',
        description: 'Create a styled button using Tailwind CSS.',
        code: `<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>`,
        output: 'A blue Tailwind button.',
        explanation:
          'Tailwind uses utility classes instead of predefined components.'
      },

      {
        type: 'example',
        title: 'Custom Theme Example',
        description: 'Using CSS variables for theming.',
        code: `:root {
  --primary-color: #2563eb;
}

button {
  background-color: var(--primary-color);
}`,
        output: 'Buttons use the custom primary color.',
        explanation:
          'CSS variables make theme customization easy.'
      },

      {
        type: 'example',
        title: 'Component Library Example',
        description: 'Reusable card component.',
        code: `<div class="card">
  <h3>Title</h3>
  <p>Description</p>
</div>`,
        output: 'Reusable card component.',
        explanation:
          'Component libraries promote reuse and consistency.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module 7 Exam: CSS Frameworks & UI Libraries',
        description: 'Answer the following questions to test your knowledge.',
        duration: 45,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What is Bootstrap?',
            options: [
              'A JavaScript framework',
              'A CSS framework',
              'A database',
              'A backend language'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Bootstrap 5 follows which design approach?',
            options: ['Desktop-first', 'Mobile-first', 'Tablet-first', 'Fixed-width'],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'What is Tailwind CSS?',
            options: [
              'Component-based framework',
              'Utility-first CSS framework',
              'JavaScript library',
              'CSS preprocessor'
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'Which file is used to configure Tailwind?',
            options: [
              'style.css',
              'tailwind.config.js',
              'config.css',
              'theme.json'
            ],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What is the benefit of custom themes?',
            options: [
              'Better branding',
              'Consistent design',
              'Easy updates',
              'All of the above'
            ],
            correctAnswer: 3
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Bootstrap 5 requires jQuery.',
            correctAnswer: false
          },
          {
            id: 7,
            type: 'true-false',
            question: 'Tailwind CSS uses utility classes.',
            correctAnswer: true
          },
          {
            id: 8,
            type: 'true-false',
            question: 'Component libraries reduce development time.',
            correctAnswer: true
          },
          {
            id: 9,
            type: 'true-false',
            question: 'Themes help maintain consistent UI design.',
            correctAnswer: true
          },
          {
            id: 10,
            type: 'multiple-choice',
            question: 'Which is a component library?',
            options: ['Material UI', 'Tailwind', 'Bootstrap Grid', 'CSS Variables'],
            correctAnswer: 0
          },
          {
            id: 11,
            type: 'short-answer',
            question: 'Name one Bootstrap component.',
            sampleAnswer: 'Navbar',
            evaluation: 'manual'
          },
          {
            id: 12,
            type: 'short-answer',
            question: 'Why use Tailwind CSS?',
            sampleAnswer: 'For flexible and custom UI design.',
            evaluation: 'manual'
          },
          {
            id: 13,
            type: 'code',
            question: 'Write a Bootstrap class for a primary button.',
            sampleAnswer: `<button class="btn btn-primary"></button>`,
            evaluation: 'manual'
          },
          {
            id: 14,
            type: 'code',
            question: 'Write a Tailwind class to add padding.',
            sampleAnswer: `p-4`,
            evaluation: 'manual'
          },
          {
            id: 15,
            type: 'short-answer',
            question: 'What is a UI component?',
            sampleAnswer: 'A reusable UI element.',
            evaluation: 'manual'
          }
        ]
      }
    ],
    8: [
      {
        type: 'overview',
        title: 'UI/UX Design Tools & Collaboration',
        content:
          'Modern UI/UX designers use powerful design tools and structured workflows to create, manage, and collaborate on digital products. This module introduces industry-standard tools such as Figma and Adobe XD, design systems, and version control concepts for designers.',
        topics: [
          { title: 'Figma', description: 'Cloud-based UI/UX design and collaboration tool' },
          { title: 'Adobe XD', description: 'Design and prototyping tool from Adobe' },
          { title: 'Design Systems', description: 'Reusable components and design standards' },
          { title: 'Version Control for Designers', description: 'Managing design changes and collaboration' },
          { title: 'Module Exam', description: 'Evaluate your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Figma',
        content: [
          'Figma is a cloud-based UI/UX design tool used for interface design and prototyping.',
          'It allows real-time collaboration between designers and developers.',
          'Figma runs in the browser and as a desktop application.'
        ],
        points: [
          'Frames, layers, and components',
          'Auto layout',
          'Prototyping and interactions',
          'Real-time collaboration',
          'Developer handoff (Inspect)',
          'Plugins and community resources'
        ]
      },

      {
        type: 'lesson',
        title: 'Adobe XD',
        content: [
          'Adobe XD is a vector-based UI/UX design tool.',
          'It integrates well with other Adobe products.',
          'Adobe XD supports wireframing, prototyping, and design systems.'
        ],
        points: [
          'Artboards and layouts',
          'Repeat grid',
          'Interactive prototypes',
          'Design specs',
          'Integration with Photoshop and Illustrator'
        ]
      },

      {
        type: 'lesson',
        title: 'Design Systems',
        content: [
          'A design system is a collection of reusable components and design rules.',
          'It ensures consistency across products and teams.',
          'Design systems improve collaboration between designers and developers.'
        ],
        points: [
          'Color palette',
          'Typography styles',
          'Buttons and UI components',
          'Spacing and layout rules',
          'Accessibility guidelines',
          'Documentation'
        ]
      },

      {
        type: 'lesson',
        title: 'Version Control for Designers',
        content: [
          'Version control helps designers track changes and collaborate safely.',
          'It prevents overwriting work and enables rollback to previous versions.',
          'Modern design tools support version history.'
        ],
        points: [
          'Version history',
          'Branching concepts',
          'Design file comments',
          'File naming conventions',
          'Collaboration with developers',
          'Tools: Figma History, Git for design assets'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Figma Component Example',
        description: 'Create a reusable button component in Figma.',
        code: `1. Draw a rectangle
2. Add text label
3. Select both
4. Convert to Component`,
        output: 'Reusable button component.',
        explanation:
          'Components allow consistent UI elements across designs.'
      },

      {
        type: 'example',
        title: 'Figma Auto Layout Example',
        description: 'Create a responsive card using Auto Layout.',
        code: `Auto Layout:
- Direction: Vertical
- Padding: 16px
- Gap: 8px`,
        output: 'Responsive card layout.',
        explanation:
          'Auto Layout adjusts spacing automatically.'
      },

      {
        type: 'example',
        title: 'Adobe XD Repeat Grid Example',
        description: 'Create a list using Repeat Grid.',
        code: `Select items → Enable Repeat Grid → Drag`,
        output: 'Repeated list items.',
        explanation:
          'Repeat Grid speeds up layout creation.'
      },

      {
        type: 'example',
        title: 'Design System Example',
        description: 'Define color and typography tokens.',
        code: `Primary Color: #2563EB
Font: Inter
Button Radius: 8px`,
        output: 'Consistent design tokens.',
        explanation:
          'Design tokens keep UI consistent.'
      },

      {
        type: 'example',
        title: 'Version History Example',
        description: 'Restore a previous design version.',
        code: `File → Show version history → Restore`,
        output: 'Previous design restored.',
        explanation:
          'Version history prevents data loss.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module 8 Exam: UI/UX Design Tools & Collaboration',
        description: 'Answer the following questions to test your knowledge.',
        duration: 45,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What is Figma?',
            options: [
              'Image editor',
              'UI/UX design tool',
              'Database',
              'Programming language'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which feature allows real-time collaboration in Figma?',
            options: ['Layers', 'Auto Layout', 'Multiplayer', 'Frames'],
            correctAnswer: 2
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Adobe XD is mainly used for?',
            options: ['Backend development', 'UI/UX design', 'Server hosting', 'Testing'],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'What is a design system?',
            options: [
              'A coding framework',
              'A set of reusable design rules and components',
              'A database',
              'A design software'
            ],
            correctAnswer: 1
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Why use design systems?',
            options: [
              'Consistency',
              'Scalability',
              'Collaboration',
              'All of the above'
            ],
            correctAnswer: 3
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Figma requires installation to work.',
            correctAnswer: false
          },
          {
            id: 7,
            type: 'true-false',
            question: 'Components can be reused across designs.',
            correctAnswer: true
          },
          {
            id: 8,
            type: 'true-false',
            question: 'Version control is only for developers.',
            correctAnswer: false
          },
          {
            id: 9,
            type: 'true-false',
            question: 'Design systems improve team efficiency.',
            correctAnswer: true
          },
          {
            id: 10,
            type: 'multiple-choice',
            question: 'Which tool provides Auto Layout?',
            options: ['Adobe XD', 'Figma', 'Photoshop', 'Illustrator'],
            correctAnswer: 1
          },
          {
            id: 11,
            type: 'short-answer',
            question: 'Name one benefit of using Figma.',
            sampleAnswer: 'Real-time collaboration',
            evaluation: 'manual'
          },
          {
            id: 12,
            type: 'short-answer',
            question: 'What is version history?',
            sampleAnswer: 'A record of file changes.',
            evaluation: 'manual'
          },
          {
            id: 13,
            type: 'short-answer',
            question: 'Name one design system component.',
            sampleAnswer: 'Button',
            evaluation: 'manual'
          },
          {
            id: 14,
            type: 'code',
            question: 'List one design token.',
            sampleAnswer: 'Primary color',
            evaluation: 'manual'
          },
          {
            id: 15,
            type: 'short-answer',
            question: 'Why is accessibility important in design?',
            sampleAnswer: 'To ensure usability for all users.',
            evaluation: 'manual'
          }
        ]
      }
    ],
    9: [
      {
        type: 'overview',
        title: 'Web Performance & SEO Fundamentals',
        content:
          'Optimizing web performance and search engine visibility is crucial for modern websites. In this module, students will learn about page speed optimization, SEO basics, meta tags, analytics, and tools to improve site performance.',
        topics: [
          { title: 'Page Speed Optimization', description: 'Improve website load times and responsiveness' },
          { title: 'SEO Basics', description: 'Search engine optimization principles' },
          { title: 'Meta Tags', description: 'HTML elements that provide metadata to browsers and search engines' },
          { title: 'Analytics', description: 'Tracking and analyzing website performance' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Page Speed Optimization',
        content: [
          'Page speed impacts user experience, engagement, and search ranking.',
          'Optimized websites load faster and reduce bounce rates.',
          'Both frontend and backend optimizations are important.'
        ],
        points: [
          'Minify CSS, JavaScript, and HTML',
          'Optimize images (compression, WebP format)',
          'Use caching strategies',
          'Lazy loading for images and videos',
          'Reduce HTTP requests',
          'Use a Content Delivery Network (CDN)'
        ]
      },

      {
        type: 'lesson',
        title: 'SEO Basics',
        content: [
          'Search Engine Optimization (SEO) improves visibility on search engines.',
          'Proper SEO helps users find your website and content.',
          'SEO combines technical, on-page, and off-page strategies.'
        ],
        points: [
          'Keyword research and placement',
          'Readable URLs',
          'Internal linking',
          'Header tags (H1-H6)',
          'Content quality and relevance',
          'Mobile-friendliness'
        ]
      },

      {
        type: 'lesson',
        title: 'Meta Tags',
        content: [
          'Meta tags provide metadata about a web page.',
          'They are placed in the HTML <head> section.',
          'Meta tags influence SEO, social sharing, and browser behavior.'
        ],
        points: [
          '<title>: Page title',
          '<meta name="description">',
          '<meta name="keywords">',
          '<meta name="viewport">',
          'Open Graph tags for social media',
          'Robots meta tag to control indexing'
        ]
      },

      {
        type: 'lesson',
        title: 'Analytics',
        content: [
          'Analytics tools track user behavior, traffic, and conversions.',
          'They provide data to improve user experience and business decisions.',
          'Popular analytics tools are easy to integrate.'
        ],
        points: [
          'Google Analytics setup',
          'Track pageviews and events',
          'Conversion tracking',
          'User behavior flow',
          'Report generation and insights',
          'A/B testing for optimization'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Image Optimization Example',
        description: 'Convert images to WebP format.',
        code: `<img src="image.webp" alt="Optimized Image">`,
        output: 'Faster-loading images.',
        explanation: 'WebP images are smaller and load faster than JPEG or PNG.'
      },

      {
        type: 'example',
        title: 'Meta Tag Example',
        description: 'SEO meta tags in HTML head.',
        code: `<head>
  <title>My Web Page</title>
  <meta name="description" content="Learn web development and optimization">
  <meta name="keywords" content="HTML, CSS, JavaScript, SEO">
</head>`,
        output: 'Search engines read this metadata.',
        explanation: 'Meta tags improve search engine visibility.'
      },

      {
        type: 'example',
        title: 'Lazy Loading Example',
        description: 'Load images only when visible.',
        code: `<img src="image.jpg" loading="lazy" alt="Lazy Image">`,
        output: 'Images load only when needed.',
        explanation: 'Lazy loading reduces initial page load time.'
      },

      {
        type: 'example',
        title: 'Analytics Example',
        description: 'Google Analytics basic setup.',
        code: `<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>`,
        output: 'Tracks pageviews and user behavior.',
        explanation: 'Analytics script sends data to Google Analytics.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module 9 Exam: Web Performance & SEO',
        description: 'Answer the following questions to test your knowledge.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'What affects page speed?', options: ['Images', 'CSS', 'JavaScript', 'All of the above'], correctAnswer: 3 },
          { id: 2, type: 'multiple-choice', question: 'What does SEO stand for?', options: ['Search Engine Optimization', 'Site Error Overview', 'Server Execution Order', 'Search Engine Operation'], correctAnswer: 0 },
          { id: 3, type: 'multiple-choice', question: 'Which meta tag controls mobile scaling?', options: ['description', 'viewport', 'keywords', 'robots'], correctAnswer: 1 },
          { id: 4, type: 'multiple-choice', question: 'What is lazy loading?', options: ['Load all images at once', 'Load images when visible', 'Delay CSS', 'Compress JS'], correctAnswer: 1 },
          { id: 5, type: 'multiple-choice', question: 'Which format is faster for images?', options: ['JPEG', 'PNG', 'WebP', 'GIF'], correctAnswer: 2 },
          { id: 6, type: 'true-false', question: 'SEO improves website visibility on search engines.', correctAnswer: true },
          { id: 7, type: 'true-false', question: 'Page speed has no effect on user experience.', correctAnswer: false },
          { id: 8, type: 'true-false', question: 'Meta description helps search engines understand page content.', correctAnswer: true },
          { id: 9, type: 'true-false', question: 'Analytics can track user behavior.', correctAnswer: true },
          { id: 10, type: 'true-false', question: 'Using too many large images can slow down a website.', correctAnswer: true },
          { id: 11, type: 'short-answer', question: 'Name one benefit of optimizing page speed.', sampleAnswer: 'Improves user experience', evaluation: 'manual' },
          { id: 12, type: 'short-answer', question: 'Name one SEO strategy.', sampleAnswer: 'Using header tags correctly', evaluation: 'manual' },
          { id: 13, type: 'short-answer', question: 'Give an example of a meta tag.', sampleAnswer: '<meta name="description" content="...">', evaluation: 'manual' },
          { id: 14, type: 'short-answer', question: 'Why use Google Analytics?', sampleAnswer: 'To track website traffic and behavior', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Name one way to reduce HTTP requests.', sampleAnswer: 'Combine CSS/JS files', evaluation: 'manual' }
        ]
      }
    ],
    10: [
      {
        type: 'overview',
        title: 'Final Project & Portfolio',
        content:
          'This module guides students through planning, creating, and deploying a final portfolio website. It also covers project presentation and showcases best practices for professional portfolios.',
        topics: [
          { title: 'Project Planning', description: 'Define project goals, features, and workflow' },
          { title: 'Final Portfolio Website', description: 'Design and develop your own portfolio website' },
          { title: 'Deployment', description: 'Publish your website online' },
          { title: 'Presentation', description: 'Prepare and present your project' },
          { title: 'Module Exam', description: 'Evaluate your overall understanding' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Project Planning',
        content: [
          'Project planning is essential to organize ideas, define scope, and allocate resources.',
          'A clear plan reduces development time and ensures a successful project.'
        ],
        points: [
          'Define project objectives and target audience',
          'Create a list of required features',
          'Sketch wireframes and mockups',
          'Plan development workflow and milestones',
          'Use tools like Trello, Jira, or Notion for task management'
        ]
      },

      {
        type: 'lesson',
        title: 'Final Portfolio Website',
        content: [
          'Your portfolio website demonstrates your skills and projects.',
          'It should be visually appealing, responsive, and functional.'
        ],
        points: [
          'Include sections: About, Projects, Skills, Contact',
          'Responsive design using CSS frameworks or Flex/Grid',
          'Add interactivity with JavaScript',
          'Use consistent design systems and themes',
          'Optimize for performance and accessibility'
        ]
      },

      {
        type: 'lesson',
        title: 'Deployment',
        content: [
          'Deployment makes your portfolio accessible online.',
          'Modern tools allow easy hosting and continuous updates.'
        ],
        points: [
          'Use hosting platforms like GitHub Pages, Netlify, or Vercel',
          'Configure domain name (optional)',
          'Ensure assets are optimized for performance',
          'Test website on different devices and browsers',
          'Enable SSL for secure connections (HTTPS)'
        ]
      },

      {
        type: 'lesson',
        title: 'Presentation',
        content: [
          'Presenting your project professionally showcases your work and communication skills.',
          'A good presentation includes visuals, live demo, and explanation of features.'
        ],
        points: [
          'Prepare slides summarizing the project',
          'Explain design choices and tools used',
          'Demonstrate functionality live',
          'Highlight challenges and solutions',
          'Collect feedback and questions from audience'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Project Planning Example',
        description: 'Define features for a portfolio site.',
        code: `- Home page with intro
- Projects gallery
- About me section
- Contact form
- Responsive design`,
        output: 'Clear project roadmap.',
        explanation: 'Planning helps organize features before coding.'
      },

      {
        type: 'example',
        title: 'Portfolio Layout Example',
        description: 'HTML structure for projects section.',
        code: `<section id="projects">
  <div class="project-card">Project 1</div>
  <div class="project-card">Project 2</div>
</section>`,
        output: 'Displays multiple projects on the portfolio page.',
        explanation: 'Use semantic HTML and CSS for styling.'
      },

      {
        type: 'example',
        title: 'Deployment Example',
        description: 'Deploying to GitHub Pages.',
        code: `1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select main branch → Save
4. Access site at username.github.io/repository`,
        output: 'Portfolio website live online.',
        explanation: 'Simple deployment using GitHub Pages.'
      },

      {
        type: 'example',
        title: 'Presentation Example',
        description: 'Prepare slides for project demo.',
        code: `Slide 1: Project overview
Slide 2: Tools and tech stack
Slide 3: Features demonstration
Slide 4: Challenges and solutions
Slide 5: Conclusion & next steps`,
        output: 'Structured presentation for audience.',
        explanation: 'Organized slides improve communication.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module 10 Exam: Final Project & Portfolio',
        description: 'Answer the following questions to evaluate your understanding of web project development.',
        duration: 60,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'What is the first step in a project?', options: ['Coding', 'Planning', 'Deployment', 'Presentation'], correctAnswer: 1 },
          { id: 2, type: 'multiple-choice', question: 'Which section is essential in a portfolio?', options: ['About', 'Blog', 'Forum', 'Shopping cart'], correctAnswer: 0 },
          { id: 3, type: 'multiple-choice', question: 'Which tool can be used for hosting?', options: ['Netlify', 'Photoshop', 'Figma', 'Illustrator'], correctAnswer: 0 },
          { id: 4, type: 'multiple-choice', question: 'Responsive design is important because?', options: ['Mobile users', 'Desktop users', 'Tablet users', 'All devices'], correctAnswer: 3 },
          { id: 5, type: 'multiple-choice', question: 'What improves presentation clarity?', options: ['Random order slides', 'Structured slides', 'Skip demo', 'No visuals'], correctAnswer: 1 },
          { id: 6, type: 'true-false', question: 'Planning helps reduce development errors.', correctAnswer: true },
          { id: 7, type: 'true-false', question: 'Deployment is optional for a portfolio.', correctAnswer: false },
          { id: 8, type: 'true-false', question: 'Portfolio should include personal projects.', correctAnswer: true },
          { id: 9, type: 'true-false', question: 'Presentation does not require a live demo.', correctAnswer: false },
          { id: 10, type: 'true-false', question: 'Optimized images improve website performance.', correctAnswer: true },
          { id: 11, type: 'short-answer', question: 'Name one platform to deploy a website.', sampleAnswer: 'GitHub Pages', evaluation: 'manual' },
          { id: 12, type: 'short-answer', question: 'Why is responsive design important?', sampleAnswer: 'To ensure the site works on all devices.', evaluation: 'manual' },
          { id: 13, type: 'short-answer', question: 'List one section in a portfolio website.', sampleAnswer: 'Projects', evaluation: 'manual' },
          { id: 14, type: 'short-answer', question: 'Why is project planning important?', sampleAnswer: 'It organizes tasks and reduces errors.', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Give one tip for effective presentation.', sampleAnswer: 'Use live demo and visuals.', evaluation: 'manual' }
        ]
      }
    ],
  },
  ecommerce: {
    1: [{
      type: 'overview',
      title: 'E-commerce Fundamentals',
      content:
        'This module introduces the basics of e-commerce, including business models, market analysis, and legal considerations. Students will learn how online businesses operate and what it takes to launch an e-commerce project.',
      topics: [
        { title: 'E-commerce Overview', description: 'What is e-commerce and why it matters' },
        { title: 'Business Models', description: 'Different e-commerce business models and revenue strategies' },
        { title: 'Market Analysis', description: 'Understanding the target market, competition, and trends' },
        { title: 'Legal Considerations', description: 'Regulations, compliance, and policies for online businesses' },
        { title: 'Module Exam', description: 'Test your knowledge' }
      ]
    },

    /* ===================== LESSONS ===================== */

    {
      type: 'lesson',
      title: 'E-commerce Overview',
      content: [
        'E-commerce refers to buying and selling goods or services online.',
        'It includes retail, digital products, subscriptions, and services.',
        'Understanding the e-commerce ecosystem is crucial for success.'
      ],
      points: [
        'Online marketplaces (Amazon, eBay)',
        'Direct-to-consumer (D2C) websites',
        'B2B e-commerce platforms',
        'Mobile commerce (m-commerce)',
        'Digital products and services'
      ]
    },

    {
      type: 'lesson',
      title: 'Business Models',
      content: [
        'E-commerce business models determine how a company generates revenue.',
        'Choosing the right model is key for profitability and scalability.'
      ],
      points: [
        'B2C (Business-to-Consumer): Online stores selling directly to customers',
        'B2B (Business-to-Business): Selling products or services to other businesses',
        'C2C (Consumer-to-Consumer): Platforms like eBay or Etsy',
        'Subscription-based model: Recurring revenue from services or products',
        'Dropshipping: Selling products without holding inventory'
      ]
    },

    {
      type: 'lesson',
      title: 'Market Analysis',
      content: [
        'Market analysis helps identify opportunities and understand competition.',
        'It involves researching target audiences, competitors, and trends.'
      ],
      points: [
        'Identify target audience demographics',
        'Analyze competitors’ strengths and weaknesses',
        'Evaluate market demand and trends',
        'Determine pricing strategies',
        'Use tools like Google Trends, SEMrush, and surveys'
      ]
    },

    {
      type: 'lesson',
      title: 'Legal Considerations',
      content: [
        'E-commerce businesses must comply with laws and regulations to operate legally.',
        'Non-compliance can result in fines or shutdown.'
      ],
      points: [
        'Business registration and licenses',
        'Data privacy laws (e.g., GDPR)',
        'Consumer protection regulations',
        'Terms of Service and Privacy Policy',
        'Payment and tax compliance'
      ]
    },

    /* ===================== EXAMPLES ===================== */

    {
      type: 'example',
      title: 'B2C E-commerce Example',
      description: 'A basic online store selling products directly to customers.',
      code: `// Example product list in JSON
[
  { "id": 1, "name": "T-shirt", "price": 15.99 },
  { "id": 2, "name": "Laptop", "price": 899.99 }
]`,
      output: 'Displays products with price and purchase option.',
      explanation: 'B2C stores sell directly to consumers.'
    },

    {
      type: 'example',
      title: 'Subscription Model Example',
      description: 'A subscription-based service.',
      code: `// Example subscription plans
[
  { "plan": "Basic", "price": 9.99 },
  { "plan": "Pro", "price": 19.99 }
]`,
      output: 'Users can subscribe to recurring plans.',
      explanation: 'Subscription models provide recurring revenue.'
    },

    {
      type: 'example',
      title: 'Market Analysis Example',
      description: 'Using Google Trends to research interest in a product.',
      code: `// Steps:
1. Go to Google Trends
2. Search product keyword
3. Analyze trend graph
4. Compare with competitors`,
      output: 'Identify popular products and seasonal demand.',
      explanation: 'Market research helps optimize product selection.'
    },

    {
      type: 'example',
      title: 'Legal Compliance Example',
      description: 'Include Privacy Policy on an e-commerce website.',
      code: `<footer>
  <a href="/privacy-policy">Privacy Policy</a>
</footer>`,
      output: 'Website complies with data privacy requirements.',
      explanation: 'Displaying a Privacy Policy ensures legal compliance.'
    },

    /* ===================== MODULE EXAM ===================== */

    {
      type: 'exam',
      title: 'Module Exam: E-commerce Fundamentals',
      description: 'Test your knowledge of e-commerce concepts and practices.',
      duration: 45,
      passingScore: 70,
      questions: [
        { id: 1, type: 'multiple-choice', question: 'What does B2C stand for?', options: ['Business-to-Customer', 'Business-to-Company', 'Buyer-to-Customer', 'Business-to-Commerce'], correctAnswer: 0 },
        { id: 2, type: 'multiple-choice', question: 'Which e-commerce model allows users to sell to each other?', options: ['B2C', 'B2B', 'C2C', 'Subscription'], correctAnswer: 2 },
        { id: 3, type: 'multiple-choice', question: 'What is dropshipping?', options: ['Holding inventory', 'Selling products without holding inventory', 'Subscription service', 'B2B sales'], correctAnswer: 1 },
        { id: 4, type: 'multiple-choice', question: 'Why perform market analysis?', options: ['Understand competition', 'Identify target audience', 'Check demand', 'All of the above'], correctAnswer: 3 },
        { id: 5, type: 'multiple-choice', question: 'Which law affects customer data privacy?', options: ['GDPR', 'HTML5', 'SEO', 'HTTP'], correctAnswer: 0 },
        { id: 6, type: 'true-false', question: 'B2B e-commerce is selling directly to consumers.', correctAnswer: false },
        { id: 7, type: 'true-false', question: 'Subscription models provide recurring revenue.', correctAnswer: true },
        { id: 8, type: 'true-false', question: 'Ignoring legal regulations has no impact on e-commerce.', correctAnswer: false },
        { id: 9, type: 'true-false', question: 'Market analysis helps optimize product selection.', correctAnswer: true },
        { id: 10, type: 'true-false', question: 'C2C platforms include marketplaces like Etsy.', correctAnswer: true },
        { id: 11, type: 'short-answer', question: 'Name one e-commerce business model.', sampleAnswer: 'B2C', evaluation: 'manual' },
        { id: 12, type: 'short-answer', question: 'Give one tool for market research.', sampleAnswer: 'Google Trends', evaluation: 'manual' },
        { id: 13, type: 'short-answer', question: 'Name one legal requirement for online stores.', sampleAnswer: 'Privacy Policy', evaluation: 'manual' },
        { id: 14, type: 'short-answer', question: 'What is the main advantage of subscription models?', sampleAnswer: 'Recurring revenue', evaluation: 'manual' },
        { id: 15, type: 'short-answer', question: 'Give an example of a B2B platform.', sampleAnswer: 'Alibaba', evaluation: 'manual' }
      ]
    }],
    2: [
      {
        type: 'overview',
        title: 'E-commerce Platforms',
        content:
          'This module introduces popular e-commerce platforms and custom solutions. Students will learn how to choose the right platform based on business size, features, and technical expertise.',
        topics: [
          { title: 'Shopify', description: 'Hosted platform for creating online stores quickly' },
          { title: 'WooCommerce', description: 'WordPress plugin to add e-commerce functionality' },
          { title: 'Magento', description: 'Flexible, open-source e-commerce platform for large businesses' },
          { title: 'Custom Solutions', description: 'Building tailored e-commerce solutions from scratch' },
          { title: 'Platform Comparison', description: 'Compare features, pricing, and scalability' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Shopify',
        content: [
          'Shopify is a hosted e-commerce platform allowing businesses to quickly launch online stores.',
          'It provides templates, apps, and built-in payment options.'
        ],
        points: [
          'Hosted platform – no server management',
          'Drag-and-drop store builder',
          'Supports multiple payment gateways',
          'App marketplace for additional features',
          'Best for small to medium businesses'
        ]
      },

      {
        type: 'lesson',
        title: 'WooCommerce',
        content: [
          'WooCommerce is a WordPress plugin that adds e-commerce functionality to websites.',
          'It is flexible, open-source, and widely used for small to medium stores.'
        ],
        points: [
          'Requires WordPress installation',
          'Customizable with plugins and themes',
          'Supports digital and physical products',
          'Open-source with strong community support',
          'Scalable with extensions'
        ]
      },

      {
        type: 'lesson',
        title: 'Magento',
        content: [
          'Magento is an open-source platform ideal for large and enterprise-level e-commerce stores.',
          'It provides advanced features and customization but requires technical expertise.'
        ],
        points: [
          'Highly customizable with extensions',
          'Supports multi-store and multi-currency',
          'Scalable for large businesses',
          'Open-source community and enterprise editions',
          'Requires developer skills or team support'
        ]
      },

      {
        type: 'lesson',
        title: 'Custom Solutions',
        content: [
          'Custom solutions are built from scratch to meet unique business requirements.',
          'They provide complete control but are more resource-intensive.'
        ],
        points: [
          'Fully tailored to business needs',
          'Unlimited customization options',
          'Higher development and maintenance costs',
          'Requires skilled developers',
          'Best for complex or niche businesses'
        ]
      },

      {
        type: 'lesson',
        title: 'Platform Comparison',
        content: [
          'Choosing the right e-commerce platform depends on budget, scalability, features, and technical expertise.'
        ],
        points: [
          'Shopify: Fast setup, limited customization, hosted',
          'WooCommerce: Flexible, WordPress-based, open-source',
          'Magento: Highly scalable, complex, developer-dependent',
          'Custom: Fully tailored, costly, requires development team'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Shopify Example',
        description: 'Creating a simple Shopify store.',
        code: `// Shopify provides a dashboard to add products, customize theme, and set up payment gateways.`,
        output: 'Online store ready to sell products quickly.',
        explanation: 'Shopify simplifies setup with hosted tools.'
      },

      {
        type: 'example',
        title: 'WooCommerce Example',
        description: 'Adding WooCommerce to a WordPress website.',
        code: `// Steps:
1. Install WordPress
2. Add WooCommerce plugin
3. Configure products and payments
4. Customize theme`,
        output: 'Functional online store integrated with WordPress.',
        explanation: 'WooCommerce leverages WordPress flexibility.'
      },

      {
        type: 'example',
        title: 'Magento Example',
        description: 'Setting up Magento for a multi-store enterprise.',
        code: `// Requires hosting, installation, configuring multiple stores, and adding extensions.`,
        output: 'Scalable e-commerce solution with advanced features.',
        explanation: 'Magento is suitable for large and complex businesses.'
      },

      {
        type: 'example',
        title: 'Custom Solution Example',
        description: 'Building an e-commerce platform from scratch.',
        code: `// Using frameworks like Laravel or Django to create custom e-commerce features.`,
        output: 'Completely tailored store meeting specific business requirements.',
        explanation: 'Custom solutions offer maximum flexibility but higher cost.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: E-commerce Platforms',
        description: 'Test your knowledge of e-commerce platforms.',
        duration: 40,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'Which platform is hosted and easy to set up?', options: ['Shopify', 'WooCommerce', 'Magento', 'Custom'], correctAnswer: 0 },
          { id: 2, type: 'multiple-choice', question: 'Which platform is a WordPress plugin?', options: ['Shopify', 'WooCommerce', 'Magento', 'Custom'], correctAnswer: 1 },
          { id: 3, type: 'multiple-choice', question: 'Which platform is ideal for large businesses?', options: ['Shopify', 'WooCommerce', 'Magento', 'Custom'], correctAnswer: 2 },
          { id: 4, type: 'multiple-choice', question: 'Custom solutions are best for?', options: ['Simple stores', 'Unique business requirements', 'Pre-built templates', 'Low budget projects'], correctAnswer: 1 },
          { id: 5, type: 'true-false', question: 'Shopify requires server management by the user.', correctAnswer: false },
          { id: 6, type: 'true-false', question: 'Magento requires developer expertise.', correctAnswer: true },
          { id: 7, type: 'true-false', question: 'WooCommerce cannot sell digital products.', correctAnswer: false },
          { id: 8, type: 'short-answer', question: 'Name one hosted e-commerce platform.', sampleAnswer: 'Shopify', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Name one open-source e-commerce platform.', sampleAnswer: 'Magento', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Why choose custom solutions?', sampleAnswer: 'For unique business requirements', evaluation: 'manual' }
        ]
      }
    ],
    3: [
      {
        type: 'overview',
        title: 'Product Management in E-commerce',
        content:
          'This module teaches students how to manage products effectively in an online store, covering catalog management, product photography, product descriptions, and inventory systems.',
        topics: [
          { title: 'Catalog Management', description: 'Organizing products for easy browsing and search' },
          { title: 'Product Photography', description: 'High-quality images to improve sales and trust' },
          { title: 'Descriptions', description: 'Writing effective product descriptions for clarity and SEO' },
          { title: 'Inventory Systems', description: 'Managing stock and availability efficiently' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Catalog Management',
        content: [
          'Catalog management involves organizing products into categories, collections, or types to help customers find them easily.',
          'It also ensures consistency in product attributes, pricing, and labeling.'
        ],
        points: [
          'Use clear categories and subcategories',
          'Maintain consistent product attributes (size, color, brand)',
          'Implement filters for better search (price, category, rating)',
          'Update catalog regularly',
          'Ensure easy navigation and searchability'
        ]
      },

      {
        type: 'lesson',
        title: 'Product Photography',
        content: [
          'High-quality product images increase trust, reduce returns, and improve sales.'
        ],
        points: [
          'Use consistent lighting and background',
          'Provide multiple angles of the product',
          'Include lifestyle/context images',
          'Optimize image file size for web performance',
          'Use high-resolution images for zooming'
        ]
      },

      {
        type: 'lesson',
        title: 'Product Descriptions',
        content: [
          'Effective product descriptions inform, persuade, and improve search engine visibility.'
        ],
        points: [
          'Highlight key features and benefits',
          'Use clear, concise language',
          'Include dimensions, specifications, or usage instructions',
          'Incorporate SEO-friendly keywords',
          'Focus on what the customer will gain from the product'
        ]
      },

      {
        type: 'lesson',
        title: 'Inventory Systems',
        content: [
          'Inventory systems track stock, prevent overselling, and help with demand forecasting.'
        ],
        points: [
          'Track stock levels in real-time',
          'Set low-stock alerts and notifications',
          'Integrate inventory with e-commerce platform',
          'Avoid overselling or stockouts',
          'Analyze sales trends for better reordering decisions'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Catalog Management Example',
        description: 'Organizing products into categories and collections.',
        code: `// Example structure in JSON
[
  { "category": "Clothing", "subcategories": ["T-shirts", "Jackets", "Jeans"] },
  { "category": "Electronics", "subcategories": ["Phones", "Laptops", "Accessories"] }
]`,
        output: 'Customers can browse by category and filter products easily.',
        explanation: 'Structured catalog improves customer navigation and discovery.'
      },

      {
        type: 'example',
        title: 'Product Photography Example',
        description: 'Using multiple angles for a T-shirt product.',
        code: `// Images: front.jpg, back.jpg, side.jpg, model.jpg`,
        output: 'Customer can view product from multiple perspectives.',
        explanation: 'Multiple images increase confidence in purchase decisions.'
      },

      {
        type: 'example',
        title: 'Product Description Example',
        description: 'Writing a concise and clear description for a laptop.',
        code: `<p>Powerful laptop with 16GB RAM, 512GB SSD, Intel i7 processor. Perfect for gaming and productivity.</p>`,
        output: 'Customer gets key product information at a glance.',
        explanation: 'Clear, benefit-focused descriptions help conversion and SEO.'
      },

      {
        type: 'example',
        title: 'Inventory System Example',
        description: 'Tracking stock in real-time using software.',
        code: `// Example inventory JSON
[
  { "productId": 1, "name": "T-shirt", "stock": 25 },
  { "productId": 2, "name": "Laptop", "stock": 10 }
]`,
        output: 'Shows current stock for each product.',
        explanation: 'Helps prevent overselling and manage replenishment.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: Product Management',
        description: 'Test your knowledge of catalog management, product photography, descriptions, and inventory systems.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'What is the purpose of catalog management?', options: ['Organize products', 'Manage payments', 'Track customer data', 'Optimize SEO only'], correctAnswer: 0 },
          { id: 2, type: 'multiple-choice', question: 'Which improves product trust online?', options: ['Low prices', 'High-quality photography', 'Long descriptions', 'Shipping methods'], correctAnswer: 1 },
          { id: 3, type: 'multiple-choice', question: 'Product descriptions should include?', options: ['Key features and benefits', 'Competitor prices', 'Website traffic', 'Payment info'], correctAnswer: 0 },
          { id: 4, type: 'multiple-choice', question: 'Inventory systems help to?', options: ['Prevent overselling', 'Design website', 'Collect payments', 'Send marketing emails'], correctAnswer: 0 },
          { id: 5, type: 'true-false', question: 'High-quality product images can reduce returns.', correctAnswer: true },
          { id: 6, type: 'true-false', question: 'Inventory tracking is optional for small stores.', correctAnswer: false },
          { id: 7, type: 'true-false', question: 'SEO keywords should be included in product descriptions.', correctAnswer: true },
          { id: 8, type: 'short-answer', question: 'Give one method to organize a product catalog.', sampleAnswer: 'By category', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Name one key element of a good product photo.', sampleAnswer: 'Multiple angles', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Give one feature an inventory system should track.', sampleAnswer: 'Stock level', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'Why are product descriptions important?', sampleAnswer: 'Inform and persuade customers', evaluation: 'manual' },
          { id: 12, type: 'short-answer', question: 'Name one tool to manage product inventory.', sampleAnswer: 'Shopify inventory', evaluation: 'manual' },
          { id: 13, type: 'true-false', question: 'Consistent product attributes improve catalog clarity.', correctAnswer: true },
          { id: 14, type: 'multiple-choice', question: 'Which type of images increase trust?', options: ['Stock images', 'Multiple angles of product', 'Random images', 'Icons only'], correctAnswer: 1 },
          { id: 15, type: 'short-answer', question: 'How often should a catalog be updated?', sampleAnswer: 'Regularly or when new products arrive', evaluation: 'manual' }
        ]
      }
    ],
    4: [
      {
        type: 'overview',
        title: 'Payment & Security in E-commerce',
        content:
          'This module covers essential aspects of payment processing and security in e-commerce, including payment gateways, SSL certificates, PCI compliance, and fraud prevention strategies.',
        topics: [
          { title: 'Payment Gateways', description: 'Integrate payment solutions for online transactions' },
          { title: 'SSL Certificates', description: 'Encrypt customer data and secure transactions' },
          { title: 'PCI Compliance', description: 'Follow payment security standards for handling card data' },
          { title: 'Fraud Prevention', description: 'Detect and prevent fraudulent transactions' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Payment Gateways',
        content: [
          'Payment gateways allow e-commerce websites to process online payments securely and efficiently.'
        ],
        points: [
          'Popular gateways: PayPal, Stripe, Square, Authorize.net',
          'Supports credit/debit cards, digital wallets, and alternative payments',
          'Integrate directly with e-commerce platforms',
          'Enable multiple currencies if needed',
          'Ensure fast, reliable, and secure transactions'
        ]
      },

      {
        type: 'lesson',
        title: 'SSL Certificates',
        content: [
          'SSL certificates encrypt data between the customer and the website, protecting sensitive information like credit card details.'
        ],
        points: [
          'Enable HTTPS for all pages',
          'Protect personal and payment data',
          'Improves customer trust and SEO ranking',
          'Renew certificates before expiration',
          'Choose certificates from trusted providers'
        ]
      },

      {
        type: 'lesson',
        title: 'PCI Compliance',
        content: [
          'PCI DSS (Payment Card Industry Data Security Standard) compliance ensures safe handling of credit card information.'
        ],
        points: [
          'Follow PCI DSS security requirements',
          'Do not store sensitive card data unless necessary',
          'Use secure payment processors',
          'Regularly audit systems for compliance',
          'Train staff on security best practices'
        ]
      },

      {
        type: 'lesson',
        title: 'Fraud Prevention',
        content: [
          'Fraud prevention protects businesses and customers from scams, chargebacks, and unauthorized transactions.'
        ],
        points: [
          'Monitor suspicious transactions',
          'Enable 3D Secure verification',
          'Use fraud detection software and plugins',
          'Check for chargebacks and disputed payments',
          'Educate customers on secure transactions'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Payment Gateway Example',
        description: 'Integrating Stripe as a payment gateway.',
        code: `// Example integration snippet (Stripe)
const stripe = require('stripe')('your_api_key');
const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method_types: ['card'],
});`,
        output: 'Customer can pay securely using a credit card.',
        explanation: 'Payment gateways enable online transactions safely and efficiently.'
      },

      {
        type: 'example',
        title: 'SSL Certificate Example',
        description: 'Enable HTTPS using SSL for your website.',
        code: `// Steps:
1. Purchase SSL certificate from trusted CA
2. Install certificate on web server
3. Redirect all HTTP traffic to HTTPS
4. Test using SSL tools`,
        output: 'Website is encrypted, and data is secure.',
        explanation: 'SSL protects sensitive customer data and improves trust.'
      },

      {
        type: 'example',
        title: 'PCI Compliance Example',
        description: 'Using PCI-compliant payment processors.',
        code: `// Do not store card data directly.
Use Stripe or PayPal to process payments securely.`,
        output: 'Credit card data handled safely without storing sensitive info.',
        explanation: 'Following PCI standards reduces risk of data breaches.'
      },

      {
        type: 'example',
        title: 'Fraud Prevention Example',
        description: 'Detect suspicious transactions.',
        code: `// Example: Set up 3D Secure for payments
if(paymentRequiresAuthentication) {
  redirectTo3DSecure();
}`,
        output: 'Reduces fraud and unauthorized transactions.',
        explanation: 'Fraud prevention tools protect business and customers.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: Payment & Security',
        description: 'Test your knowledge of payment gateways, SSL, PCI compliance, and fraud prevention.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'What is the purpose of a payment gateway?', options: ['Process online payments', 'Track inventory', 'Manage SEO', 'Send emails'], correctAnswer: 0 },
          { id: 2, type: 'multiple-choice', question: 'Which protocol encrypts customer data?', options: ['HTTP', 'HTTPS/SSL', 'FTP', 'SMTP'], correctAnswer: 1 },
          { id: 3, type: 'multiple-choice', question: 'PCI compliance ensures?', options: ['Safe handling of card data', 'Faster shipping', 'Better SEO', 'Higher conversion'], correctAnswer: 0 },
          { id: 4, type: 'multiple-choice', question: 'Fraud prevention includes?', options: ['3D Secure', 'Suspicious transaction monitoring', 'Chargeback analysis', 'All of the above'], correctAnswer: 3 },
          { id: 5, type: 'true-false', question: 'SSL certificates protect sensitive customer information.', correctAnswer: true },
          { id: 6, type: 'true-false', question: 'PCI compliance is optional for e-commerce sites.', correctAnswer: false },
          { id: 7, type: 'true-false', question: 'Fraud prevention helps reduce chargebacks.', correctAnswer: true },
          { id: 8, type: 'short-answer', question: 'Name one popular payment gateway.', sampleAnswer: 'Stripe', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Give one step to enable SSL.', sampleAnswer: 'Install certificate on server', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Why is PCI compliance important?', sampleAnswer: 'Protects customer card data', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'Name one method to prevent fraud.', sampleAnswer: 'Enable 3D Secure', evaluation: 'manual' },
          { id: 12, type: 'multiple-choice', question: 'Which of these is NOT a payment gateway?', options: ['PayPal', 'Stripe', 'Magento', 'Square'], correctAnswer: 2 },
          { id: 13, type: 'true-false', question: '3D Secure verification adds an extra layer of payment security.', correctAnswer: true },
          { id: 14, type: 'short-answer', question: 'Give one example of a fraud detection tool.', sampleAnswer: 'FraudLabs Pro', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'What should you monitor to prevent fraud?', sampleAnswer: 'Suspicious transactions', evaluation: 'manual' }
        ]
      }
    ],
    5: [
      {
        type: 'overview',
        title: 'Cart & Checkout Optimization',
        content:
          'This module focuses on designing and optimizing the shopping cart and checkout experience. Students will learn about cart functionality, improving checkout flow, abandoned cart recovery, and guest checkout to maximize conversions.',
        topics: [
          { title: 'Cart Functionality', description: 'Essential features for the shopping cart' },
          { title: 'Checkout Optimization', description: 'Streamline the checkout process for better conversion' },
          { title: 'Abandoned Cart Recovery', description: 'Techniques to recover lost sales' },
          { title: 'Guest Checkout', description: 'Allow users to checkout without creating an account' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Cart Functionality',
        content: [
          'The shopping cart is a key part of the e-commerce experience, allowing users to select and review products before purchase.'
        ],
        points: [
          'Add, remove, and update product quantities',
          'Show subtotal, taxes, and shipping estimates',
          'Save cart for logged-in users',
          'Display product images, names, and prices clearly',
          'Responsive cart design for mobile and desktop'
        ]
      },

      {
        type: 'lesson',
        title: 'Checkout Optimization',
        content: [
          'A smooth and fast checkout increases conversion rates and reduces cart abandonment.'
        ],
        points: [
          'Minimize the number of steps in the checkout process',
          'Enable autofill and address suggestions',
          'Provide multiple payment options',
          'Show progress indicators (Step 1, Step 2, etc.)',
          'Offer order summary and clear total price before payment'
        ]
      },

      {
        type: 'lesson',
        title: 'Abandoned Cart Recovery',
        content: [
          'Many users leave without completing the purchase. Recovery strategies help convert these potential customers.'
        ],
        points: [
          'Send automated reminder emails or SMS',
          'Offer limited-time discounts',
          'Use push notifications for logged-in users',
          'Provide clear call-to-action to return to checkout',
          'Track abandoned carts in analytics for improvement'
        ]
      },

      {
        type: 'lesson',
        title: 'Guest Checkout',
        content: [
          'Allowing users to checkout without creating an account reduces friction and improves conversions.'
        ],
        points: [
          'Provide guest checkout option alongside account creation',
          'Collect essential information only (email, shipping address)',
          'Allow easy account creation after purchase',
          'Maintain security and fraud checks',
          'Integrate with payment gateways seamlessly'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Cart Functionality Example',
        description: 'Adding products to a cart and updating quantities using JavaScript.',
        code: `// Example: Cart object
let cart = [];
function addToCart(product) {
  cart.push(product);
}
function updateQuantity(productId, qty) {
  let item = cart.find(p => p.id === productId);
  if(item) item.quantity = qty;
}`,
        output: 'User can add products, remove, and update quantities in the cart.',
        explanation: 'Basic cart functionality is essential for any online store.'
      },

      {
        type: 'example',
        title: 'Checkout Optimization Example',
        description: 'Streamlined checkout steps.',
        code: `// Steps:
1. Review cart
2. Enter shipping info
3. Choose payment method
4. Confirm order`,
        output: 'Users complete checkout in fewer steps, improving conversion.',
        explanation: 'Reducing friction in checkout improves purchase completion.'
      },

      {
        type: 'example',
        title: 'Abandoned Cart Recovery Example',
        description: 'Send an automated email reminder for abandoned carts.',
        code: `// Example pseudo-code
if(cart.abandoned) {
  sendEmail(cart.userEmail, "You left items in your cart! Complete your purchase now.");
}`,
        output: 'Users are reminded to complete checkout, recovering lost sales.',
        explanation: 'Automated recovery strategies help boost revenue.'
      },

      {
        type: 'example',
        title: 'Guest Checkout Example',
        description: 'Allow checkout without creating an account.',
        code: `// Checkout form collects only essential info
<form>
  <input type="email" required />
  <input type="address" required />
  <button>Pay Now</button>
</form>`,
        output: 'Users can complete purchase quickly without account creation.',
        explanation: 'Guest checkout reduces friction and improves user experience.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: Cart & Checkout Optimization',
        description: 'Test your knowledge of cart functionality, checkout optimization, abandoned cart recovery, and guest checkout.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'Which feature is essential in a shopping cart?', options: ['Add/remove products', 'SEO optimization', 'SSL certificate', 'Marketing automation'], correctAnswer: 0 },
          { id: 2, type: 'multiple-choice', question: 'Checkout optimization helps to?', options: ['Increase conversion', 'Decrease page load', 'Improve SEO', 'Send marketing emails'], correctAnswer: 0 },
          { id: 3, type: 'multiple-choice', question: 'Abandoned cart recovery includes?', options: ['Email reminders', 'Offering discounts', 'Push notifications', 'All of the above'], correctAnswer: 3 },
          { id: 4, type: 'multiple-choice', question: 'Guest checkout is useful because?', options: ['Reduces friction', 'Requires login', 'Increases taxes', 'Blocks carts'], correctAnswer: 0 },
          { id: 5, type: 'true-false', question: 'Users should be forced to create accounts to checkout.', correctAnswer: false },
          { id: 6, type: 'true-false', question: 'Progress indicators improve checkout experience.', correctAnswer: true },
          { id: 7, type: 'true-false', question: 'Abandoned cart recovery can increase revenue.', correctAnswer: true },
          { id: 8, type: 'short-answer', question: 'Name one method to recover abandoned carts.', sampleAnswer: 'Email reminders', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Why is guest checkout important?', sampleAnswer: 'Reduces friction for first-time buyers', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Give one feature of cart functionality.', sampleAnswer: 'Update quantity', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'List one way to optimize checkout.', sampleAnswer: 'Minimize number of steps', evaluation: 'manual' },
          { id: 12, type: 'multiple-choice', question: 'Which is NOT part of abandoned cart recovery?', options: ['Email reminder', 'Push notification', 'SEO meta tags', 'Discount offer'], correctAnswer: 2 },
          { id: 13, type: 'true-false', question: 'Multiple payment options improve checkout.', correctAnswer: true },
          { id: 14, type: 'short-answer', question: 'Name one essential field in guest checkout.', sampleAnswer: 'Email address', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Give one strategy to improve cart design.', sampleAnswer: 'Show product image and price clearly', evaluation: 'manual' }
        ]
      }
    ],
    6: [
      {
        type: 'overview',
        title: 'E-commerce Marketing',
        content:
          'This module teaches students how to promote e-commerce stores using SEO, paid advertising, social media, and email campaigns. Effective marketing drives traffic, conversions, and revenue.',
        topics: [
          { title: 'SEO for E-commerce', description: 'Improve organic search visibility and attract customers' },
          { title: 'Google Ads', description: 'Run paid campaigns to reach targeted audiences' },
          { title: 'Social Media Marketing', description: 'Leverage social platforms to engage customers' },
          { title: 'Email Campaigns', description: 'Communicate with customers and drive repeat purchases' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'SEO for E-commerce',
        content: [
          'Search Engine Optimization (SEO) helps your store rank higher on search engines and attract organic traffic.'
        ],
        points: [
          'Optimize product titles and descriptions with keywords',
          'Use clean URLs and proper metadata (title tags, meta descriptions)',
          'Optimize images (alt text, file size)',
          'Create content that adds value (blogs, guides)',
          'Build backlinks and internal linking for authority'
        ]
      },

      {
        type: 'lesson',
        title: 'Google Ads',
        content: [
          'Google Ads allows businesses to run targeted paid campaigns to drive traffic and sales.'
        ],
        points: [
          'Choose the right campaign type (Search, Display, Shopping)',
          'Set budget and bidding strategy',
          'Target keywords and audience demographics',
          'Monitor performance with metrics like CTR, CPC, ROAS',
          'Use retargeting to convert visitors'
        ]
      },

      {
        type: 'lesson',
        title: 'Social Media Marketing',
        content: [
          'Social media marketing helps build brand awareness, engage customers, and drive traffic to your store.'
        ],
        points: [
          'Choose platforms where your audience is active (Facebook, Instagram, TikTok)',
          'Plan content strategy: posts, reels, stories, and ads',
          'Engage with followers via comments and DMs',
          'Collaborate with influencers',
          'Analyze performance metrics to improve campaigns'
        ]
      },

      {
        type: 'lesson',
        title: 'Email Campaigns',
        content: [
          'Email marketing keeps customers informed, encourages repeat purchases, and builds loyalty.'
        ],
        points: [
          'Segment email lists based on behavior and demographics',
          'Send promotional, transactional, and educational emails',
          'Use personalized subject lines and content',
          'Analyze open rates, click-through rates, and conversions',
          'Automate abandoned cart, welcome series, and follow-up emails'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'SEO Example',
        description: 'Optimizing a product page for search engines.',
        code: `<!-- Example meta tags -->
<title>Red Cotton T-Shirt - BrandName</title>
<meta name="description" content="Buy Red Cotton T-Shirt, soft and comfortable, available in all sizes. Free shipping.">`,
        output: 'Improved search engine ranking for product keywords.',
        explanation: 'Well-optimized meta tags and descriptions improve visibility and clicks.'
      },

      {
        type: 'example',
        title: 'Google Ads Example',
        description: 'Creating a Google Shopping ad campaign.',
        code: `// Steps:
1. Upload product feed
2. Set daily budget and target audience
3. Select keywords or product targets
4. Launch campaign and monitor performance`,
        output: 'Targeted ads appear to users searching for products.',
        explanation: 'Paid advertising drives immediate traffic and sales.'
      },

      {
        type: 'example',
        title: 'Social Media Marketing Example',
        description: 'Promoting products on Instagram.',
        code: `// Example:
1. Post high-quality product photos
2. Use relevant hashtags (#ecommerce, #tshirt)
3. Run Instagram Ads targeting age 18-35
4. Track engagement and sales`,
        output: 'Engages potential customers and drives traffic to the store.',
        explanation: 'Social media campaigns increase brand awareness and conversions.'
      },

      {
        type: 'example',
        title: 'Email Campaign Example',
        description: 'Sending abandoned cart emails.',
        code: `// Example pseudo-code
if(cart.abandoned) {
  sendEmail(cart.userEmail, "You left items in your cart! Complete your purchase and get 10% off.");
}`,
        output: 'Recovers lost sales by reminding customers to complete purchase.',
        explanation: 'Targeted emails improve conversions and customer retention.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: E-commerce Marketing',
        description: 'Test your knowledge of SEO, Google Ads, social media, and email marketing.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'What is the main goal of SEO?', options: ['Rank higher in search engines', 'Send emails', 'Manage inventory', 'Create ads'], correctAnswer: 0 },
          { id: 2, type: 'multiple-choice', question: 'Which is a Google Ads campaign type?', options: ['Shopping', 'Blogging', 'Newsletter', 'SEO'], correctAnswer: 0 },
          { id: 3, type: 'multiple-choice', question: 'Social media marketing helps with?', options: ['Brand awareness', 'Conversions', 'Engagement', 'All of the above'], correctAnswer: 3 },
          { id: 4, type: 'multiple-choice', question: 'Which is NOT part of email marketing?', options: ['Abandoned cart emails', 'Welcome emails', 'Checkout optimization', 'Promotional campaigns'], correctAnswer: 2 },
          { id: 5, type: 'true-false', question: 'SEO improves organic traffic to your store.', correctAnswer: true },
          { id: 6, type: 'true-false', question: 'Google Ads requires paying for clicks or impressions.', correctAnswer: true },
          { id: 7, type: 'true-false', question: 'Social media campaigns cannot drive sales.', correctAnswer: false },
          { id: 8, type: 'short-answer', question: 'Name one SEO technique for product pages.', sampleAnswer: 'Optimize meta tags', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Give one way to target customers using Google Ads.', sampleAnswer: 'Use keywords', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Name one type of social media content.', sampleAnswer: 'Reels', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'What is one benefit of email campaigns?', sampleAnswer: 'Recover abandoned carts', evaluation: 'manual' },
          { id: 12, type: 'multiple-choice', question: 'Which tool can track ad performance?', options: ['Google Analytics', 'Photoshop', 'WordPress', 'MailChimp'], correctAnswer: 0 },
          { id: 13, type: 'true-false', question: 'Personalized email subject lines improve open rates.', correctAnswer: true },
          { id: 14, type: 'short-answer', question: 'Name one metric to measure social media success.', sampleAnswer: 'Engagement rate', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Why use content in SEO?', sampleAnswer: 'To attract and inform users', evaluation: 'manual' }
        ]
      }
    ],
    7: [
      {
        type: 'overview',
        title: 'Customer Support & Engagement',
        content:
          'This module teaches students how to manage customer service, returns, reviews, and automated support using chatbots. Strong customer engagement increases satisfaction, loyalty, and repeat purchases.',
        topics: [
          { title: 'Customer Service', description: 'Best practices for assisting and supporting customers' },
          { title: 'Returns & Refunds', description: 'Efficiently handling returns and refunds to improve trust' },
          { title: 'Reviews Management', description: 'Collecting, displaying, and responding to customer reviews' },
          { title: 'Chatbots', description: 'Automating support using AI-powered chatbots' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Customer Service',
        content: [
          'Excellent customer service ensures customer satisfaction and encourages repeat purchases.'
        ],
        points: [
          'Offer multiple support channels: email, phone, live chat',
          'Respond promptly and professionally',
          'Train staff on product knowledge',
          'Use CRM tools to manage customer interactions',
          'Monitor customer feedback to improve service'
        ]
      },

      {
        type: 'lesson',
        title: 'Returns & Refunds',
        content: [
          'Handling returns and refunds efficiently builds trust and reduces customer complaints.'
        ],
        points: [
          'Provide clear return policies',
          'Automate refund processing when possible',
          'Track returned items and reasons',
          'Offer replacement, store credit, or cash refund',
          'Ensure transparency and timely communication'
        ]
      },

      {
        type: 'lesson',
        title: 'Reviews Management',
        content: [
          'Customer reviews influence purchasing decisions and improve SEO.'
        ],
        points: [
          'Collect reviews via email or post-purchase prompts',
          'Display positive and constructive reviews on product pages',
          'Respond professionally to negative reviews',
          'Encourage verified buyers to leave feedback',
          'Analyze reviews for product improvements'
        ]
      },

      {
        type: 'lesson',
        title: 'Chatbots',
        content: [
          'Chatbots provide automated support, improving response time and customer experience.'
        ],
        points: [
          'Use AI-powered chatbots for FAQs and simple queries',
          'Integrate chatbots with CRM and order management systems',
          'Escalate complex queries to human agents',
          'Collect user data and feedback for better personalization',
          'Track chatbot performance metrics and improve responses'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Customer Service Example',
        description: 'Using a CRM to track customer support tickets.',
        code: `// Example pseudo-code
CRM.createTicket(userId, issue)
CRM.assignTicket(agentId)
CRM.markResolved(ticketId)`,
        output: 'Support tickets are tracked and resolved efficiently.',
        explanation: 'A structured system ensures customers are helped promptly.'
      },

      {
        type: 'example',
        title: 'Returns & Refunds Example',
        description: 'Automating refund processing in an e-commerce system.',
        code: `// Example pseudo-code
if(order.returnRequested) {
  processRefund(orderId)
  notifyCustomer(order.userEmail)
}`,
        output: 'Customers receive timely refunds and updates.',
        explanation: 'Automation reduces errors and improves trust.'
      },

      {
        type: 'example',
        title: 'Reviews Management Example',
        description: 'Displaying customer reviews on a product page.',
        code: `<div class="reviews">
  <p>"Great product!" - Alice</p>
  <p>"Fast shipping and quality items." - Bob</p>
</div>`,
        output: 'Visitors can see customer feedback.',
        explanation: 'Reviews increase trust and help SEO.'
      },

      {
        type: 'example',
        title: 'Chatbot Example',
        description: 'A chatbot answering FAQs on the website.',
        code: `// Example pseudo-code
chatbot.onMessage(message) {
  if(message.contains("shipping")) reply("Our shipping takes 3-5 days.")
  else escalateToHuman()
}`,
        output: 'Provides instant answers to customer queries.',
        explanation: 'Chatbots improve response time and reduce workload.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: Customer Support & Engagement',
        description: 'Test your knowledge of customer service, returns, reviews, and chatbots.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'Which channel is NOT a common customer support method?', options: ['Phone', 'Email', 'Live chat', 'SEO'], correctAnswer: 3 },
          { id: 2, type: 'multiple-choice', question: 'Why are clear return policies important?', options: ['Build trust', 'Increase shipping costs', 'Improve SEO', 'Reduce product quality'], correctAnswer: 0 },
          { id: 3, type: 'multiple-choice', question: 'Reviews management helps with?', options: ['Customer trust', 'SEO', 'Product improvement', 'All of the above'], correctAnswer: 3 },
          { id: 4, type: 'multiple-choice', question: 'Chatbots are mainly used for?', options: ['Automating support', 'Processing payments', 'SEO optimization', 'Product photography'], correctAnswer: 0 },
          { id: 5, type: 'true-false', question: 'Prompt responses improve customer satisfaction.', correctAnswer: true },
          { id: 6, type: 'true-false', question: 'Negative reviews should be ignored.', correctAnswer: false },
          { id: 7, type: 'true-false', question: 'Automation can improve returns processing.', correctAnswer: true },
          { id: 8, type: 'short-answer', question: 'Name one tool to manage customer support.', sampleAnswer: 'Zendesk', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Give one benefit of customer reviews.', sampleAnswer: 'Build trust', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Name one type of chatbot function.', sampleAnswer: 'FAQ responses', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'Why is guest support important?', sampleAnswer: 'Improves satisfaction for first-time buyers', evaluation: 'manual' },
          { id: 12, type: 'multiple-choice', question: 'Which is an example of automated support?', options: ['Chatbot', 'Phone call', 'Email ticket', 'Return label'], correctAnswer: 0 },
          { id: 13, type: 'true-false', question: 'Responding to customer complaints promptly increases loyalty.', correctAnswer: true },
          { id: 14, type: 'short-answer', question: 'Give one strategy to manage negative reviews.', sampleAnswer: 'Respond politely and resolve the issue', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Name one benefit of using chatbots.', sampleAnswer: 'Reduce workload for support agents', evaluation: 'manual' }
        ]
      }
    ],
    8: [
      {
        type: 'overview',
        title: 'Analytics & Performance',
        content:
          'This module teaches students how to track and analyze e-commerce performance using analytics, improve conversion rates, run A/B tests, and monitor KPIs to optimize online store performance.',
        topics: [
          { title: 'Google Analytics', description: 'Track traffic, user behavior, and sales performance' },
          { title: 'Conversion Rate Optimization', description: 'Improve the percentage of visitors who complete purchases' },
          { title: 'A/B Testing', description: 'Compare different versions of pages to find the most effective one' },
          { title: 'KPIs', description: 'Key Performance Indicators to monitor e-commerce success' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Google Analytics',
        content: [
          'Google Analytics provides insights into website traffic, user behavior, and conversion paths.'
        ],
        points: [
          'Track number of visitors, sessions, and pageviews',
          'Analyze user demographics and behavior flow',
          'Monitor traffic sources (organic, paid, social)',
          'Track e-commerce transactions and revenue',
          'Set up goals and events for important actions'
        ]
      },

      {
        type: 'lesson',
        title: 'Conversion Rate Optimization (CRO)',
        content: [
          'CRO focuses on increasing the percentage of website visitors who complete desired actions, such as making a purchase.'
        ],
        points: [
          'Simplify checkout process',
          'Improve website load speed',
          'Use clear call-to-action buttons',
          'Add trust signals like reviews and security badges',
          'Analyze and reduce cart abandonment'
        ]
      },

      {
        type: 'lesson',
        title: 'A/B Testing',
        content: [
          'A/B testing compares two or more versions of a page or element to determine which performs better.'
        ],
        points: [
          'Test headlines, product images, and CTA buttons',
          'Randomly assign visitors to different versions',
          'Measure performance metrics (CTR, conversion, bounce rate)',
          'Implement changes based on results',
          'Continuously iterate for optimization'
        ]
      },

      {
        type: 'lesson',
        title: 'KPIs',
        content: [
          'Key Performance Indicators (KPIs) measure e-commerce success and help make data-driven decisions.'
        ],
        points: [
          'Conversion rate',
          'Average order value (AOV)',
          'Customer acquisition cost (CAC)',
          'Customer lifetime value (CLV)',
          'Cart abandonment rate',
          'Traffic sources and revenue per source'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Google Analytics Example',
        description: 'Tracking e-commerce sales and user behavior.',
        code: `// Example steps:
1. Set up GA account
2. Add tracking code to website
3. Track transactions and revenue
4. Analyze user flow and traffic sources`,
        output: 'Identify which pages drive sales and where visitors drop off.',
        explanation: 'Data-driven insights help optimize store performance.'
      },

      {
        type: 'example',
        title: 'Conversion Rate Optimization Example',
        description: 'Improving checkout conversion by simplifying steps.',
        code: `// Example:
1. Reduce checkout steps from 5 to 3
2. Pre-fill customer info where possible
3. Display total cost clearly`,
        output: 'Higher percentage of visitors complete purchases.',
        explanation: 'Simpler, clearer checkout reduces friction and increases conversions.'
      },

      {
        type: 'example',
        title: 'A/B Testing Example',
        description: 'Testing two versions of a product page.',
        code: `// Example:
Version A: "Buy Now" button in red
Version B: "Buy Now" button in green
Measure clicks and conversions to decide which performs better`,
        output: 'Select the page version with higher conversion rate.',
        explanation: 'A/B testing allows evidence-based improvements.'
      },

      {
        type: 'example',
        title: 'KPIs Example',
        description: 'Monitoring average order value and cart abandonment rate.',
        code: `// Example:
AOV = Total Revenue / Number of Orders
Cart Abandonment Rate = (Abandoned Carts / Initiated Checkouts) * 100`,
        output: 'Evaluate business performance and identify improvement areas.',
        explanation: 'KPIs guide strategic decisions and optimizations.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: Analytics & Performance',
        description: 'Test your knowledge of analytics, CRO, A/B testing, and KPIs.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'What is the main use of Google Analytics?', options: ['Track website performance', 'Create email campaigns', 'Design product images', 'Process payments'], correctAnswer: 0 },
          { id: 2, type: 'multiple-choice', question: 'Conversion rate measures?', options: ['Percentage of visitors completing actions', 'Number of website visits', 'Email open rate', 'Product stock'], correctAnswer: 0 },
          { id: 3, type: 'multiple-choice', question: 'A/B testing is used to?', options: ['Compare different page versions', 'Track revenue', 'Manage inventory', 'Send ads'], correctAnswer: 0 },
          { id: 4, type: 'multiple-choice', question: 'Which is NOT a KPI?', options: ['Customer lifetime value', 'Average order value', 'Cart abandonment rate', 'CTA button color'], correctAnswer: 3 },
          { id: 5, type: 'true-false', question: 'Tracking user behavior helps optimize e-commerce performance.', correctAnswer: true },
          { id: 6, type: 'true-false', question: 'A/B testing should be done only once per website.', correctAnswer: false },
          { id: 7, type: 'true-false', question: 'Reducing checkout steps can improve conversion rate.', correctAnswer: true },
          { id: 8, type: 'short-answer', question: 'Give one metric tracked in Google Analytics.', sampleAnswer: 'Traffic source', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Name one CRO technique.', sampleAnswer: 'Simplify checkout', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Give one element you can A/B test.', sampleAnswer: 'CTA button', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'Name one KPI for e-commerce.', sampleAnswer: 'Average order value', evaluation: 'manual' },
          { id: 12, type: 'multiple-choice', question: 'Which is an example of a CRO improvement?', options: ['Faster checkout', 'Change email subject', 'Increase ad spend', 'Add SEO keywords'], correctAnswer: 0 },
          { id: 13, type: 'true-false', question: 'Monitoring KPIs helps make data-driven decisions.', correctAnswer: true },
          { id: 14, type: 'short-answer', question: 'Name one benefit of A/B testing.', sampleAnswer: 'Identify high-performing page version', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Why track cart abandonment?', sampleAnswer: 'To recover lost sales', evaluation: 'manual' }
        ]
      }
    ],
    9: [
      {
        type: 'overview',
        title: 'Shipping & Fulfillment',
        content:
          'This module teaches students how to manage shipping options, order fulfillment, international logistics, and tracking systems. Efficient shipping and fulfillment improve customer satisfaction and operational efficiency.',
        topics: [
          { title: 'Shipping Options', description: 'Different methods to deliver products to customers' },
          { title: 'Order Fulfillment', description: 'Managing inventory, packaging, and delivery' },
          { title: 'International Shipping', description: 'Handling cross-border deliveries, duties, and regulations' },
          { title: 'Tracking Systems', description: 'Monitoring shipments and providing updates to customers' },
          { title: 'Module Exam', description: 'Test your knowledge' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Shipping Options',
        content: [
          'Offering flexible shipping options improves the customer experience and can increase conversion rates.'
        ],
        points: [
          'Standard shipping: Economical, slower delivery',
          'Express shipping: Faster delivery at higher cost',
          'Same-day or next-day delivery for local customers',
          'Free shipping incentives',
          'Local pickup or in-store pickup options'
        ]
      },

      {
        type: 'lesson',
        title: 'Order Fulfillment',
        content: [
          'Order fulfillment ensures that products are picked, packed, and delivered efficiently.'
        ],
        points: [
          'Manage inventory to avoid stockouts',
          'Use automated fulfillment systems when possible',
          'Ensure proper packaging to prevent damage',
          'Integrate with warehouses and logistics partners',
          'Track orders from purchase to delivery'
        ]
      },

      {
        type: 'lesson',
        title: 'International Shipping',
        content: [
          'Selling globally requires understanding customs, duties, and shipping regulations.'
        ],
        points: [
          'Calculate duties and taxes for different countries',
          'Understand import/export regulations',
          'Partner with international carriers (DHL, FedEx, UPS)',
          'Offer international tracking and support',
          'Consider delivery times and shipping costs'
        ]
      },

      {
        type: 'lesson',
        title: 'Tracking Systems',
        content: [
          'Tracking systems allow customers to monitor their orders and reduce support inquiries.'
        ],
        points: [
          'Integrate tracking numbers from carriers into the e-commerce system',
          'Provide real-time tracking updates to customers',
          'Notify customers of shipping status via email or SMS',
          'Monitor delayed or lost shipments',
          'Use tracking data to optimize logistics and delivery performance'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Shipping Options Example',
        description: 'Offering multiple shipping methods at checkout.',
        code: `// Example pseudo-code
checkoutPage.showShippingOptions([
  {type: "Standard", cost: 5, deliveryTime: "5-7 days"},
  {type: "Express", cost: 15, deliveryTime: "2-3 days"},
  {type: "Local Pickup", cost: 0, deliveryTime: "Same day"}
])`,
        output: 'Customers can select preferred shipping method during checkout.',
        explanation: 'Multiple shipping options improve customer satisfaction.'
      },

      {
        type: 'example',
        title: 'Order Fulfillment Example',
        description: 'Automating order processing and packaging.',
        code: `// Example pseudo-code
if(order.paid) {
  inventory.decrement(order.items)
  warehouse.pack(order.items)
  logistics.schedulePickup(order.id)
}`,
        output: 'Orders are processed efficiently from payment to shipment.',
        explanation: 'Automation reduces errors and speeds up delivery.'
      },

      {
        type: 'example',
        title: 'International Shipping Example',
        description: 'Calculating duties for international orders.',
        code: `// Example pseudo-code
order.totalCost = order.subtotal + calculateDuties(order.destination, order.items)
notifyCustomer(order.userEmail, "Total including duties: " + order.totalCost)`,
        output: 'Customers are informed of total cost including taxes.',
        explanation: 'Transparency improves trust and reduces disputes.'
      },

      {
        type: 'example',
        title: 'Tracking Systems Example',
        description: 'Providing shipment tracking updates.',
        code: `// Example pseudo-code
trackingNumber = logistics.getTracking(order.id)
sendEmail(order.userEmail, "Track your order: " + trackingNumber)`,
        output: 'Customer can monitor the shipment in real time.',
        explanation: 'Tracking improves experience and reduces inquiries.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: Shipping & Fulfillment',
        description: 'Test your knowledge of shipping, fulfillment, international logistics, and tracking systems.',
        duration: 45,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'Which shipping option is typically fastest?', options: ['Standard', 'Express', 'Local Pickup', 'Free Shipping'], correctAnswer: 1 },
          { id: 2, type: 'multiple-choice', question: 'What is important in order fulfillment?', options: ['Inventory management', 'Packaging', 'Delivery tracking', 'All of the above'], correctAnswer: 3 },
          { id: 3, type: 'multiple-choice', question: 'International shipping requires?', options: ['Customs compliance', 'Understanding duties', 'Partnering with carriers', 'All of the above'], correctAnswer: 3 },
          { id: 4, type: 'multiple-choice', question: 'Tracking systems help?', options: ['Monitor shipments', 'Reduce support queries', 'Improve delivery performance', 'All of the above'], correctAnswer: 3 },
          { id: 5, type: 'true-false', question: 'Offering multiple shipping options improves customer satisfaction.', correctAnswer: true },
          { id: 6, type: 'true-false', question: 'Order fulfillment only involves shipping the products.', correctAnswer: false },
          { id: 7, type: 'true-false', question: 'International shipping may involve taxes and duties.', correctAnswer: true },
          { id: 8, type: 'short-answer', question: 'Name one shipping method.', sampleAnswer: 'Express', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Give one benefit of tracking systems.', sampleAnswer: 'Customer can monitor order', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Name one aspect of order fulfillment.', sampleAnswer: 'Inventory management', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'Why is international shipping challenging?', sampleAnswer: 'Customs and duties', evaluation: 'manual' },
          { id: 12, type: 'multiple-choice', question: 'Which is an example of local shipping?', options: ['Standard', 'Express', 'Local Pickup', 'International'], correctAnswer: 2 },
          { id: 13, type: 'true-false', question: 'Transparency in shipping costs builds customer trust.', correctAnswer: true },
          { id: 14, type: 'short-answer', question: 'Name one logistics partner for international shipping.', sampleAnswer: 'DHL', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Give one way to improve order fulfillment efficiency.', sampleAnswer: 'Automate packaging and processing', evaluation: 'manual' }
        ]
      }
    ],
    10: [
      {
        type: 'overview',
        title: 'E-commerce Project & Launch',
        content:
          'This module guides students through setting up their own e-commerce store, launching products, creating a marketing plan, and presenting their final project. It combines all skills learned in previous modules into a practical application.',
        topics: [
          { title: 'Store Setup', description: 'Configuring an e-commerce platform and preparing the store for launch' },
          { title: 'Product Launch', description: 'Adding products, setting prices, and going live' },
          { title: 'Marketing Plan', description: 'Promoting the store and products to reach target customers' },
          { title: 'Final Presentation', description: 'Showcasing the e-commerce project, analytics, and results' },
          { title: 'Module Exam', description: 'Evaluate understanding through practical tasks and quizzes' }
        ]
      },

      /* ===================== LESSONS ===================== */

      {
        type: 'lesson',
        title: 'Store Setup',
        content: [
          'Students will configure their e-commerce platform, customize the design, and prepare store settings.'
        ],
        points: [
          'Choose platform: Shopify, WooCommerce, Magento, or custom solution',
          'Set up store domain, hosting, and SSL',
          'Customize theme, layout, and navigation',
          'Configure payment gateways and taxes',
          'Set up shipping options and policies'
        ]
      },

      {
        type: 'lesson',
        title: 'Product Launch',
        content: [
          'Adding and launching products effectively is key to a successful e-commerce store.'
        ],
        points: [
          'Add products with titles, images, descriptions, and prices',
          'Set inventory levels and SKU codes',
          'Enable product categories and tags for better navigation',
          'Test checkout and payment process',
          'Go live with the store and announce launch'
        ]
      },

      {
        type: 'lesson',
        title: 'Marketing Plan',
        content: [
          'Students will create a marketing plan to promote their e-commerce store and attract customers.'
        ],
        points: [
          'Define target audience and buyer personas',
          'Use social media, email campaigns, and ads',
          'Optimize for SEO and Google Ads',
          'Plan promotions, discounts, and launch events',
          'Measure performance using analytics'
        ]
      },

      {
        type: 'lesson',
        title: 'Final Presentation',
        content: [
          'Students will present their e-commerce project to demonstrate their learning and results.'
        ],
        points: [
          'Show the fully functional store',
          'Highlight product catalog and launch strategy',
          'Explain marketing campaigns and results',
          'Present analytics, KPIs, and lessons learned',
          'Receive feedback for improvements'
        ]
      },

      /* ===================== EXAMPLES ===================== */

      {
        type: 'example',
        title: 'Store Setup Example',
        description: 'Configuring Shopify store with theme customization.',
        code: `// Example pseudo-code
shopify.createStore("My Online Shop")
shopify.setTheme("Minimal")
shopify.addPaymentGateway("Stripe")
shopify.configureShipping(["Standard", "Express"])`,
        output: 'Store is ready with basic setup, theme, payments, and shipping.',
        explanation: 'Proper setup ensures smooth operation from day one.'
      },

      {
        type: 'example',
        title: 'Product Launch Example',
        description: 'Adding products to the store.',
        code: `// Example pseudo-code
store.addProduct({
  name: "T-shirt",
  price: 19.99,
  description: "100% cotton",
  images: ["img1.jpg","img2.jpg"],
  stock: 50
})`,
        output: 'Product is visible on the store and ready for purchase.',
        explanation: 'Accurate product info improves customer trust and conversions.'
      },

      {
        type: 'example',
        title: 'Marketing Plan Example',
        description: 'Planning social media campaigns for launch.',
        code: `// Example pseudo-code
marketing.createCampaign({
  channel: "Instagram",
  targetAudience: "18-30, fashion lovers",
  budget: 100,
  content: "Launch promo post"
})`,
        output: 'Campaign reaches target audience and drives traffic to store.',
        explanation: 'Marketing ensures customers know about the product and store.'
      },

      {
        type: 'example',
        title: 'Final Presentation Example',
        description: 'Presenting analytics and KPIs from the launch.',
        code: `// Example pseudo-code
analytics.show({
  conversionRate: 4.5,
  totalRevenue: 1200,
  topProducts: ["T-shirt", "Hat"]
})`,
        output: 'Demonstrates store performance and success metrics.',
        explanation: 'Shows results of store launch and marketing efforts.'
      },

      /* ===================== MODULE EXAM ===================== */

      {
        type: 'exam',
        title: 'Module Exam: E-commerce Project & Launch',
        description: 'Test your practical knowledge and understanding of store setup, product launch, marketing, and presentation.',
        duration: 60,
        passingScore: 70,
        questions: [
          { id: 1, type: 'multiple-choice', question: 'Which platform can be used for e-commerce store setup?', options: ['Shopify', 'WooCommerce', 'Magento', 'All of the above'], correctAnswer: 3 },
          { id: 2, type: 'multiple-choice', question: 'What should be included when adding a product?', options: ['Name', 'Price', 'Description', 'All of the above'], correctAnswer: 3 },
          { id: 3, type: 'multiple-choice', question: 'Which channel is effective for launch marketing?', options: ['Social media', 'Email campaigns', 'Google Ads', 'All of the above'], correctAnswer: 3 },
          { id: 4, type: 'multiple-choice', question: 'What is a KPI for measuring store success?', options: ['Conversion rate', 'Website color', 'Number of products', 'Theme layout'], correctAnswer: 0 },
          { id: 5, type: 'true-false', question: 'Testing the checkout process before launch is important.', correctAnswer: true },
          { id: 6, type: 'true-false', question: 'Marketing plans are optional for e-commerce launch.', correctAnswer: false },
          { id: 7, type: 'true-false', question: 'Presenting analytics shows the impact of marketing campaigns.', correctAnswer: true },
          { id: 8, type: 'short-answer', question: 'Name one platform for store setup.', sampleAnswer: 'Shopify', evaluation: 'manual' },
          { id: 9, type: 'short-answer', question: 'Give one key element to include when launching a product.', sampleAnswer: 'Price', evaluation: 'manual' },
          { id: 10, type: 'short-answer', question: 'Name one marketing channel.', sampleAnswer: 'Instagram', evaluation: 'manual' },
          { id: 11, type: 'short-answer', question: 'Give one KPI to track store performance.', sampleAnswer: 'Conversion rate', evaluation: 'manual' },
          { id: 12, type: 'short-answer', question: 'Why is testing the checkout process important?', sampleAnswer: 'To ensure smooth purchasing experience', evaluation: 'manual' },
          { id: 13, type: 'true-false', question: 'Final presentation is used to showcase the project and results.', correctAnswer: true },
          { id: 14, type: 'short-answer', question: 'Give one benefit of presenting analytics.', sampleAnswer: 'Show marketing performance', evaluation: 'manual' },
          { id: 15, type: 'short-answer', question: 'Name one thing to prepare in store setup.', sampleAnswer: 'SSL certificate', evaluation: 'manual' }
        ]
      }
    ]
  },

  // Module 1: Software Project Management
  spm: {
    1: [
      {
        type: 'overview',
        title: 'Introduction to Software Project Management',
        content:
          'Software Project Management (SPM) is the application of knowledge, skills, tools, and techniques to software project activities in order to meet project requirements. It focuses on planning, organizing, leading, and controlling software projects while balancing scope, time, cost, and quality to ensure successful delivery and stakeholder satisfaction.',
        topics: [
          { title: 'Project Fundamentals', description: 'Basic concepts, characteristics, and constraints of projects' },
          { title: 'Project Stakeholders & Risks', description: 'People involved in projects and potential uncertainties' },
          { title: 'PM Roles & Responsibilities', description: 'Duties, skills, and authority of a Project Manager' },
          { title: 'SDLC Overview & Models', description: 'Software development phases and common lifecycle models' },
          { title: 'Module Exam', description: 'Auto-graded assessment of SPM concepts' }
        ]
      },

      // ---------------- PROJECT FUNDAMENTALS (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Project Fundamentals',
        content: [
          'A project is a temporary endeavor undertaken to create a unique product, service, or result.',
          'Software projects differ from operational work because they are goal-oriented and time-bound.',
          'Each software project is created to solve a specific problem or meet a specific business need.',
          'Project management provides a structured framework to manage complexity, uncertainty, and limited resources.'
        ],
        points: [
          'Temporary with a clear start and finish',
          'Produces a unique software solution',
          'Has defined objectives and scope',
          'Uses limited resources such as time, cost, and people',
          'Involves uncertainty and risks'
        ]
      },

      {
        type: 'lesson',
        title: 'Project Constraints (Triple Constraint)',
        content: [
          'All projects are limited by constraints that directly affect their success.',
          'The Project Manager must balance these constraints throughout the project lifecycle.',
          'Changing one constraint often impacts the others.'
        ],
        points: [
          'Scope – features and functions to be delivered',
          'Time – schedule, milestones, and deadlines',
          'Cost – budget and financial resources',
          'Quality – standards and customer expectations',
          'Effective balance ensures project success'
        ]
      },

      {
        type: 'lesson',
        title: 'Project Stakeholders',
        content: [
          'Stakeholders are individuals or groups that have an interest in the outcome of a project.',
          'They can directly or indirectly influence project success.',
          'Identifying stakeholders early improves communication and decision-making.'
        ],
        points: [
          'Customers and clients',
          'End users',
          'Project sponsor',
          'Project Manager',
          'Software development team',
          'Management and external partners'
        ]
      },

      {
        type: 'lesson',
        title: 'Project Risks',
        content: [
          'Risk is the possibility that an uncertain event will negatively affect project objectives.',
          'Software projects are especially vulnerable to technical and requirement-related risks.',
          'Early risk identification helps reduce negative impacts.'
        ],
        points: [
          'Technical risks – new or unstable technologies',
          'Schedule risks – unrealistic deadlines',
          'Cost risks – budget overruns',
          'Resource risks – lack of skilled personnel',
          'Requirement risks – frequent changes'
        ]
      },

      // ---------------- PM ROLES & RESPONSIBILITIES (1.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Project Manager Roles & Responsibilities',
        content: [
          'The Project Manager (PM) is responsible for planning, executing, and closing the project.',
          'The PM coordinates team members, manages resources, and communicates with stakeholders.',
          'The PM ensures that project objectives are met within agreed constraints.'
        ],
        points: [
          'Define project scope and objectives',
          'Create project plans and schedules',
          'Assign and monitor tasks',
          'Manage communication with stakeholders',
          'Identify and control project risks',
          'Manage changes in project requirements'
        ]
      },

      {
        type: 'lesson',
        title: 'Project Manager Skills',
        content: [
          'A successful Project Manager requires a combination of technical knowledge and soft skills.',
          'Strong interpersonal skills help manage teams and stakeholder expectations.'
        ],
        points: [
          'Leadership and team management',
          'Effective communication',
          'Problem-solving and critical thinking',
          'Decision-making ability',
          'Time and priority management',
          'Negotiation and conflict resolution'
        ]
      },

      // ---------------- SDLC (1.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'SDLC Overview (Software Development Life Cycle)',
        content: [
          'The Software Development Life Cycle (SDLC) is a structured framework used to develop software systems.',
          'It divides development work into phases to improve planning, control, and quality.',
          'SDLC ensures that software meets user requirements and business goals.'
        ],
        points: [
          'Requirement Analysis',
          'System Design',
          'Development',
          'Testing',
          'Deployment',
          'Maintenance'
        ]
      },

      {
        type: 'lesson',
        title: 'SDLC Phases Explained',
        content: [
          'Each SDLC phase has a clear purpose and deliverables.',
          'Skipping or poorly executing phases can result in software failure.'
        ],
        points: [
          'Requirements – gather and document user needs',
          'Design – define architecture and technical solutions',
          'Development – implement the system',
          'Testing – ensure quality and reliability',
          'Deployment – release software to users',
          'Maintenance – fix defects and add improvements'
        ]
      },

      {
        type: 'lesson',
        title: 'SDLC Models',
        content: [
          'SDLC models describe how development phases are organized and executed.',
          'Choosing the correct model depends on project size, complexity, and requirements.'
        ],
        points: [
          'Waterfall – linear and sequential approach',
          'Agile – iterative and flexible development',
          'Spiral – risk-driven development model',
          'Hybrid models are commonly used in practice'
        ]
      },

      // ---------------- AUTO-GRADED EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Software Project Management',
        description:
          'This exam evaluates understanding of project fundamentals, stakeholder management, PM responsibilities, and SDLC concepts.',
        duration: 40,
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which of the following best defines a project?',
            options: [
              'An ongoing operational activity',
              'A temporary effort with a unique outcome',
              'A repetitive business process',
              'An activity with unlimited resources'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which constraint is most affected when project requirements increase?',
            options: ['Time', 'Scope', 'Cost', 'Quality'],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Who is primarily responsible for managing project risks?',
            options: ['Developer', 'Client', 'Project Manager', 'Tester'],
            correctAnswer: 2
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Stakeholders can directly influence project outcomes.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'The SDLC helps improve software quality and project control.',
            correctAnswer: true
          }
        ]
      }
    ],
    // Module 2: Project Initiation & Planning (10 Hours)
    2: [
      {
        type: 'overview',
        title: 'Project Initiation & Planning',
        content:
          'Project Initiation and Planning are critical phases in software project management. This module focuses on defining the project formally, understanding and documenting requirements, managing project scope, and creating realistic schedules. Strong initiation and planning increase the likelihood of project success.',
        topics: [
          { title: 'Project Charter', description: 'Formally authorizing and defining the project' },
          { title: 'Requirements Engineering', description: 'Eliciting, analyzing, and documenting requirements' },
          { title: 'Scope Management', description: 'Defining and controlling what is included in the project' },
          { title: 'Scheduling', description: 'Planning project activities and timelines' },
          { title: 'Module Exam', description: 'Assess understanding of initiation and planning concepts' }
        ]
      },

      // ---------------- PROJECT INITIATION (2.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Project Initiation',
        content: [
          'Project initiation is the first phase of the project lifecycle.',
          'It defines the purpose, objectives, and feasibility of the project.',
          'This phase ensures that the project aligns with business goals.'
        ],
        points: [
          'Identify business need',
          'Define high-level objectives',
          'Assess feasibility',
          'Identify key stakeholders',
          'Authorize the project'
        ]
      },

      {
        type: 'lesson',
        title: 'Project Charter',
        content: [
          'A project charter is a formal document that officially authorizes a project.',
          'It gives the Project Manager authority to use organizational resources.',
          'The charter acts as a reference throughout the project lifecycle.'
        ],
        points: [
          'Project purpose and justification',
          'High-level requirements',
          'Project objectives and success criteria',
          'High-level risks and assumptions',
          'Stakeholders and sponsor',
          'Assigned Project Manager'
        ]
      },

      {
        type: 'lesson',
        title: 'Importance of the Project Charter',
        content: [
          'The project charter provides a shared understanding of the project.',
          'It prevents confusion and scope misunderstandings.',
          'It is approved by the project sponsor.'
        ],
        points: [
          'Formally starts the project',
          'Clarifies authority and responsibility',
          'Aligns stakeholders',
          'Acts as a baseline reference'
        ]
      },

      // ---------------- REQUIREMENTS ENGINEERING (3 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Requirements Engineering Overview',
        content: [
          'Requirements engineering is the process of defining what the system should do.',
          'Clear requirements are essential for project success.',
          'Poor requirements are a major cause of project failure.'
        ],
        points: [
          'Elicitation',
          'Analysis',
          'Specification',
          'Validation',
          'Requirements management'
        ]
      },

      {
        type: 'lesson',
        title: 'Requirements Elicitation Techniques',
        content: [
          'Elicitation is the process of gathering requirements from stakeholders.',
          'Different techniques are used depending on the project context.'
        ],
        points: [
          'Interviews',
          'Workshops',
          'Questionnaires',
          'Observation',
          'Document analysis'
        ]
      },

      {
        type: 'lesson',
        title: 'Types of Requirements',
        content: [
          'Requirements describe what the system must do and how it should perform.',
          'They are typically classified into functional and non-functional requirements.'
        ],
        points: [
          'Functional requirements',
          'Non-functional requirements',
          'Business requirements',
          'User requirements',
          'System requirements'
        ]
      },

      {
        type: 'lesson',
        title: 'Requirements Documentation',
        content: [
          'Requirements must be documented clearly and unambiguously.',
          'Documentation serves as a contract between stakeholders and developers.'
        ],
        points: [
          'Software Requirements Specification (SRS)',
          'Use cases',
          'User stories',
          'Acceptance criteria'
        ]
      },

      // ---------------- SCOPE MANAGEMENT (2.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Scope Management Overview',
        content: [
          'Scope management defines and controls what is included in the project.',
          'It helps prevent unnecessary work and scope creep.'
        ],
        points: [
          'Scope planning',
          'Scope definition',
          'Work Breakdown Structure (WBS)',
          'Scope validation',
          'Scope control'
        ]
      },

      {
        type: 'lesson',
        title: 'Defining Project Scope',
        content: [
          'Project scope describes the work required to deliver the product.',
          'Clear scope definition helps estimate time and cost accurately.'
        ],
        points: [
          'In-scope items',
          'Out-of-scope items',
          'Deliverables',
          'Acceptance criteria'
        ]
      },

      {
        type: 'lesson',
        title: 'Work Breakdown Structure (WBS)',
        content: [
          'A WBS is a hierarchical decomposition of project work.',
          'It breaks the project into manageable components.'
        ],
        points: [
          'Top-down breakdown',
          'Deliverable-oriented structure',
          'Improves estimation accuracy',
          'Foundation for scheduling'
        ]
      },

      {
        type: 'lesson',
        title: 'Scope Creep',
        content: [
          'Scope creep refers to uncontrolled changes in project scope.',
          'It often occurs when requirements are not clearly defined.'
        ],
        points: [
          'Causes of scope creep',
          'Impact on time and cost',
          'Importance of change control'
        ]
      },

      // ---------------- SCHEDULING (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Project Scheduling Overview',
        content: [
          'Scheduling involves planning when project activities will occur.',
          'A good schedule helps track progress and manage deadlines.'
        ],
        points: [
          'Define activities',
          'Sequence activities',
          'Estimate durations',
          'Develop schedule',
          'Control schedule'
        ]
      },

      {
        type: 'lesson',
        title: 'Scheduling Techniques',
        content: [
          'Different techniques are used to create and manage schedules.',
          'Scheduling tools help visualize timelines.'
        ],
        points: [
          'Gantt charts',
          'Milestones',
          'Critical Path Method (CPM)',
          'Dependencies between tasks'
        ]
      },

      {
        type: 'lesson',
        title: 'Estimating Time and Effort',
        content: [
          'Estimation predicts how long tasks will take.',
          'Accurate estimates improve planning and reduce delays.'
        ],
        points: [
          'Expert judgment',
          'Analogous estimation',
          'Task-based estimation',
          'Buffer time'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Project Initiation & Planning',
        description:
          'This exam evaluates understanding of project charter, requirements engineering, scope management, and scheduling.',
        duration: 50, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What is the main purpose of a project charter?',
            options: [
              'To schedule project activities',
              'To formally authorize the project',
              'To test the software',
              'To close the project'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which activity focuses on gathering requirements from stakeholders?',
            options: [
              'Validation',
              'Elicitation',
              'Design',
              'Testing'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Which document clearly defines project scope and deliverables?',
            options: [
              'Project Charter',
              'SRS',
              'WBS',
              'Test Plan'
            ],
            correctAnswer: 2
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Scope creep can negatively impact project cost and schedule.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Gantt charts are used for project scheduling.',
            correctAnswer: true
          }
        ]
      }
    ],
    // Module 3: Agile Project Management (12 Hours)
    3: [
      {
        type: 'overview',
        title: 'Agile Project Management',
        content:
          'Agile Project Management is an adaptive approach focused on delivering value through iterative development, collaboration, and continuous improvement. This module introduces Agile principles, Scrum and Kanban frameworks, and Agile estimation techniques used in modern software projects.',
        topics: [
          { title: 'Agile Principles', description: 'Values and mindset behind Agile development' },
          { title: 'Scrum Framework', description: 'Roles, events, and artifacts in Scrum' },
          { title: 'Kanban Method', description: 'Visual workflow management and continuous delivery' },
          { title: 'Agile Estimation', description: 'Estimating effort and complexity in Agile projects' },
          { title: 'Module Exam', description: 'Assess understanding of Agile concepts and practices' }
        ]
      },

      // ---------------- AGILE OVERVIEW & PRINCIPLES (3 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Agile Project Management',
        content: [
          'Agile Project Management focuses on flexibility, customer collaboration, and rapid delivery.',
          'It is widely used in software development where requirements change frequently.',
          'Agile emphasizes people and interactions over rigid processes.'
        ],
        points: [
          'Iterative and incremental development',
          'Customer collaboration',
          'Responding to change',
          'Frequent delivery of working software'
        ]
      },

      {
        type: 'lesson',
        title: 'Agile Manifesto',
        content: [
          'The Agile Manifesto defines the core values of Agile development.',
          'It was created in 2001 by experienced software practitioners.'
        ],
        points: [
          'Individuals and interactions over processes and tools',
          'Working software over comprehensive documentation',
          'Customer collaboration over contract negotiation',
          'Responding to change over following a plan'
        ]
      },

      {
        type: 'lesson',
        title: 'Agile Principles',
        content: [
          'Agile principles provide guidelines for implementing Agile values.',
          'They focus on customer satisfaction and continuous improvement.'
        ],
        points: [
          'Early and continuous delivery',
          'Welcoming changing requirements',
          'Frequent delivery of working software',
          'Close collaboration between business and development',
          'Sustainable development pace'
        ]
      },

      // ---------------- SCRUM FRAMEWORK (4 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Scrum Framework Overview',
        content: [
          'Scrum is the most popular Agile framework.',
          'It organizes work into short iterations called sprints.',
          'Scrum promotes transparency, inspection, and adaptation.'
        ],
        points: [
          'Time-boxed iterations',
          'Cross-functional teams',
          'Continuous feedback',
          'Incremental delivery'
        ]
      },

      {
        type: 'lesson',
        title: 'Scrum Roles',
        content: [
          'Scrum defines clear roles to ensure accountability and collaboration.',
          'Each role has specific responsibilities.'
        ],
        points: [
          'Product Owner – manages product backlog and priorities',
          'Scrum Master – facilitates Scrum process',
          'Development Team – builds the product increment'
        ]
      },

      {
        type: 'lesson',
        title: 'Scrum Events',
        content: [
          'Scrum events structure the sprint cycle.',
          'They provide opportunities for planning, review, and improvement.'
        ],
        points: [
          'Sprint',
          'Sprint Planning',
          'Daily Scrum',
          'Sprint Review',
          'Sprint Retrospective'
        ]
      },

      {
        type: 'lesson',
        title: 'Scrum Artifacts',
        content: [
          'Scrum artifacts provide transparency and shared understanding.',
          'They help track progress and outcomes.'
        ],
        points: [
          'Product Backlog',
          'Sprint Backlog',
          'Increment',
          'Definition of Done (DoD)'
        ]
      },

      // ---------------- KANBAN METHOD (2.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Kanban Method Overview',
        content: [
          'Kanban is an Agile method focused on continuous flow.',
          'It visualizes work and limits work in progress (WIP).'
        ],
        points: [
          'Visual workflow',
          'Continuous delivery',
          'Pull-based system',
          'WIP limits'
        ]
      },

      {
        type: 'lesson',
        title: 'Kanban Board',
        content: [
          'A Kanban board visualizes work stages.',
          'It helps teams identify bottlenecks.'
        ],
        points: [
          'To Do',
          'In Progress',
          'Testing',
          'Done',
          'Custom workflow stages'
        ]
      },

      {
        type: 'lesson',
        title: 'Scrum vs Kanban',
        content: [
          'Scrum and Kanban are both Agile approaches.',
          'They differ in structure and flexibility.'
        ],
        points: [
          'Iterations vs continuous flow',
          'Defined roles vs flexible roles',
          'Sprint planning vs pull-based work',
          'Fixed scope vs flexible scope'
        ]
      },

      // ---------------- AGILE ESTIMATION (2.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Agile Estimation Overview',
        content: [
          'Agile estimation focuses on relative effort rather than exact time.',
          'It accepts uncertainty and change.'
        ],
        points: [
          'Relative estimation',
          'Team-based estimation',
          'Continuous refinement'
        ]
      },

      {
        type: 'lesson',
        title: 'Story Points',
        content: [
          'Story points measure effort, complexity, and risk.',
          'They are not directly tied to hours.'
        ],
        points: [
          'Relative sizing',
          'Team-specific scale',
          'Used for sprint planning'
        ]
      },

      {
        type: 'lesson',
        title: 'Agile Estimation Techniques',
        content: [
          'Agile teams use collaborative estimation techniques.',
          'These techniques improve accuracy and team alignment.'
        ],
        points: [
          'Planning Poker',
          'T-shirt sizing',
          'Velocity',
          'Backlog refinement'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Agile Project Management',
        description:
          'This exam assesses understanding of Agile principles, Scrum, Kanban, and Agile estimation techniques.',
        duration: 60, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which value is part of the Agile Manifesto?',
            options: [
              'Processes over people',
              'Working software over documentation',
              'Strict planning over flexibility',
              'Tools over interactions'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Who is responsible for maximizing product value in Scrum?',
            options: [
              'Scrum Master',
              'Product Owner',
              'Developer',
              'Project Sponsor'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'What does Kanban primarily focus on?',
            options: [
              'Fixed-length sprints',
              'Continuous flow',
              'Heavy documentation',
              'Strict roles'
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Story points represent exact hours of work.',
            correctAnswer: false
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Planning Poker is an Agile estimation technique.',
            correctAnswer: true
          }
        ]
      }
    ],
    // Module 4: Risk & Quality Management (8 Hours)
    4: [
      {
        type: 'overview',
        title: 'Risk & Quality Management',
        content:
          'Risk and Quality Management are critical for ensuring project success. This module covers identifying and mitigating project risks, maintaining high-quality standards, and implementing effective testing strategies.',
        topics: [
          { title: 'Risk Identification', description: 'Recognizing potential project issues before they occur' },
          { title: 'Quality Assurance', description: 'Ensuring processes produce high-quality software' },
          { title: 'Testing Strategies', description: 'Approaches to verify and validate software functionality' },
          { title: 'Module Exam', description: 'Assess understanding of risk and quality management concepts' }
        ]
      },

      // ---------------- RISK MANAGEMENT (3 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Risk Management',
        content: [
          'Risk management involves identifying, assessing, and mitigating project risks.',
          'It helps minimize negative impacts on project objectives.',
          'Proactive risk management increases the likelihood of project success.'
        ],
        points: [
          'Identify potential risks early',
          'Assess probability and impact',
          'Plan responses to risks',
          'Monitor and control risks continuously'
        ]
      },

      {
        type: 'lesson',
        title: 'Types of Project Risks',
        content: [
          'Risks can affect different aspects of a project.',
          'Understanding risk types helps prioritize and respond effectively.'
        ],
        points: [
          'Technical risks – issues with technology or tools',
          'Schedule risks – delays in timelines',
          'Cost risks – budget overruns',
          'Resource risks – lack of skilled personnel',
          'Requirement risks – unclear or changing requirements'
        ]
      },

      {
        type: 'lesson',
        title: 'Risk Identification Techniques',
        content: [
          'Identifying risks early is critical.',
          'Various techniques help uncover potential issues.'
        ],
        points: [
          'Brainstorming',
          'Checklists and templates',
          'Interviews with stakeholders',
          'SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)',
          'Lessons learned from previous projects'
        ]
      },

      {
        type: 'lesson',
        title: 'Risk Assessment and Prioritization',
        content: [
          'Once risks are identified, they must be analyzed and prioritized.',
          'Focus on high-impact, high-probability risks first.'
        ],
        points: [
          'Qualitative assessment – high/medium/low',
          'Quantitative assessment – numerical probability and impact',
          'Risk matrix – visualize risk severity'
        ]
      },

      // ---------------- QUALITY MANAGEMENT (2.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Quality Management',
        content: [
          'Quality management ensures software meets standards and satisfies stakeholder expectations.',
          'It encompasses both processes and final products.'
        ],
        points: [
          'Quality planning – define quality standards',
          'Quality assurance – monitor processes',
          'Quality control – verify product meets standards'
        ]
      },

      {
        type: 'lesson',
        title: 'Quality Assurance (QA)',
        content: [
          'QA focuses on improving processes to prevent defects.',
          'It is proactive and continuous throughout the project.'
        ],
        points: [
          'Process standardization',
          'Audits and reviews',
          'Continuous improvement',
          'Documentation and training'
        ]
      },

      {
        type: 'lesson',
        title: 'Quality Control (QC)',
        content: [
          'QC focuses on identifying defects in the product.',
          'It is reactive and performed during development and testing.'
        ],
        points: [
          'Verification – “Are we building the product right?”',
          'Validation – “Are we building the right product?”',
          'Inspection and testing of deliverables'
        ]
      },

      // ---------------- TESTING STRATEGIES (2.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Testing',
        content: [
          'Testing ensures the software functions correctly and meets requirements.',
          'It is an essential part of quality assurance.'
        ],
        points: [
          'Detect defects early',
          'Verify functionality',
          'Validate against requirements',
          'Improve user satisfaction'
        ]
      },

      {
        type: 'lesson',
        title: 'Types of Testing',
        content: [
          'Testing can be performed at different levels and approaches.'
        ],
        points: [
          'Unit testing – individual components',
          'Integration testing – combined components',
          'System testing – complete system',
          'Acceptance testing – meets user requirements',
          'Regression testing – ensure changes do not break existing functionality'
        ]
      },

      {
        type: 'lesson',
        title: 'Testing Strategies',
        content: [
          'Effective testing strategies help identify defects efficiently.',
          'Selection depends on project size, complexity, and risk.'
        ],
        points: [
          'Black-box testing – test functionality without knowing code',
          'White-box testing – test internal logic and structure',
          'Automated testing – tools for regression and performance testing',
          'Manual testing – human evaluation of usability and correctness'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Risk & Quality Management',
        description:
          'This exam evaluates understanding of risk identification, quality assurance, and testing strategies.',
        duration: 45, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which of the following is a technical risk?',
            options: [
              'Budget overrun',
              'Requirement misunderstanding',
              'Software tool failure',
              'Team vacation schedule'
            ],
            correctAnswer: 2
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Quality assurance focuses on:',
            options: [
              'Finding defects in the final product',
              'Improving processes to prevent defects',
              'Testing the software manually',
              'Assigning developers to tasks'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Acceptance testing verifies:',
            options: [
              'Code correctness only',
              'Process compliance',
              'System meets user requirements',
              'Performance metrics'
            ],
            correctAnswer: 2
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Risk management is a continuous process throughout the project.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Unit testing checks the entire system at once.',
            correctAnswer: false
          }
        ]
      }
    ],
    // Module 5: Team Management & Communication (6 Hours)
    5: [
      {
        type: 'overview',
        title: 'Team Management & Communication',
        content:
          'Effective team management and communication are critical for project success. This module covers team development, communication planning, and leadership skills necessary for managing high-performing software project teams.',
        topics: [
          { title: 'Team Development', description: 'Building and managing a high-performing project team' },
          { title: 'Communication Planning', description: 'Planning and executing project communication strategies' },
          { title: 'Leadership Skills', description: 'Skills needed to lead and motivate project teams' },
          { title: 'Module Exam', description: 'Assess understanding of team management and communication concepts' }
        ]
      },

      // ---------------- TEAM DEVELOPMENT (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Team Development',
        content: [
          'Teams are the foundation of successful software projects.',
          'Team development involves forming, building trust, and establishing roles.',
          'High-performing teams improve productivity and project outcomes.'
        ],
        points: [
          'Forming, storming, norming, performing stages',
          'Clear roles and responsibilities',
          'Collaboration and trust building',
          'Conflict resolution'
        ]
      },

      {
        type: 'lesson',
        title: 'Building Effective Teams',
        content: [
          'Effective teams combine diverse skills and personalities to achieve goals.',
          'Team cohesion is essential for communication and performance.'
        ],
        points: [
          'Selecting the right team members',
          'Defining clear roles',
          'Encouraging collaboration',
          'Providing training and mentoring'
        ]
      },

      {
        type: 'lesson',
        title: 'Team Roles & Responsibilities',
        content: [
          'Each team member has a role contributing to project success.',
          'Roles should be clearly defined to avoid confusion.'
        ],
        points: [
          'Project Manager – overall coordination',
          'Developers – build the software',
          'Testers – ensure quality',
          'Business Analysts – gather requirements',
          'Designers – create UI/UX'
        ]
      },

      // ---------------- COMMUNICATION PLANNING (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Importance of Communication',
        content: [
          'Effective communication ensures everyone understands project goals, progress, and changes.',
          'Poor communication can lead to misunderstandings, delays, and errors.'
        ],
        points: [
          'Clear messages and updates',
          'Regular team meetings',
          'Stakeholder engagement',
          'Documentation and reporting'
        ]
      },

      {
        type: 'lesson',
        title: 'Communication Planning',
        content: [
          'Communication planning determines who needs information, what information is needed, and how it will be delivered.',
          'A well-defined plan improves project transparency and accountability.'
        ],
        points: [
          'Identify stakeholders',
          'Define communication methods (meetings, reports, dashboards)',
          'Frequency and timing of updates',
          'Responsible persons for communication',
          'Feedback mechanisms'
        ]
      },

      {
        type: 'lesson',
        title: 'Communication Channels & Tools',
        content: [
          'Choosing the right communication tools improves collaboration.',
          'Both synchronous and asynchronous methods are useful.'
        ],
        points: [
          'Email and messaging platforms',
          'Video and audio calls',
          'Project management tools (Jira, Trello, Asana)',
          'Documentation (Wiki, shared drives)',
          'Regular team meetings and stand-ups'
        ]
      },

      // ---------------- LEADERSHIP SKILLS (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Leadership in Project Teams',
        content: [
          'Leadership is essential to motivate and guide the team.',
          'Project leaders balance technical, interpersonal, and strategic skills.'
        ],
        points: [
          'Motivating team members',
          'Resolving conflicts',
          'Decision making',
          'Delegation and accountability'
        ]
      },

      {
        type: 'lesson',
        title: 'Leadership Styles',
        content: [
          'Different projects require different leadership approaches.',
          'Adapting leadership style improves team performance.'
        ],
        points: [
          'Autocratic – centralized decision making',
          'Democratic – collaborative decision making',
          'Transformational – inspire and motivate',
          'Servant leadership – focus on team needs'
        ]
      },

      {
        type: 'lesson',
        title: 'Developing Leadership Skills',
        content: [
          'Project leaders can improve their effectiveness through continuous learning.',
          'Leadership development benefits both the project and career growth.'
        ],
        points: [
          'Effective communication',
          'Emotional intelligence',
          'Conflict management',
          'Mentoring and coaching',
          'Continuous feedback'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Team Management & Communication',
        description:
          'This exam evaluates understanding of team development, communication planning, and leadership skills.',
        duration: 40, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which stage of team development involves members resolving conflicts and establishing norms?',
            options: ['Forming', 'Storming', 'Norming', 'Performing'],
            correctAnswer: 2
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which of the following is a key purpose of a communication plan?',
            options: [
              'Define project scope',
              'Identify stakeholders and communication methods',
              'Assign coding tasks',
              'Monitor project risks'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Servant leadership focuses on:',
            options: [
              'Centralized decision making',
              'Motivating only the leader',
              'Serving team needs and supporting members',
              'Strictly enforcing rules'
            ],
            correctAnswer: 2
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Regular team meetings improve communication and transparency.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Leadership skills are not important for project success.',
            correctAnswer: false
          }
        ]
      }
    ],
    // Module 6: Cost & Resource Management (6 Hours)
    6: [
      {
        type: 'overview',
        title: 'Cost & Resource Management',
        content:
          'Cost and Resource Management ensures that software projects are delivered within budget and that resources are allocated efficiently. This module covers cost estimation, resource allocation, and Earned Value Management (EVM) for monitoring project performance.',
        topics: [
          { title: 'Cost Estimation', description: 'Estimating project costs accurately' },
          { title: 'Resource Allocation', description: 'Assigning people, equipment, and materials efficiently' },
          { title: 'Earned Value Management', description: 'Measuring project performance and progress' },
          { title: 'Module Exam', description: 'Assess understanding of cost and resource management concepts' }
        ]
      },

      // ---------------- COST ESTIMATION (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Cost Management',
        content: [
          'Cost management involves planning, estimating, budgeting, and controlling project costs.',
          'Accurate cost estimation helps prevent overruns and ensures financial success.'
        ],
        points: [
          'Cost planning and estimation',
          'Budgeting and cost control',
          'Monitoring and reporting',
          'Adjusting for changes and risks'
        ]
      },

      {
        type: 'lesson',
        title: 'Cost Estimation Techniques',
        content: [
          'Estimating costs helps determine the budget required for resources and activities.',
          'Different techniques are used depending on the project context.'
        ],
        points: [
          'Analogous estimation – using historical data',
          'Parametric estimation – mathematical models',
          'Bottom-up estimation – summing detailed estimates',
          'Three-point estimation – optimistic, pessimistic, most likely'
        ]
      },

      {
        type: 'lesson',
        title: 'Factors Affecting Cost Estimation',
        content: [
          'Several factors can influence cost estimates and accuracy.',
          'Consider these factors when planning the budget.'
        ],
        points: [
          'Project size and complexity',
          'Team skill levels',
          'Technology and tools',
          'Schedule constraints',
          'Market and resource availability'
        ]
      },

      // ---------------- RESOURCE ALLOCATION (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Resource Management',
        content: [
          'Resource management ensures that project resources are available and used efficiently.',
          'Resources include people, equipment, materials, and budget.'
        ],
        points: [
          'Identify required resources',
          'Assign resources to tasks',
          'Balance workload and availability',
          'Monitor resource utilization'
        ]
      },

      {
        type: 'lesson',
        title: 'Resource Allocation Techniques',
        content: [
          'Proper allocation improves productivity and avoids delays.',
          'Techniques depend on project complexity and team structure.'
        ],
        points: [
          'Resource leveling – balance workload',
          'Resource smoothing – adjust timing without changing scope',
          'Critical resource identification',
          'Prioritization based on dependencies'
        ]
      },

      {
        type: 'lesson',
        title: 'Resource Management Tools',
        content: [
          'Tools help monitor and optimize resource usage.',
          'Effective use of tools reduces bottlenecks and improves planning.'
        ],
        points: [
          'MS Project / Primavera',
          'Gantt charts for resource planning',
          'Project management software (Jira, Asana, Trello)',
          'Dashboards and reports'
        ]
      },

      // ---------------- EARNED VALUE MANAGEMENT (2 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Earned Value Management (EVM)',
        content: [
          'EVM is a technique to measure project performance and progress.',
          'It integrates cost, schedule, and scope metrics.'
        ],
        points: [
          'Planned Value (PV)',
          'Actual Cost (AC)',
          'Earned Value (EV)',
          'Cost Variance (CV)',
          'Schedule Variance (SV)',
          'Performance indices (CPI, SPI)'
        ]
      },

      {
        type: 'lesson',
        title: 'EVM Calculations and Analysis',
        content: [
          'EVM metrics help managers make informed decisions.',
          'They identify whether a project is on budget and schedule.'
        ],
        points: [
          'Cost Variance (CV = EV – AC)',
          'Schedule Variance (SV = EV – PV)',
          'Cost Performance Index (CPI = EV / AC)',
          'Schedule Performance Index (SPI = EV / PV)',
          'Forecasting completion costs and schedules'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Cost & Resource Management',
        description:
          'This exam evaluates understanding of cost estimation, resource allocation, and Earned Value Management.',
        duration: 40, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which estimation technique uses historical project data?',
            options: ['Analogous estimation', 'Bottom-up estimation', 'Three-point estimation', 'Parametric estimation'],
            correctAnswer: 0
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Resource leveling aims to:',
            options: [
              'Balance resource workload',
              'Increase project scope',
              'Reduce budget only',
              'Skip low-priority tasks'
            ],
            correctAnswer: 0
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'In EVM, Cost Performance Index (CPI) is calculated as:',
            options: ['EV / AC', 'AC / EV', 'EV – AC', 'PV / EV'],
            correctAnswer: 0
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Earned Value Management integrates cost, schedule, and scope metrics.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Resource allocation only considers human resources.',
            correctAnswer: false
          }
        ]
      }
    ],
    // Module 7: Project Monitoring & Control (4 Hours)
    7: [
      {
        type: 'overview',
        title: 'Project Monitoring & Control',
        content:
          'Project Monitoring & Control ensures that a project stays on track in terms of scope, schedule, cost, and quality. This module covers progress tracking, change management, and performance metrics to help project managers make informed decisions.',
        topics: [
          { title: 'Progress Tracking', description: 'Monitoring project activities and milestones' },
          { title: 'Change Management', description: 'Managing scope changes and their impact' },
          { title: 'Performance Metrics', description: 'Measuring project performance using KPIs' },
          { title: 'Module Exam', description: 'Assess understanding of monitoring and control processes' }
        ]
      },

      // ---------------- PROGRESS TRACKING (1.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Progress Tracking',
        content: [
          'Progress tracking involves monitoring project activities to ensure that milestones are met.',
          'It helps identify delays and take corrective actions in time.'
        ],
        points: [
          'Tracking tasks against project plan',
          'Identifying schedule deviations',
          'Regular status reporting',
          'Using visual tools like Gantt charts and dashboards'
        ]
      },

      {
        type: 'lesson',
        title: 'Tools for Progress Tracking',
        content: [
          'Project managers use tools to track progress efficiently.',
          'These tools improve transparency and decision-making.'
        ],
        points: [
          'Gantt charts and timelines',
          'Project management software (MS Project, Jira, Trello)',
          'Dashboards and reports',
          'Milestone tracking'
        ]
      },

      // ---------------- CHANGE MANAGEMENT (1 Hour) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Change Management',
        content: [
          'Change management is the process of handling scope or requirement changes systematically.',
          'It ensures that changes are evaluated and implemented without derailing the project.'
        ],
        points: [
          'Change request submission and approval',
          'Impact analysis on cost, schedule, and resources',
          'Communication of changes to stakeholders',
          'Documentation of changes and decisions'
        ]
      },

      {
        type: 'lesson',
        title: 'Change Control Process',
        content: [
          'A structured change control process reduces risk and confusion.',
          'All changes must be logged, reviewed, and approved.'
        ],
        points: [
          'Submit change request',
          'Analyze impact on project',
          'Decision by Change Control Board (CCB)',
          'Update project plans and communicate'
        ]
      },

      // ---------------- PERFORMANCE METRICS (1.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Key Performance Metrics',
        content: [
          'Performance metrics help measure project success and identify areas for improvement.',
          'They provide quantitative data for decision-making.'
        ],
        points: [
          'Schedule Variance (SV) and Cost Variance (CV)',
          'Cost Performance Index (CPI) and Schedule Performance Index (SPI)',
          'Milestone completion rate',
          'Quality metrics and defect rates',
          'Resource utilization'
        ]
      },

      {
        type: 'lesson',
        title: 'Monitoring & Reporting Techniques',
        content: [
          'Effective monitoring requires timely reporting and analysis of metrics.',
          'Reports should be understandable and actionable.'
        ],
        points: [
          'Weekly status reports',
          'Dashboards with visual indicators',
          'Variance analysis',
          'Forecasting trends and corrective actions'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Project Monitoring & Control',
        description:
          'This exam evaluates understanding of progress tracking, change management, and performance metrics.',
        duration: 30, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which tool is commonly used to visualize project progress?',
            options: ['Gantt chart', 'Kanban board', 'Story points', 'Product backlog'],
            correctAnswer: 0
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Change management ensures that:',
            options: [
              'All changes are ignored',
              'Changes are evaluated and approved systematically',
              'Project schedule is extended automatically',
              'Stakeholders make all decisions individually'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Schedule Performance Index (SPI) measures:',
            options: [
              'Cost efficiency',
              'Schedule efficiency',
              'Quality compliance',
              'Resource utilization'
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Progress tracking helps identify delays early.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Performance metrics are only useful at the end of the project.',
            correctAnswer: false
          }
        ]
      }
    ],
    // Module 8: Project Tools & Technologies (4 Hours)
    8: [
      {
        type: 'overview',
        title: 'Project Tools & Technologies',
        content:
          'Project Tools & Technologies enable teams to plan, track, collaborate, and manage software projects efficiently. This module covers popular project management tools, version control systems, and collaboration platforms.',
        topics: [
          { title: 'Project Management Tools', description: 'Using Jira, Trello, and MS Project to manage tasks and schedules' },
          { title: 'Version Control', description: 'Tracking changes to code and documentation using Git and repositories' },
          { title: 'Collaboration Tools', description: 'Enhancing team communication and document sharing' },
          { title: 'Module Exam', description: 'Assess understanding of project tools and technologies' }
        ]
      },

      // ---------------- PROJECT MANAGEMENT TOOLS (1.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Project Management Tools',
        content: [
          'Project management tools help teams plan, schedule, and track tasks efficiently.',
          'Choosing the right tool improves productivity and transparency.'
        ],
        points: [
          'Task and issue tracking',
          'Scheduling and milestone management',
          'Resource allocation',
          'Reporting and dashboards'
        ]
      },

      {
        type: 'lesson',
        title: 'Popular Project Management Tools',
        content: [
          'Several tools are widely used in software projects depending on team size and complexity.'
        ],
        points: [
          'Jira – Agile project management and issue tracking',
          'Trello – Visual Kanban boards for task management',
          'MS Project – Gantt charts, scheduling, and resource planning',
          'Choosing the right tool depends on project methodology and team needs'
        ]
      },

      // ---------------- VERSION CONTROL (1 Hour) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Version Control',
        content: [
          'Version control systems track changes in code and documentation over time.',
          'They allow multiple team members to work collaboratively without conflicts.'
        ],
        points: [
          'Track modifications and history',
          'Collaborate on code and documents',
          'Revert changes if necessary',
          'Manage branches for parallel development'
        ]
      },

      {
        type: 'lesson',
        title: 'Popular Version Control Tools',
        content: [
          'Using version control effectively reduces errors and improves team collaboration.'
        ],
        points: [
          'Git – distributed version control system',
          'GitHub / GitLab / Bitbucket – hosting repositories',
          'Pull requests and code reviews',
          'Branching strategies (feature, develop, main)'
        ]
      },

      // ---------------- COLLABORATION TOOLS (1.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Collaboration Tools Overview',
        content: [
          'Collaboration tools enhance communication and coordination among team members.',
          'They support documentation, meetings, and instant communication.'
        ],
        points: [
          'Slack / Microsoft Teams – messaging and notifications',
          'Google Workspace / Office 365 – document sharing and collaboration',
          'Confluence / Notion – knowledge management and documentation',
          'Video conferencing tools – Zoom, Google Meet'
        ]
      },

      {
        type: 'lesson',
        title: 'Best Practices for Using Tools',
        content: [
          'Tools are most effective when used consistently and according to best practices.'
        ],
        points: [
          'Keep tasks updated and visible',
          'Follow version control conventions',
          'Communicate clearly through collaboration platforms',
          'Document decisions and project updates'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Project Tools & Technologies',
        description:
          'This exam evaluates understanding of project management tools, version control, and collaboration platforms.',
        duration: 30, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which tool is primarily used for Agile issue tracking?',
            options: ['Trello', 'Jira', 'MS Project', 'Slack'],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Version control allows teams to:',
            options: [
              'Track changes to code and collaborate',
              'Plan milestones and tasks',
              'Send instant messages',
              'Create dashboards only'
            ],
            correctAnswer: 0
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'GitHub is used for:',
            options: [
              'Messaging and notifications',
              'Hosting Git repositories',
              'Project scheduling',
              'Video conferencing'
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Collaboration tools help improve team communication.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Version control is only necessary for large projects.',
            correctAnswer: false
          }
        ]
      }
    ],
    // Module 9: Project Closure & Lessons Learned (2 Hours)
    9: [
      {
        type: 'overview',
        title: 'Project Closure & Lessons Learned',
        content:
          'Project closure ensures that all project activities are completed, deliverables are handed over, and lessons learned are documented for future projects. This module covers closure checklists, post-implementation reviews, and documentation best practices.',
        topics: [
          { title: 'Closure Checklist', description: 'Steps to formally close a project' },
          { title: 'Post-Implementation Review', description: 'Evaluating project success and challenges' },
          { title: 'Documentation', description: 'Capturing knowledge and lessons learned' },
          { title: 'Module Exam', description: 'Assess understanding of project closure and lessons learned' }
        ]
      },

      // ---------------- CLOSURE CHECKLIST (0.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Introduction to Project Closure',
        content: [
          'Project closure ensures that all deliverables are completed and accepted.',
          'It formally ends the project and releases resources.'
        ],
        points: [
          'Confirm completion of all tasks and deliverables',
          'Obtain formal acceptance from stakeholders',
          'Release project resources (team, budget, tools)',
          'Close contracts and financial accounts'
        ]
      },

      {
        type: 'lesson',
        title: 'Closure Checklist Items',
        content: [
          'A structured checklist ensures nothing is overlooked during project closure.'
        ],
        points: [
          'Deliverables verification and acceptance',
          'Final project report',
          'Financial closure (budget reconciliation)',
          'Contract closure',
          'Archiving project documentation'
        ]
      },

      // ---------------- POST-IMPLEMENTATION REVIEW (0.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Post-Implementation Review',
        content: [
          'A review after project completion identifies successes and areas for improvement.',
          'It ensures lessons are captured for future projects.'
        ],
        points: [
          'Evaluate project objectives vs. outcomes',
          'Identify what went well and what didn’t',
          'Document lessons learned and best practices',
          'Share feedback with team and stakeholders'
        ]
      },

      // ---------------- DOCUMENTATION (1 HOUR) ----------------
      {
        type: 'lesson',
        title: 'Project Documentation',
        content: [
          'Proper documentation ensures knowledge is retained and accessible.',
          'It supports accountability and continuous improvement.'
        ],
        points: [
          'Final project report',
          'Lessons learned repository',
          'Technical documentation and user manuals',
          'Project metrics and performance reports',
          'Archiving for future reference'
        ]
      },

      {
        type: 'lesson',
        title: 'Best Practices in Documentation',
        content: [
          'Effective documentation should be accurate, organized, and accessible.'
        ],
        points: [
          'Keep records up to date throughout the project',
          'Use templates and standardized formats',
          'Store documents in a central repository',
          'Ensure accessibility to stakeholders and future teams'
        ]
      },

      // ---------------- AUTO-GRADED MODULE EXAM ----------------
      {
        type: 'exam',
        title: 'Module Exam: Project Closure & Lessons Learned',
        description:
          'This exam evaluates understanding of project closure steps, post-implementation review, and documentation best practices.',
        duration: 20, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Which step ensures project deliverables are formally accepted?',
            options: ['Post-implementation review', 'Closure checklist', 'Documentation', 'Lessons learned session'],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Post-implementation review primarily aims to:',
            options: [
              'Verify financial accounts',
              'Evaluate project success and identify lessons',
              'Assign new tasks',
              'Close contracts only'
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Which documentation is important for future projects?',
            options: [
              'Lessons learned repository',
              'Only financial reports',
              'Temporary task notes',
              'None of the above'
            ],
            correctAnswer: 0
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Project closure releases all project resources.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Documentation is optional during project closure.',
            correctAnswer: false
          }
        ]
      }
    ],
    // Module 10: Case Studies & Practical Exercises (2 Hours)
    10: [
      {
        type: 'overview',
        title: 'Case Studies & Practical Exercises',
        content:
          'This module provides hands-on learning through real-world case studies and practical exercises. It focuses on applying project management concepts to solve problems, identify best practices, and discuss lessons learned.',
        topics: [
          { title: 'Real-World Cases', description: 'Analyze completed software projects to learn key insights' },
          { title: 'Best Practices', description: 'Identify techniques and strategies that improve project success' },
          { title: 'Group Discussions', description: 'Engage with peers to share ideas and experiences' },
          { title: 'Module Quiz', description: 'Assess understanding of practical applications in project management' }
        ]
      },

      // ---------------- REAL-WORLD CASE STUDIES (0.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Analyzing Real-World Cases',
        content: [
          'Case studies provide insights into project successes and failures.',
          'They help students understand practical challenges and solutions.'
        ],
        points: [
          'Identify project objectives and constraints',
          'Analyze planning, execution, and monitoring strategies',
          'Understand risk management decisions',
          'Evaluate stakeholder communication'
        ]
      },

      {
        type: 'lesson',
        title: 'Lessons from Successful Projects',
        content: [
          'Studying successful projects highlights best practices and techniques.'
        ],
        points: [
          'Clear scope and objectives',
          'Effective team collaboration',
          'Strong leadership and communication',
          'Timely risk mitigation'
        ]
      },

      // ---------------- BEST PRACTICES (0.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Project Management Best Practices',
        content: [
          'Best practices improve project outcomes and reduce risks.'
        ],
        points: [
          'Define clear goals and deliverables',
          'Maintain proper documentation',
          'Monitor progress and performance metrics',
          'Engage stakeholders regularly',
          'Perform lessons learned sessions'
        ]
      },

      // ---------------- GROUP DISCUSSIONS & PRACTICAL EXERCISES (0.5 HOURS) ----------------
      {
        type: 'lesson',
        title: 'Group Discussions and Exercises',
        content: [
          'Engaging in discussions and exercises helps students apply theoretical knowledge.'
        ],
        points: [
          'Analyze case studies in groups',
          'Present findings and recommendations',
          'Discuss challenges and solutions',
          'Reflect on lessons learned and best practices'
        ]
      },

      {
        type: 'lesson',
        title: 'Practical Exercises',
        content: [
          'Hands-on exercises allow students to simulate project management activities.'
        ],
        points: [
          'Create a mini project plan',
          'Perform cost and resource estimation',
          'Develop risk management strategies',
          'Prepare project status reports'
        ]
      },

      // ---------------- AUTO-GRADED MODULE QUIZ ----------------
      {
        type: 'exam',
        title: 'Module Quiz: Case Studies & Practical Exercises',
        description:
          'This quiz evaluates understanding of applying project management concepts through case studies and practical exercises.',
        duration: 20, // minutes
        passingScore: 70,
        questions: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'Analyzing real-world projects helps students:',
            options: [
              'Ignore risks',
              'Understand practical challenges and solutions',
              'Only memorize theory',
              'Focus on unrelated subjects'
            ],
            correctAnswer: 1
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Best practices in project management include:',
            options: [
              'Defining unclear goals',
              'Ignoring stakeholder communication',
              'Monitoring progress and engaging stakeholders',
              'Skipping documentation'
            ],
            correctAnswer: 2
          },
          {
            id: 3,
            type: 'multiple-choice',
            question: 'Group discussions are useful because they:',
            options: [
              'Increase theoretical knowledge only',
              'Allow students to share ideas and solutions',
              'Replace practical exercises',
              'Are optional and not beneficial'
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Practical exercises simulate real project activities.',
            correctAnswer: true
          },
          {
            id: 5,
            type: 'true-false',
            question: 'Lessons learned are only relevant to the current project.',
            correctAnswer: false
          }
        ]
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
