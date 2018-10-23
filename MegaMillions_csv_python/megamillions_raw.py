#!/usr/bin/python

"""
megamillions_raw.py.

Convert raw OCR string from gmail (from iphone) to 2-digit, 6-element
csv arrays.
"""

import csv

with open('megamillions_raw.txt', encoding="UTF-8") as f:
    output = []
    words = f.readlines()
    for line in words:
        x = 0
        newLine = []

        while x <= 10:
            newLine.append(line[x:x + 2])
            x += 2
        output.append(newLine)

    # fOut = open("mega_splitup.txt", "w+")
    # for line in output:
    #     fOut.write(str(line))
    # fOut.close()
    spamWriter = csv.writer(open('eggs.csv', 'w+'), delimiter=',')
    for line in output:
        spamWriter.writerow(line)
