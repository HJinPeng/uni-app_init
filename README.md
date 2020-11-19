#### uni-app 初始化框架

1. 集成项目基本结构
2. vuex
3. 请求封装,通过 vuex 发送请求，接受数据
4. eslint,prettier,stylelint，执行 `npm run lint`
5. commitlint，在 git commit 的时会进行格式校验

```
git commit -m "[type]: [message]"
提交处理，type可选类型如下：
	- feat：新功能（feature）
	- fix：修补bug
	- docs：文档（documentation）
	- style： 格式（不影响代码运行的变动）
	- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
	- test：增加测试
	- chore：构建过程或辅助工具的变动
```

6. 设置了 H5 代理，只需在 manifest.json 中简单替换
