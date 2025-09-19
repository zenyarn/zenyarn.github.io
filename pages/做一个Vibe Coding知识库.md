alias:: 用Obsidian做一个AI编程知识库
tags:: #ZenYarn, #Idea

- 目录结构
	- 设计1
		- code
			- project1
				- v0
				- v1
				- ...
				- vN
			- project2
			- ...
			- projectN
		- docs
			- project1
				- v0
					- `prompt0.md`
					- `prompt1.md`
					- `debug.md`
					- `intro.md`
				- v1
				- ...
				- vN
			- project2
			- ...
			- projectN
		- `README.md`
	- 设计2
		- ``` text
		  📂 VibeCoding-KnowledgeBase
		   ┣ 📂 00-Index（索引/入口）
		   ┣ 📂 01-Projects（项目归档）
		   ┃   ┣ 📂 ProjectA
		   ┃   ┃   ┣ README.md （项目简介、结果展示）
		   ┃   ┃   ┣ prompts.md （所有提示词）
		   ┃   ┃   ┗ code/ （存放生成的代码片段/链接GitHub）
		   ┃   ┣ 📂 ProjectB
		   ┃   ┗ …
		   ┣ 📂 02-Prompts（提示词库，跨项目复用）
		   ┣ 📂 03-Patterns（常见问题与调试模式总结）
		   ┣ 📂 04-Insights（心得体会、对Vibe Coding的理解）
		   ┗ 📂 99-Templates（笔记模板）
		  ```
	- 设计3
		- ``` md
		  📂 VibeCoding-KnowledgeBase
		   ┣ 📂 00-Index
		   ┣ 📂 Projects
		   ┃ ┣ 📂 todolist-app
		   ┃ ┃ ┣ 📂 v0
		   ┃ ┃ ┣ 📂 v1
		   ┃ ┃ ┗ 📂 v2
		   ┃ ┣ 📂 weather-cli
		   ┃ ┗ 📂 image-uploader
		   ┣ 📂 Docs
		   ┃ ┣ 📂 todolist-app
		   ┃ ┃ ┣ 📂 v0
		   ┃ ┃ ┣ 📂 v1
		   ┃ ┃ ┗ 📂 v2
		   ┃ ┣ 📂 weather-cli
		   ┃ ┗ 📂 image-uploader
		   ┗ 📂 Insights
		  ```
-