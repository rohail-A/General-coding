# Let's add a simple calculator function
def calculator(a, b, operation):
    if operation == "add":
        return a + b
    elif operation == "sub":
        return a - b
    elif operation == "mul":
        return a * b
    elif operation == "div":
        return a / b if b != 0 else "Cannot divide by zero"
    else:
        return "Invalid operation"

print("\nCalculator Results:")
print("5 + 3 =", calculator(5, 3, "add"))
print("10 - 4 =", calculator(10, 4, "sub"))
print("6 * 7 =", calculator(6, 7, "mul"))
print("8 / 2 =", calculator(8, 2, "div"))

# A simple class representing a person
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def intro(self):
        return f"My name is {self.name}, I am {self.age} years old."

p1 = Person("Rohail", 20)
p2 = Person("Aisha", 19)

print("\nPerson Introductions:")
print(p1.intro())
print(p2.intro())

# Countdown example
print("\nCountdown:")
for i in range(5, 0, -1):
    print(i)
print("Go!! 🚀")
