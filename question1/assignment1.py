class result:
    def __init__(self, line_no, degree):
        self.line_no = line_no
        self.degree = degree


def check_racial_slurs(tweets, racial_words):
    store_result = []
    degree_of_profanity = 0
    line_number = 0

    for line in tweets:
        degree_of_profanity = 0
        line_number += 1

        for word in racial_words:
            if word.lower() in line.lower():
                degree_of_profanity += 1

        if degree_of_profanity != 0:
            store_result.append(result(line_number, degree_of_profanity))

    return store_result


def convert_file_to_array(file):
    words_array = []
    for line in file:
        for word in line.split():
            words_array.append(word)
    return words_array


def print_result(file):
    for obj in file:
        print('Racial Slurs found at Line:', obj.line_no,
              'with degree of Profanity', obj.degree)


tweets = open("tweets.txt", "r")
racial_words = convert_file_to_array(open('racialSlurs.txt', 'r'))
answer = check_racial_slurs(tweets, racial_words)
print_result(answer)

tweets.close()
