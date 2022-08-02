
将虚拟DOM变为真正的DOM添加到root这个真实的DOM容器中
```
ReactDOM.render(element, document.getElementById('root'))
```
最能体现react核心设计思路的是16版本
v17 fiber
v18 优先级调度、并发执行