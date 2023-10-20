

for i in range(100):
    if(i % 3 == 0):
        print(i + 1, "Fizz")
    elif(i % 5 == 0):
        print(i + 1, "Buzz")
    elif(i % 3 == 0 and i % 5 == 0):
        print(i + 1, "FizzBuzz")
        