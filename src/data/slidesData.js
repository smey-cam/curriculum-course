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
