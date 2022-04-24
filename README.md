### deno install

```
brew install deno
```

#### バージョン確認

```
deno -V
deno 1.20.6
%
```

### sample

```js
import { serve } from "https://deno.land/std@0.89.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

### 実行

```
deno run server.js
```

## 参考

https://zenn.dev/azukiazusa/articles/804439f5afabe7
https://lab.astamuse.co.jp/entry/deno-x-request-per-second
