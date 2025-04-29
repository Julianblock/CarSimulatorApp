#t his will calc the nth number in the sequence using the Sequence paramters set in the instructions 


def sequence_calculator(n):
    if n == 0: return 0
    if n == 1: return 1
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, 3 * b - a
    return b

# print(sequence_calculator(100000)) 
# removed above line for better usage on the app.py page for a dynamic number to be used rather than boring static
