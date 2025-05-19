---
layout: ../../layouts/BlogPost.astro
public: true
title: 使用变频器收听航空波段
slug: receiving-aviation-frequency-band
description: 2024年11月25日
createdAt: 1732516879070
updatedAt: 1732516879070
tags:
  - 无线电
heroImage: /posts/spectrum-bands_thumbnail.jpg
---

民航航空通信主要使用 **118–137 MHz** 的 **甚高频（VHF）** 波段，而这一区段正好不在一般民用调频收音机的接收范围内。不过，借助一个简单的 **110 MHz 下变频器**（也叫混频器），我们就可以将航空波段信号“移频”到普通收音机可接收的频段，从而轻松监听机场的通信动态。

## 一、航空波段简介

航空通信波段位于 VHF（Very High Frequency）频段内，范围是 **118 MHz 到 137 MHz**。该波段专门分配给民航飞行器与地面航管之间的语音通信，信号清晰、传播距离适中，是保障航空安全的重要通信手段。

该频段被细分为多个频道，按不同用途分配给 **ATIS（自动终端信息服务）**、**塔台（Tower）**、**地面管制（Ground）**、**放行（Delivery）**、**离场（Departure）**、**进近（Approach）** 等通信类型。

## 二、如何实现收听

### 1. 所需设备

要收听航空波段，你并不一定需要专业的接收机。以下是一种简便的搭建方式：

- 一台 **普通的调频收音机**（支持76–108 MHz 接收范围）
- 一个 **110 MHz 的下变频器**
- 一根合适的天线（VHF 段高增益天线推荐）
- 若能搭配耳机或音箱输出，将有更好的监听体验

下变频器的作用是将高频信号（例如 127.45 MHz）减去 110 MHz，得到低频信号（例如 17.45 MHz），刚好落在收音机可以接收的频率范围内。

### 2. 接线方式

下变频器一般有以下几个接口：

- **RF IN**：连接外部天线，接收航空波段信号
- **RF OUT**：连接到收音机的天线输入端
- **电源**：部分下变频器需外接供电（如 5V 或 12V）

连接好设备后，将收音机调至航空频道减去 110 MHz 的频率（例如监听 127.45 MHz，则收音机调到 17.45 MHz），即可接收到该频道的下变频信号。

## 三、粤港澳机场常用频率一览

以下是深圳、香港、澳门三地主要机场的常用航空频率列表：

| 机场/区域                   | 名称                          | 频率    | 代码            |
|----------------------------|-------------------------------|---------|-----------------|
| **ZGSZ/SZX 深圳宝安国际机场** |                               |         |                 |
|                            | D.ATIS Departure              | 127.45  | ZGSZ            |
|                            | D.ATIS Arrival                | 126.85  | ZGSZ            |
|                            | 宝安放行 BAOAN Delivery       | 121.95  | ZGSZ_DEL        |
|                            | 宝安地面 BAOAN Ground         | 121.65  | ZGSZ_GND        |
|                            | 宝安塔台 BAOAN Tower          | 118.45  | ZGSZ_TWR        |
|                            | 珠海进近 ZHUHAI Approach      | 120.35  | ZGSZ_APP        |
|                            | 珠海进近 ZHUHAI Approach      | 124.25  | ZGSZ_APP        |
|                            | 珠海进近 ZHUHAI Approach      | 124.75  | ZGSZ_APP        |
| **VHHH/HKG 香港赤腊角国际机场** |                             |         |                 |
|                            | D.ATIS Departure              | 127.05  | VHHH            |
|                            | D.ATIS Arrival                | 128.20  | VHHH            |
|                            | 香港放行 HONG KONG Delivery   | 129.90  | VHHH_DEL        |
|                            | 香港地面 HONG KONG Ground (N) | 121.60  | VHHH_GND        |
|                            | 香港地面 HONG KONG Ground (S) | 122.55  | VHHH_GND        |
|                            | 香港塔台 HONG KONG Tower (N)  | 118.20  | VHHH_TWR        |
|                            | 香港塔台 HONG KONG Tower (S)  | 118.40  | VHHH_TWR        |
|                            | 香港离场 HONG KONG Departure  | 123.80  | VHHH_DEP        |
|                            | 香港进近 HONG KONG Approach   | 119.10  | VHHH_APP        |
|                            | HONG KONG Director            | 119.50  |                 |
| **VMMC/MFM 澳门国际机场**     |                               |         |                 |
|                            | ATIS                          | 126.40  | VMMC            |
|                            | 澳门地面 MACAO Ground         | 121.72  | VMMC_GND        |
|                            | 澳门地面 MACAO Ground         | 121.97  | VMMC_GND        |
|                            | 澳门塔台 MACAO Tower          | 118.00  | VMMC_TWR        |
|                            | 珠海进近 ZHUHAI Approach      | 120.35  | VMMC_APP        |
|                            | HONG KONG Radar               | 126.30  |                 |
