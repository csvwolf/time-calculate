# time-calculate

Yet another lib to calculate Date.

It can transfer to Day, hours, minutes and seconds(years and months calculation is not supported now).

[Chinese Version Document](https://github.com/csvwolf/time-calculate/blob/master/README.zh.md)

## Before Use
We add a concept(Class) Interval in the lib. So what is interval?

A interval can be an Object or just a string.

We defined the below abbreviations:

- D: Days
- h: hours
- m: minutes
- s: seconds

So you can use `{ D: 1, h: 2, m: 3, s: 4 }` or `1D2h3m4s` to define the interval: one day, two hours, 3 minutes and 4 seconds.

That is Interval.

## Support Features

### add

Add one `Date` and an `Interval` into another `Date`:

```javascript
const date = new Date()
Time.add(date, { D: 1 })
```

This means caculate the day after current and return a new `Date()`

### sub

Sub one `Date` and an `Interval` into another `Date`:

```javascript
Time.sub(date, { D: 1 })
```

The same as `add` method.

### diff

```javascript
Time.diff(date, Time.sub(date, { D: 1 }), '{D} days {s} seconds')
```

Diff the two date and return the Interval, if use the third argument, then it will be formatted.

## What is next?

You can see the progress in [the issue](https://github.com/csvwolf/time-calculate/issues/2).
