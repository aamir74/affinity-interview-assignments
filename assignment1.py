racial_slurs = ['White', 'Black','Nazi','Cannibalistic']

file = open("tweets.txt", "r")

degree_of_profanity = 0
line_number = 0

for line in file:
    degree_of_profanity = 0
    line_number +=  1

    for word in racial_slurs:
        if word.lower() in line.lower():
            degree_of_profanity += 1

    if degree_of_profanity == 0:
        print('String', racial_slurs, 'Not Found')
    else:
        print('Racial Slurs Found In Line',
              line_number, 'with Degree of Profanity', degree_of_profanity)

file.close()
