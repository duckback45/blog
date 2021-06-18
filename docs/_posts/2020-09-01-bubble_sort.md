---
top: 4
category: algorithm
tags:
  - 알고리즘
  - 정렬
  - python
date: 2020-09-01
title: 버블정렬
vssue: false

---

# 버블정렬
## python

```python
def bubblesort(data):
    for index in range(len(data) - 1):
        swap = False
        for index2 in range(len(data) - index - 1):
            if data[index2] > data[index2 + 1]:
                data[index2], data[index2 + 1] = data[index2 + 1], data[index2]
                swap = True
        
        if swap == False:
            break
    return data
```

