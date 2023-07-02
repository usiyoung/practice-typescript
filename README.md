# ts-practice

**tsconfig.json**
```
{
  "compilerOptions": {
  "allowJs": false, // 자바스크립트 파일도 허용
  "target":"ES5",
  "outDir": "./built", // 결과물 위치
  "moduleResolution": "node",
  "typeRoots": ["./node_modules/@types","types"] // declare 지정된 파일 경로
  },
  "include": ["./src/**/*"] // 기준이 될 컴파일 위치
}
```