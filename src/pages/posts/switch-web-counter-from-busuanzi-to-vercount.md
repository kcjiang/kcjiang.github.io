---
layout: ../../layouts/BlogPost.astro
public: true
title: 将网站计数器从不蒜子切换到 Vercount
slug: switch-web-counter-from-busuanzi-to-vercount
description: 2025年2月22日
createdAt: 1740203772067
updatedAt: 1740203772067
tags:
  - 前端
heroImage: /posts/from-busuanzi-to-vercount_thumbnail.jpg
---
不得不说[不蒜子](https://busuanzi.ibruce.info/)是一个很好的网站计数器，但现如今它的缺点也很明显：
- 速度慢，不稳定，经常会出现 502 错误。
- 不蒜子使用的是 Referrer 方法进行统计，这种方法在移动端 / Firefox / Safari 上不准确。
- 使用 [JSONP](https://en.wikipedia.org/wiki/JSONP) 回调，这种方法容易受到 CSRF 攻击。

[Vercount](https://vercount.one/) 做为不蒜子的替代方案进行了许多优化，后端使用 NextJS + Redis + Vercel Serverless Functions，前端使用 Vercel CDN，不再基于原项目的 Replit 和本地 Redis。

具体细节可以查看GitHub项目：https://github.com/EvanNotFound/vercount

***

## 切换到 Vercount
直接替换不蒜子的 script 标签即可，不需要修改任何代码。数据会在初次访问时自动从不蒜子同步。
``` html
<script defer src="https://vercount.one/js"></script>
```
如果是首次使用，在你的网站中添加上面的 script 之后，就可以在想要显示统计次数的区域添加下面的代码：
``` html
本文总阅读量 <span id="busuanzi_value_page_pv"></span> 次
本文总访客量 <span id="busuanzi_value_page_uv"></span> 人
本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
本站总访客数 <span id="busuanzi_value_site_uv"></span> 人
```
对于 page_view 网站访问量, 每访问一次加一。对于 user_view 访客量, 会通过用户浏览器的 UserAgent 以及用户的IP地址进行判断。
