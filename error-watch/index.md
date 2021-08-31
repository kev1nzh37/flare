## 错误异常监控

### 相关描述

1. report module: 负责收发错误比如延迟发送错误，缓存发送错误等等。
2. one-error module: 负责收集 error, onerror/error event/promise error等等。
3. error-observer module: 负责维护 error list 队列，处理error等。
4. init module: 负责初始化 module，将参数导入后初始化各个模式的错误异常监控。