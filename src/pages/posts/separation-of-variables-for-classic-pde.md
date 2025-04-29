---
layout: ../../layouts/BlogPost.astro
public: true
title: 三大经典偏微分方程的分离变量法
slug: separation-of-variables-for-classic-pde
description: 2023年2月7日
createdAt: 1675759815000
updatedAt: 1675759815000
tags:
  - 微分
heroImage: /posts/laplace-transform-visualized_thumbnail.jpg
---

本文作为 UM-SIN2004 课程内容的归纳总结，只讨论二阶偏微分方程边值问题的分离变量法。当然，除了分离变量法还有极坐标系、格林函数法等等。

我们先来看一下这三类方程模型和应用场景：

| 方程类型       | 标准形式                  | 典型应用场景               |
|----------------|--------------------------|--------------------------|
| **波动方程** （双曲型） | $\frac{\partial^2 u}{\partial t^2} = c^2 \nabla^2 u$ | 声波、光波、弦振动       |
| **热传导方程** （抛物型） | $\frac{\partial u}{\partial t} = \alpha \nabla^2 u$ | 热扩散、粒子布朗运动     |
| **拉普拉斯方程** （椭圆型） | $\nabla^2 u = 0$         | 静电势、稳态温度场       |

---

## 1. 分离变量法通用框架

### 1.1 核心思想
分离变量法（Separation of Variables）通过假设解为单变量函数的乘积，将偏微分方程转化为常微分方程组：

$$
u(\mathbf{x},t) = X(x)Y(y)\cdots T(t)
$$

**适用条件**：
- 线性齐次PDE
- 边界条件可分离
- 定义域规则（矩形、圆形等）

### 1.2 通用求解步骤
1. **变量分离**：设解为乘积形式，代入原方程
2. **常微分方程**：整理得到关于各变量的ODE
3. **本征值问题**：通过边界条件求解空间部分
4. **时间演化**：根据PDE类型确定时间部分解
5. **叠加解**：线性组合所有本征模
6. **系数确定**：利用初始/边界条件展开

---

## 2. 波动方程求解（一维弦振动）

### 2.1 定解问题
$$
\begin{cases}
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}, & 0 < x < L, t > 0 \\
u(0,t) = u(L,t) = 0 \\
u(x,0) = \phi(x), \quad u_t(x,0) = \psi(x)
\end{cases}
$$

### 2.2 求解过程
1. **分离变量**：设 $u(x,t) = X(x)T(t)$，得：
   $$
   \frac{T''}{c^2 T} = \frac{X''}{X} = -\lambda
   $$

2. **空间部分**：
   $$
   X'' + \lambda X = 0 \Rightarrow X_n(x) = \sin\left(\frac{n\pi x}{L}\right), \quad \lambda_n = \left(\frac{n\pi}{L}\right)^2
   $$

3. **时间部分**：
   $$
   T_n'' + c^2\lambda_n T_n = 0 \Rightarrow T_n(t) = A_n \cos\left(\frac{n\pi c t}{L}\right) + B_n \sin\left(\frac{n\pi c t}{L}\right)
   $$

4. **通解**：
   $$
   u(x,t) = \sum_{n=1}^\infty \left[ A_n \cos\left(\frac{n\pi c t}{L}\right) + B_n \sin\left(\frac{n\pi c t}{L}\right) \right] \sin\left(\frac{n\pi x}{L}\right)
   $$

5. **系数确定**：
   - $A_n$ 来自 $\phi(x)$ 的傅里叶正弦展开
   - $B_n$ 来自 $\psi(x)$ 的傅里叶正弦展开

---

## 3. 热传导方程求解（一维杆）

### 3.1 定解问题
$$
\begin{cases}
\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}, & 0 < x < L, t > 0 \\
u(0,t) = u(L,t) = 0 \\
u(x,0) = f(x)
\end{cases}
$$

### 3.2 求解过程
1. **分离变量**：设 $u(x,t) = X(x)T(t)$，得：
   $$
   \frac{T'}{\alpha T} = \frac{X''}{X} = -\lambda
   $$

2. **空间部分**（同波动方程）：
   $$
   X_n(x) = \sin\left(\frac{n\pi x}{L}\right)
   $$

3. **时间部分**：
   $$
   T_n(t) = C_n e^{-\alpha \left(\frac{n\pi}{L}\right)^2 t}
   $$

4. **通解**：
   $$
   u(x,t) = \sum_{n=1}^\infty C_n e^{-\alpha \left(\frac{n\pi}{L}\right)^2 t} \sin\left(\frac{n\pi x}{L}\right)
   $$

5. **系数确定**：
   - $C_n$ 来自 $f(x)$ 的傅里叶正弦展开

---

## 4. 拉普拉斯方程求解（矩形域）

### 4.1 定解问题
$$
\begin{cases}
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0, & 0 < x < a, 0 < y < b \\
u(0,y) = u(a,y) = 0 \\
u(x,0) = 0, \quad u(x,b) = g(x)
\end{cases}
$$

### 4.2 求解过程
1. **分离变量**：设 $u(x,y) = X(x)Y(y)$，得：
   $$
   \frac{X''}{X} = -\frac{Y''}{Y} = -\lambda
   $$

2. **x方向**：
   $$
   X_n(x) = \sin\left(\frac{n\pi x}{a}\right), \quad \lambda_n = \left(\frac{n\pi}{a}\right)^2
   $$

3. **y方向**：
   $$
   Y_n(y) = D_n \sinh\left(\frac{n\pi y}{a}\right)
   $$

4. **通解**：
   $$
   u(x,y) = \sum_{n=1}^\infty D_n \sin\left(\frac{n\pi x}{a}\right) \sinh\left(\frac{n\pi y}{a}\right)
   $$

5. **系数确定**：
   - 通过 $g(x)$ 的傅里叶正弦展开求 $D_n$

---

### 参考
![pE7sl5D.jpg](https://s21.ax1x.com/2025/04/29/pE7sl5D.jpg)