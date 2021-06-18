---
top: 1
category: algorithm
tags:
  - 프로그래머스
  - 완전탐색
  - python
date: 2021-02-18
title: 소수 찾기
vssue: false

---
:link: [프로그래머스 문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42839)
# 소수찾기
permutations 이용하여 순열을 만들수 있다.
순열을 만든 후 하나씩 소수인지 확인한다.

## python

```python
from itertools import permutations

def isprime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def solution(numbers):
    answers = []

    for i in range(1, len(numbers) + 1):
        #permutations 순열조합해준다
        per = list(map(''.join, permutations(numbers, i)))
        for p in list(set(per)):
            if isprime(int(p)):
                answers.append(int(p))

    return len(set(answers))


if __name__ == '__main__':
    assert solution("011") == 2
```

