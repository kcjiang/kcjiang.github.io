---
layout: ../../layouts/BlogPost.astro
public: true
title: 切比雪夫不等式
slug: chebyshev-inequality
description: 2023年12月27日
createdAt: 1703646268031
updatedAt: 1703646268031
tags:
  - 统计
heroImage: /posts/chebyshev-inequality_thumbnail.jpg
---
# 切比雪夫不等式：概率论中的通用边界工具

## 1. 引言
在概率论中，我们常常需要量化随机变量偏离其期望值的概率。**切比雪夫不等式**（Chebyshev's Inequality）提供了一个与分布无关的通用边界，即使不知道具体分布形式，也能计算偏离概率的上限。

## 2. 数学定义
对于任意随机变量 $X$（需满足 $\text{Var}(X) < \infty$），其期望值为 $\mu$，方差为 $\sigma^2$，则对任意 $k > 0$ 有：

$$
P\left( |X - \mu| \geq k \sigma \right) \leq \frac{1}{k^2}
$$

## 3. 核心逻辑推导

### 3.1 从马尔可夫不等式出发
切比雪夫不等式是**马尔可夫不等式**的推广。马尔可夫不等式指出，对于非负随机变量 $Y$：

$$
P(Y \geq a) \leq \frac{E[Y]}{a}, \quad a > 0
$$

### 3.2 构造非负随机变量
我们令 $Y = (X - \mu)^2$，则 $E[Y] = \sigma^2$。根据马尔可夫不等式：

$$
P\left( (X - \mu)^2 \geq k^2 \sigma^2 \right) \leq \frac{E[(X - \mu)^2]}{k^2 \sigma^2} = \frac{\sigma^2}{k^2 \sigma^2} = \frac{1}{k^2}
$$

### 3.3 等价变形
注意到：
$$
(X - \mu)^2 \geq k^2 \sigma^2 \iff |X - \mu| \geq k \sigma
$$

因此得到切比雪夫不等式：
$$
P(|X - \mu| \geq k \sigma) \leq \frac{1}{k^2}
$$

## 4. 几何解释
切比雪夫不等式表明：
- 随机变量偏离期望超过 $k$ 倍标准差的概率，被方差控制。
- 方差 $\sigma^2$ 越小，数据越集中在期望附近。

## 5. 应用案例

### 案例1：数据范围估计
设某考试平均分 $\mu = 70$，标准差 $\sigma = 10$，求分数在50~90分外的概率上限。

解：
- 边界 $|X - 70| \geq 20$，即 $k \sigma = 20 \Rightarrow k = 2$
- 根据切比雪夫不等式：
  $$
  P(|X - 70| \geq 20) \leq \frac{1}{4} = 25\%
  $$
- 因此至少有75%的学生分数在50~90之间。

### 案例2：大数定律证明
切比雪夫不等式是证明**弱大数定律**的关键工具：
$$
\lim_{n \to \infty} P\left( \left| \frac{S_n}{n} - \mu \right| \geq \epsilon \right) = 0
$$
其中 $S_n = X_1 + \cdots + X_n$。

## 6. 局限性
- **保守性**：实际概率通常远低于切比雪夫上界（如正态分布中 $P(|X-\mu| \geq 2\sigma) \approx 5\%$，但切比雪夫给出25%上界）。
- **依赖方差**：需方差有限，对柯西分布等方差不存在的情况不适用。
