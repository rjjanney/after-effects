#!/usr/bin/python

import pprint
import csv
with open('powerball.csv', 'rb') as f:
    reader = csv.reader(f)
    thingy = []
    for row in reader:
        thingy.append(row)
    pickNumber = 1
    atLeastOne = []
    moreThanOne = []
    tempReader = []
    searchTermList = []

    # function definitions

    def uniq(lst):
        last = object()
        for item in lst:
            if item == last:
                continue
            yield item
            last = item

    def sort_and_deduplicate(l):
        return list(uniq(sorted(l, key=len)))


    while pickNumber < 6:
        print("Please enter the next number:")
        searchTerm = raw_input("> ")
        searchTermList.append(searchTerm)
        for row in thingy:
            for idx in range(0,5):
                if searchTerm in row[idx]:
                    row.append([searchTerm])
                    tempReader.append(row)

        if len(tempReader) > 0:
            for row in tempReader:
                if row in atLeastOne:
                    moreThanOne.append(row)

            atLeastOne.extend(tempReader)
            tempReader = []
        pickNumber += 1

        pprint.pprint(sort_and_deduplicate(atLeastOne))

    print "\n---------Your Numbers---------------------"
    searchTermList.sort()
    print sorted(searchTermList)
    print "Matched one or more .............................."
    pprint.pprint(sort_and_deduplicate(atLeastOne))
    print "..................................................."
