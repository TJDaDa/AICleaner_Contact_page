# AICleaner Contact Page

这是一个联系人管理应用的页面集合，包含多个功能模块的界面。

## 项目结构

```
AICleaner_Contact_page/
├── index.html                 # 主页面 - 组织联系人菜单
├── pages/                     # 子页面目录
│   ├── duplicate-contacts.html    # 重复联系人页面
│   ├── incomplete-contacts.html   # 不完整联系人页面
│   ├── all-contacts.html          # 所有联系人页面
│   └── backup-contacts.html       # 备份联系人页面
├── styles/                    # 样式文件目录
│   ├── common.css             # 通用样式
│   ├── main.css              # 主页面样式
│   ├── duplicate-contacts.css # 重复联系人页面样式
│   ├── incomplete-contacts.css # 不完整联系人页面样式
│   ├── all-contacts.css       # 所有联系人页面样式
│   └── backup-contacts.css    # 备份联系人页面样式
├── scripts/                   # JavaScript文件目录
│   ├── common.js             # 通用功能
│   ├── main.js               # 主页面功能
│   ├── duplicate-contacts.js  # 重复联系人页面功能
│   ├── incomplete-contacts.js # 不完整联系人页面功能
│   ├── all-contacts.js        # 所有联系人页面功能
│   └── backup-contacts.js     # 备份联系人页面功能
├── image/                     # 图片资源目录
│   ├── All Contacts icon.png
│   ├── back icon.png
│   ├── Back Up Contacts icon.png
│   ├── Duplicate Contacts icon.png
│   ├── Incomplete Contacts icon.png
│   ├── next icon.png
│   ├── 未选中.png
│   └── 选中.png
└── README.md                  # 项目说明文档
```

## 页面功能

### 1. 主页面 (index.html)
- 显示四个主要功能模块
- 每个模块显示对应的数量统计
- 点击可跳转到相应的功能页面

### 2. 重复联系人页面 (duplicate-contacts.html)
- **合并状态**: 显示重复联系人列表，支持选择合并
- **空状态**: 当没有重复联系人时显示
- 支持合并操作，更新主页面计数

### 3. 不完整联系人页面 (incomplete-contacts.html)
- **选择状态**: 显示不完整联系人列表，支持多选
- **空状态**: 当没有不完整联系人时显示
- 支持全选和批量删除操作

### 4. 所有联系人页面 (all-contacts.html)
- 显示所有联系人的列表
- 支持点击查看联系人详情

### 5. 备份联系人页面 (backup-contacts.html)
- **空状态**: 没有备份时显示
- **备份列表**: 显示历史备份记录
- **备份详情**: 显示具体备份内容
- 支持创建备份、恢复备份、删除备份

## 技术特性

- **响应式设计**: 支持不同分辨率的图片资源
- **模块化架构**: 样式和脚本分离，便于维护
- **状态管理**: 使用localStorage进行页面间数据同步
- **交互反馈**: 包含加载状态、确认对话框等用户体验优化

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 点击各个功能模块进入相应页面
3. 使用返回按钮或浏览器后退功能返回主页面

## 开发说明

- 所有页面都使用相同的设计语言和交互模式
- 样式文件采用模块化设计，通用样式放在 `common.css` 中
- JavaScript功能按页面分离，通用功能放在 `common.js` 中
- 图片资源支持多分辨率适配

## 后续开发

当前页面结构已完成，后续可以根据实际需求：
- 集成真实的联系人数据API
- 添加更多交互功能
- 优化样式和动画效果
- 添加错误处理和加载状态
