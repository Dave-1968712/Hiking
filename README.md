# Hiking - 山野徒步 (Scenic Hiking Routes Platform)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDave-1968712%2FHiking)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg)

## 📖 项目简介 (Introduction)

**Hiking (山野徒步)** 是一个现代化的户外徒步线路探索与管理平台。该项目旨在解决户外爱好者在寻找优质徒步线路时面临的信息碎片化、攻略不详尽、缺乏可视化展示等痛点。

通过整合精选的高质量徒步线路，Hiking 为用户提供了一站式的线路查询、详情浏览、装备建议和行程规划服务。同时，配套的后台管理系统让运营者能够轻松发布、编辑和管理海量线路数据，支持图片拖拽上传、富文本编辑和批量操作，极大地提升了内容维护效率。

### 💡 核心价值主张
*   **对于徒步者**：提供经过筛选的优质线路，配合详尽的每日行程、海拔数据、装备清单和实景照片，降低决策成本，提升出行体验。
*   **对于运营者**：提供功能强大的后台管理工具，支持高效的内容生产和发布流程，确保数据的时效性和准确性。

---

## ✨ 核心功能 (Key Features)

### 🏔️ 前台展示 (User Interface)
*   **精选线路展示**：基于难度、分类（摄影、徒步、登山等）的动态筛选与展示。
*   **沉浸式详情页**：
    *   **每日行程可视化**：清晰的时间轴展示每日活动安排。
    *   **关键数据概览**：距离、海拔、耗时、最佳季节等核心指标一目了然。
    *   **装备建议**：针对不同线路提供定制化的装备清单。
    *   **摄影机位标注**：为摄影爱好者提供最佳拍摄点和参数参考。
*   **响应式设计**：完美适配桌面端、平板和移动端设备，随时随地查看攻略。

### 🛠️ 后台管理 (Admin Dashboard)
*   **安全认证**：基于 Supabase Auth 的安全登录机制。
*   **全能线路管理**：
    *   **CRUD 操作**：创建、读取、更新、删除线路，支持草稿箱功能。
    *   **批量操作**：支持批量选中线路进行状态修改（发布/下架）或删除。
*   **高级表单体验**：
    *   **智能图片上传**：支持拖拽上传、多格式支持 (JPG/PNG/GIF/WebP)、大小限制 (5MB)、上传进度条、错误重试及实时预览。
    *   **自动保存**：本地草稿自动保存功能，防止意外关闭导致数据丢失。
    *   **富文本编辑**：集成 Quill 编辑器，支持复杂的排版需求。
    *   **可视化选择**：难度等级颜色标识，分类与受众的直观单选组件。
*   **即时反馈**：全局 Toast 通知系统，操作结果实时反馈。

---

## 🏗️ 技术架构 (Architecture)

本项目采用 **Serverless** 架构，前端静态资源托管，后端服务完全基于 **Supabase** 生态，实现了低成本、高可用和易维护的特性。

### 技术栈 (Tech Stack)
*   **前端 (Frontend)**:
    *   **HTML5 / CSS3**: 语义化标签与现代 CSS 特性。
    *   **Tailwind CSS**: 原子化 CSS 框架，快速构建响应式界面。
    *   **Vue.js 3 (CDN)**: 用于构建后台管理的交互逻辑，利用响应式系统处理复杂表单状态。
    *   **Vanilla JS**: 前台页面采用原生 JS，保证极致的加载速度和 SEO 友好性。
    *   **Libraries**: Lucide Icons (图标), Quill (富文本编辑器)。
*   **后端 (Backend)**:
    *   **Supabase Database**: PostgreSQL 数据库，存储结构化线路数据。
    *   **Supabase Storage**: 对象存储，用于托管高清封面图和相册图片。
    *   **Supabase Edge Functions**: 运行在边缘节点的 Deno 函数，处理业务逻辑和数据清洗。
    *   **Supabase Auth**: 用户认证与权限管理。

---

## 🚀 安装与部署 (Installation & Setup)

### 1. 克隆仓库
```bash
git clone https://github.com/Dave-1968712/Hiking.git
cd Hiking
```

### 2. 配置 Supabase 后端
1.  登录 [Supabase Dashboard](https://supabase.com/dashboard) 创建新项目。
2.  **创建数据库表**：在 SQL Editor 中运行项目根目录下的 `schema.sql` 文件，创建 `scenic_routes` 表及相关 RLS (Row Level Security) 策略。
3.  **配置存储桶**：
    *   创建名为 `images` 的公开存储桶 (Public Bucket)。
    *   配置 RLS 策略允许公开读取，认证用户上传/删除。
4.  **部署 Edge Function**：
    *   安装 Supabase CLI。
    *   运行 `supabase functions deploy scenic-routes-v4` 部署 API 服务。

### 3. 本地运行
由于项目是静态网页，您可以使用任何静态服务器运行。

**使用 Python (推荐):**
```bash
python3 -m http.server 8080
```

**使用 Node.js (http-server):**
```bash
npx http-server .
```

访问地址：
*   前台首页: `http://localhost:8080/index.html`
*   后台管理: `http://localhost:8080/admin.html`

---

## 📝 使用指南 (Usage Guide)

### 前台浏览
1.  打开首页，浏览精选线路列表。
2.  点击顶部导航的"精选线路"锚点。
3.  点击任意卡片进入详情页，查看行程和装备建议。

### 后台管理
1.  访问 `/admin.html`。
2.  输入管理员账号密码（需在 Supabase Auth 中预先创建用户）。
3.  **新增线路**：点击右上角"新增线路"，填写表单。支持从本地拖拽图片上传封面。
4.  **编辑线路**：点击列表项右侧的编辑图标。
5.  **批量管理**：勾选多条线路，点击顶部出现的"批量修改状态"或"批量删除"按钮。

---

## 🔌 API 文档 (API Reference)

项目主要通过 Supabase Edge Function 提供数据服务。

### 获取线路列表
*   **Endpoint**: `/functions/v1/scenic-routes-v4`
*   **Method**: `GET`
*   **Query Parameters**:
    *   `limit` (可选): 返回数量限制，默认 6，最大 50。
    *   `offset` (可选): 分页偏移量。
*   **Response**:
    ```json
    {
      "code": 0,
      "msg": "ok",
      "data": [
        {
          "id": 1,
          "title": "雨崩神瀑徒步",
          "difficulty": "moderate",
          "status": "published",
          ...
        }
      ]
    }
    ```

---

## 📂 项目结构 (Project Structure)

```
Hiking/
├── index.html              # 前台首页 (Landing Page)
├── admin.html              # 后台管理页 (Admin Dashboard)
├── schema.sql              # 数据库结构与 RLS 策略 SQL
├── functions/              # Supabase Edge Functions
│   └── scenic-routes/      # 核心业务逻辑函数
├── scripts/                # 数据导入与处理脚本
├── tests/                  # 测试脚本
├── package.json            # 项目依赖配置
└── README.md               # 项目说明文档
```

---

## 🤝 贡献指南 (Contributing)

欢迎提交 Issue 和 Pull Request 来改进本项目！

1.  Fork 本仓库。
2.  创建您的特性分支 (`git checkout -b feature/AmazingFeature`)。
3.  提交您的更改 (`git commit -m 'Add some AmazingFeature'`)。
4.  推送到分支 (`git push origin feature/AmazingFeature`)。
5.  开启一个 Pull Request。

---

## 📄 许可证 (License)

本项目基于 MIT 许可证开源 - 详见 [LICENSE](LICENSE) 文件。

---

**Happy Hiking! 🌲**
