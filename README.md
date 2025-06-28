# soccer-app-built-with-MERN

一个使用 MERN (MongoDB, Express.js, React.js, Node.js) 技术栈构建的足球运动员管理应用。

## 项目介绍

这是一个全栈应用程序，用于管理足球运动员信息。前端使用 React.js 构建用户界面，后端使用 Express.js 和 Node.js 提供 API 服务，数据存储使用 MongoDB 数据库。

## 技术栈

- 前端：React.js
- 后端：Node.js, Express.js
- 数据库：MongoDB
- 开发工具：Babel, Nodemon

## 项目运行要求

- Node.js (建议版本 12.x 或以上)
- MongoDB (需要预先安装并运行)
- npm 或 yarn 包管理器

## 运行步骤

### 1. 克隆项目

```bash
git clone [项目地址]
cd soccer-app-built-with-MERN
```

### 2. 后端服务启动

```bash
cd backend
npm install
npm start
```

后端服务将运行在 http://localhost:4000

### 3. 前端应用启动

打开新的终端窗口：

```bash
cd frontend
npm install
npm start
```

前端应用将运行在 http://localhost:3000

## 项目功能

- 查看足球运动员列表
- 添加新的运动员信息
- 查看单个运动员详细信息

## 开发说明

- 后端开发：使用 nodemon 实现热重载
- 前端开发：使用 create-react-app 脚手架
- API 测试：可以使用 Postman 或类似工具

## 注意事项

1. 确保 MongoDB 服务已经启动
2. 后端服务需要先启动，才能保证前端应用正常运行
3. 如遇到 CORS 问题，请检查后端配置
