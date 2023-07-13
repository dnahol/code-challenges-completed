# 2023 Q3 Study Guide

# Google

## LeetCode 75
https://leetcode.com/studyplan/leetcode-75/


## Leetcode Google Most Recents Spring '23 List

https://leetcode.com/studyplan/google-spring-23-high-frequency/

## Google 16 Bookmarked and Inbox

https://leetcode.com/discuss/interview-question/352743/Google-or-Onsite-or-Guaranteed-Binary-Search-Numbers/319523

## Graphs

### Dijkstra's

### Tarjan's

# JS

## 30 Days of JavaScript

https://leetcode.com/studyplan/30-days-of-javascript/

### JS Idiosyncracies

#### String Methods
##### String.substring() vs String.substr()
String.substring(start index, end index noninclusive)
String.substr(start index, length)

"abcdef".substring(1,2) => "b"
"abcdef".substr(1,2) => "bc"

#### Higher Order Functions

#### Arrow Functions
One liner has implicit return

`var gcd = (a,b) => b===0? a: gcd(b, a%b);`

`// This would give an error:
var gcd = (a,b) => return b===0? a: gcd(b, a%b);`
