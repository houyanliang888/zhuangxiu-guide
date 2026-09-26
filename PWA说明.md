# PWA 改造说明 · 家装施工流程指南

> 把原来的单文件 H5 升级成 **PWA（渐进式网页应用）**：
> 手机能"添加到桌面"，打开后**没有浏览器地址栏**，像原生 App 一样；
> 第一次打开后**断网也能看**（工地经常没信号，这个很关键）。

---

## 一、这次加了什么

| 文件 | 作用 |
|---|---|
| `manifest.webmanifest` | 告诉手机"这是个 App"：名字、图标、主题色、竖屏、启动方式 |
| `sw.js` | Service Worker，负责离线缓存，断网也能打开 |
| `icons/icon-192.png` `icon-512.png` | 桌面图标（普通） |
| `icons/icon-maskable-192.png` `icon-maskable-512.png` | 桌面图标（安卓自适应，不会被圆角/圆形蒙版切边） |
| `apple-touch-icon.png` | iPhone 桌面图标（180×180） |
| `favicon.png` | 浏览器标签页小图标 |
| `index.html` | 加了 PWA meta 标签、安装引导条、iOS 手把手浮层、SW 注册 |

---

## 二、装到手机上的效果

**安卓（Chrome / Edge / 华为浏览器 / 小米浏览器）**
打开链接后，底部会自动浮出一条深蓝色的「装到手机桌面，工地随时查」——
点「安装」→ 系统弹原生确认框 → 确定，桌面就多一个图标。

**iPhone（Safari）**
iOS 不给网页一键安装，所以底部同样浮出一条，点「安装」会弹出 3 步图文说明：
1. 点底部「分享」按钮（方框+向上箭头）
2. 下滑菜单选「添加到主屏幕」
3. 右上角点「添加」

**微信里打开**
微信内置浏览器装不了，会提示"点右上角 ··· 选在浏览器打开"。
所以你发朋友圈 / 群的时候，**文案里最好补一句**：
> 想看完整版，点右上角「···」→「在浏览器打开」，可以装到桌面，工地随时查。

**装完之后**
- 图标名显示「装修顺序」
- 打开无地址栏、无浏览器 UI，全屏
- 打卡进度存在本机，关了再开还在
- 没网也能打开（缓存过的内容）

---

## 三、你要做的事（3 步）

### 第 1 步：开 GitHub Pages
仓库 → **Settings** → 左侧 **Pages** → Source 选 `Deploy from a branch` → Branch 选 `main` + `/ (root)` → **Save**

等 1–2 分钟，得到链接：
```
https://houyanliang888.github.io/zhuangxiu-guide/
```

### 第 2 步：验证 PWA 是否生效
用**手机 Chrome** 打开链接，等 2–3 秒，底部应该浮出安装条。
> ⚠️ PWA 必须走 **https**，GitHub Pages 默认就是 https，没问题。
> 本地 `file://` 打开是测不出来的（浏览器不给权限），必须走线上。

### 第 3 步：用 Chrome DevTools 自检（可选，桌面端）
电脑 Chrome 打开链接 → F12 → **Application** 面板：
- `Manifest` → 看图标、名字、主题色是否读到
- `Service Workers` → 状态应为 **activated and is running**
- **Lighthouse** → 跑一次，PWA 项应该是绿的

---

## 四、以后怎么改内容

改 `index.html` 里的 `STAGES` 数组（16 个阶段）和 `CONFIG`（品牌/微信/电话），然后：

```bash
git add -A
git commit -m "更新内容"
git push
```

推上去 1 分钟左右生效。

> ⚠️ **改了内容记得改缓存版本号**：打开 `sw.js`，把第一行
> `const VERSION = "hgjz-v1";` 改成 `"hgjz-v2"`（依次递增）。
> 不改的话老用户会一直看到旧缓存。

---

## 五、注意事项

1. **HTTP 环境装不了**。必须 https（GitHub Pages / Cloudflare Pages 都自带）。
2. **iOS 的"离线"是有限度的**。Safari 对 Service Worker 缓存管得比较严，长期不用可能被清掉；安卓 Chrome 更稳。
3. **图标替换**：想换图标，把新 PNG 覆盖 `icons/` 里的同名文件即可（512 和 192 两个尺寸 + 两个 maskable 版本）。
4. **不需要改 `start_url`**。现在写的是 `./index.html`，配合 `scope: "./"`，Pages 子路径下也能正常工作。

---

## 六、验证记录（2026-09-26）

无头 Edge 渲染测试结果：

```
16 个阶段全部渲染 ✅
占位符残留：0 ✅
JS 控制台报错：无 ✅
manifest / apple-touch-icon / 安装条 / iOS 浮层：全部就位 ✅
```

截图见 `shots/pwa-*.png`。
