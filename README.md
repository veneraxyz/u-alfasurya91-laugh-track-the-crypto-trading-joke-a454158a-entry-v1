# Laugh Track: The Crypto Trading Joke Contest

[![Competition](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.svg)](https://make.fun/competitions/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Rank](https://make.fun/badge/veneraxyz/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a-entry-v1/rank.svg)](https://make.fun/competitions/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Reward](https://make.fun/badge/veneraxyz/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a-entry-v1/reward.svg)](https://make.fun/competitions/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)

Entry for [Laugh Track: The Crypto Trading Joke Contest](https://make.fun/competitions/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a) on make.fun.

A small Node 22 program (stdlib only) that writes one original crypto & trading joke — exactly one line, under 200 characters — to `entry.txt`.

## Run it

```sh
node main.ts
```

By default the joke is written to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to choose a different output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The program re-reads the file after writing and asserts it is exactly the intended line plus one trailing newline, 1–200 characters, non-whitespace-only, with no control characters.
