## Flare

猎人的照明弹，照明前端的一条路。


### 1.标准初始化的配置

#### 相关 module

1. eslint: 标准化代码格式
2. prettier: 标准化代码风格
3. rollup: 打包工具，打包为 umd/esm
4. typescript: 老规矩了
5. babel: 转换代码至 es6
6. lint-staged: git hooks 上传前检查代码

### 2.错误异常监控

#### 相关描述

1. report module: 负责收发错误比如延迟发送错误，缓存发送错误等等。
2. one-error module: 负责收集 error, onerror/error event/promise error 等等。
3. error-observer module: 负责维护 error list 队列，处理 error 等。
4. init module: 负责初始化 module，将参数导入后初始化各个模式的错误异常监控。
