---
top: 2
category: algorithm
tags:
  - 알고리즘
  - 정렬
  - python
date: 2020-11-12
title: 퀵정렬
vssue: false

---

# 퀵정렬
## python

```python
def qsort(data):
    if len(data) <= 1:
        return data
    
    left, right = list(), list()
    pivot = data[0]
    i = 0
    j = 0
    
    for index in range(1, len(data)):
        if pivot > data[index]:
            left.append(data[index])
            i += 1
            print("left", i)
        else:
            right.append(data[index])
            j += 1  
            print("right", j)
    
    return qsort(left) + [pivot] + qsort(right)
```

