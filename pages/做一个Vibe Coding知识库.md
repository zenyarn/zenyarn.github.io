alias:: 用Obsidian做一个AI编程知识库
tags:: #ZenYarn, #Idea

- 目录结构
	- 简略版
		- ```md
		  VibeCoding-KnowledgeBase/
		  ├── README.md
		  ├── Overview/
		  ├── Docs/
		  │   ├── todolist-app/
		  │   └── weather-cli/
		  ├── Projects/
		  │   ├── todolist-app/
		  │   └── weather-cli/
		  ├── Notes/
		  │   ├── python/
		  │   ├── clojure/
		  │   ├── nextjs/
		  │   └── react-native/
		  ├── Insights/
		  └── Drafts/
		  ```
	- 详细版
		- ``` md
		  VibeCoding-KnowledgeBase/
		  ├── README.md                  # 知识库总说明
		  ├── Overview/                  # 总览入口页
		  ├── Docs/                      # 项目文档（提示词 + 反思总结）
		  │   ├── todolist-app/
		  │   │   ├── v0/
		  │   │   └── v1/
		  │   └── weather-cli/
		  │       └── v0/
		  ├── Projects/                  # 项目代码
		  │   ├── todolist-app/
		  │   │   ├── v0/
		  │   │   │   ├── README.md       # 本版本总结 + Docs 链接
		  │   │   │   ├── package.json
		  │   │   │   ├── pages/
		  │   │   │   └── components/
		  │   │   └── v1/
		  │   │       ├── README.md
		  │   │       ├── package.json
		  │   │       └── pages/
		  │   └── weather-cli/
		  │       └── v0/
		  │           ├── README.md
		  │           └── main.py
		  ├── Notes/                     # 编程语言 & 框架学习笔记
		  │   ├── python/
		  │   │   ├── data-types.md
		  │   │   ├── oop.md
		  │   │   └── tips-and-tricks.md
		  │   ├── clojure/
		  │   │   ├── basics.md
		  │   │   └── functional-patterns.md
		  │   ├── nextjs/
		  │   │   ├── routing.md
		  │   │   ├── api-routes.md
		  │   │   └── deployment.md
		  │   └── react-native/
		  │       ├── setup.md
		  │       └── navigation.md
		  ├── Insights/                  # 反思总结（经验、调试模式等）
		  │   └── general-insights.md
		  └── Drafts/                    # 临时/测试项目（Git 忽略）
		      ├── temp-test1/
		      │   └── test.py
		      └── experiment-ai/
		          └── quick-demo.js
		  ```