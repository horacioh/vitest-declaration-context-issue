# Vitest declaration issue

I'm sure the error is with the library that points to ([@stitches/react](https://github.com/modulz/stitches)), but I'm not sure what is it!, or maybe is `@radix-ui/react-scroll-area`?? :(

**System Information**

- node: v16.13.1
- yarn: 1.22.17

---

```bash
➜ yarn test
yarn run v1.22.17
warning package.json: No license field
$ vitest

 DEV  /Users/horacio/workspace/oss/vitest/vitest-declaration-context-issue

 ❯ App.test.tsx (0)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯


- App.test.tsx
SyntaxError: Illegal property in declaration context
 ❯ new Script node:vm:100:7
 ❯ createScript node:vm:257:10
 ❯ Object.runInThisContext node:vm:305:10
 ❯ directRequest file:/Users/horacio/workspace/oss/vitest/vitest-declaration-context-issue/node_modules/vitest/dist/worker.js:9299:19
 ❯ async cachedRequest file:/Users/horacio/workspace/oss/vitest/vitest-declaration-context-issue/node_modules/vitest/dist/worker.js:9328:12
 ❯ async src/scroll-area.tsx:2:31
      1| import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
      2| import { styled } from "@stitches/react"
       |                               ^
      3|
      4| const SCROLLBAR_SIZE = 6
 ❯ async directRequest file:/Users/horacio/workspace/oss/vitest/vitest-declaration-context-issue/node_modules/vitest/dist/worker.js:9304:5
 ❯ async cachedRequest file:/Users/horacio/workspace/oss/vitest/vitest-declaration-context-issue/node_modules/vitest/dist/worker.js:9328:12
 ❯ async src/App.tsx:8:31
 ❯ async directRequest file:/Users/horacio/workspace/oss/vitest/vitest-declaration-context-issue/node_modules/vitest/dist/worker.js:9304:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

Test Files  1 failed (1)
     Tests  no tests
      Time  1.76s (in thread 0ms, Infinity%)


 PASS  Waiting for file changes...
press any key to exit...
```
