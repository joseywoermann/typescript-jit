# typescript-jit

## What is this?

A JIT (just-in-time) compiler, aka. interpreter. It doesn't really have any features, I was just bored.

## Should I use it?

Absolutely not.

## I want to use it anyway

The following is an example program the prints `Hello!` to the console. Clone the repo, run `npm i` & `npm run ts:build`. Save the program in a file called `program.tsjit` and run `npm run start`.

There are 256 available "slots" in the "memory", which you can fill with [decimal numbers which correlate to ASCII characters](https://www.asciitable.com/). There are 7 Opcodes at the moment: `POS`, `GET`, `SET`, `DEBUG`, `CLEAR`, `PRINT` & `COPY`. These do different things but I'm too lazy to document them.

```
POS:0
SET:72
PRINT

POS:1
SET:101
PRINT

POS:2
SET:108
PRINT

POS:3
SET:108
PRINT

POS:4
SET:111
PRINT

POS:5
SET:33
PRINT
```

This project was inspired by [alii/alissembly](https://github.com/alii/alissembly).
