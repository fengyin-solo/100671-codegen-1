# 石化炼化装置检维修作业管理平台

面向生产装置台账、压力容器、换热器、塔器、反应器、机泵机组、离心压缩机、工艺管道、阀门与法兰、安全阀校验、动火作业许可、受限空间作业、盲板抽堵、高处作业、检修计划、开停工方案、防腐保温与工艺参数监控的一体化石化装置检维修作业工作台。

这是一个**纯前端**管理平台：Vue 3 + Vite + TypeScript，仓库里没有后端服务。业务数据由
`frontend/src/data/` 下的本地数据层提供：首次打开用示例数据播种，之后的登记、筛选与状态流转
结果都持久化在浏览器 `localStorage` 里，刷新或重开浏览器都还在。dev server 已关掉自动打开页面，
启动后按终端打印的地址手工打开。

## 目录结构

```text
.
├── frontend/                 Vue 3 + Vite + TypeScript 前端（唯一运行单元）
│   ├── src/views/            每个业务模块一个页面
│   ├── src/api/local-service.ts   本地数据服务：列表、筛选、动作流转、导出
│   ├── src/data/             模块元数据 / 示例数据 / localStorage 持久化
│   ├── src/stores/           会话与筛选状态
│   └── vite.config.ts        dev server 配置（open: false，无 /api 代理）
├── .gitignore
└── docker-compose.yml
```

## 启动

```bash
cd frontend
npm install
npm run dev
```

前端默认监听 `http://127.0.0.1:5173/`，dev server 不会自动打开浏览器，需要自己访问。

生产构建：

```bash
cd frontend
npm run build
```

## 业务模块

| 模块 | 目录 | 业务对象 | 主要字段 |
| --- | --- | --- | --- |
| 生产装置台账 | `unit` | 生产装置档案 | 装置编号、装置名称、加工能力 |
| 压力容器 | `vessel` | 压力容器档案 | 容器编号、容器名称、设计压力 |
| 换热器 | `exchanger` | 换热器档案 | 设备编号、换热器型号、换热面积 |
| 塔器 | `tower` | 塔器档案 | 塔器编号、塔器名称、塔盘层数 |
| 反应器 | `reactor` | 反应器档案 | 反应器编号、反应器类型、催化剂牌号 |
| 机泵机组 | `pump` | 机泵机组档案 | 泵组编号、泵组型号、额定流量 |
| 离心压缩机 | `compressor` | 离心压缩机档案 | 机组编号、压缩机型号、额定排量 |
| 工艺管道 | `pipeline` | 工艺管道档案 | 管线编号、公称直径、输送介质 |
| 阀门与法兰 | `valveflange` | 阀门法兰档案 | 阀门编号、阀门类型、公称直径 |
| 安全阀校验 | `safetyvalve` | 安全阀校验记录 | 校验编号、安全阀编号、整定压力 |
| 动火作业许可 | `hotwork` | 动火作业许可票 | 许可编号、作业装置、动火等级 |
| 受限空间作业 | `confined` | 受限空间作业许可 | 许可编号、作业装置、空间名称 |
| 盲板抽堵 | `blind` | 盲板抽堵记录 | 抽堵编号、所属管线、盲板编号 |
| 高处作业 | `highwork` | 高处作业许可 | 许可编号、作业装置、作业高度 |
| 检修计划 | `plan` | 检修计划 | 计划编号、检修装置、检修类别 |
| 开停工方案 | `shutdown` | 开停工方案 | 方案编号、所属装置、方案类型 |
| 防腐保温 | `anticorr` | 防腐保温记录 | 施工编号、所属装置、防腐面积 |
| 工艺参数监控 | `process` | 工艺参数记录 | 监控编号、所属装置、参数名称 |

## 约定

- 每个模块的页面在 `frontend/src/views/<模块>/index.vue`，页面只负责渲染，读写统一走
  `frontend/src/api/local-service.ts`。
- 字段、状态、动作与流转目标集中在 `frontend/src/data/modules.ts`；示例数据在
  `frontend/src/data/seed.ts`。
- 状态流转只允许在 `local-service.ts` 里改，页面组件不做业务判断。
- 想回到初始数据：清掉浏览器里 `refinery-maint:entries` 这一项，或调用 `resetModule(模块)`。
