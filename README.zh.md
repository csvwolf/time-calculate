# time-calculate
又一个时间计算库。

他可以把时间计算转换为天、时、分、秒（暂不支持年和月的计算）。

## 开始之前
我们在库中定义了一个概念（类）`Interval`，所以什么是 interval 呢？

一个 Interval 可以是 Object 或者 String。

我们可以用以下缩写来定义：

- D: 天
- h: 小时
- m：分
- s：秒

所以我们可以用 `{ D:1, h:2, m:3, s: 4 }` 或者 `1D2h3m4s` 来定义时间间隔，表示：一天两个小时三分四秒。

这就是 Interval。

## 支持特性

### add

将一个 `Date` 和一个 `interval` 相加，转换为新的 `Date`：

```javascript
const date = new Date()
Time.add(date, { D: 1 })
``````

这意味着计算当前这一时刻的下一天并返回新的 `Date()`

### sub

将一个 `Date` 和一个 `Interval` 相减并返回新的 `Date`：

```javascript
Time.sub(date, { D: 1 })
```

和 `add` 方法一样。

### diff

```javascript
Time.diff(date, Time.sub(date, { D: 1 }), '{D} days {s} seconds')
```

计算两个时间的时间差并且返回一个 `Interval`，如果有第三个值，则会被格式化成传入的内容。

## 接下来还会做什么？

你可以在这个 [issue](https://github.com/csvwolf/time-calculate/issues/2) 下看到开发进度。
