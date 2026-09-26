# -*- coding: utf-8 -*-
"""
PWA 图标生成：把 logo 源图裁成各尺寸 PNG。
- 普通图标 (any)：logo 已有内边距，直接缩放
- 蒙版图标 (maskable)：Android 自适应图标要留安全区（内容只占中心 ~80%），
  所以先补一圈背景色再缩放，避免被圆形/圆角蒙版切掉边。
"""
import os
from PIL import Image

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BASE, "icons", "logo-1024.png")
OUT = os.path.join(BASE, "icons")

# 藏蓝深海色（与 logo 底部一致），用于 maskable 补边
NAVY = (14, 23, 42)

SIZES = [192, 512]

src = Image.open(SRC).convert("RGBA")
W, H = src.size
print("源图尺寸:", W, H)

for s in SIZES:
    # ---- any：直接缩放 ----
    img = src.resize((s, s), Image.LANCZOS)
    p = os.path.join(OUT, f"icon-{s}.png")
    img.save(p, optimize=True)
    print("写出", p, img.size, f"{os.path.getsize(p)/1024:.1f}KB")

    # ---- maskable：内容缩到 76%，四周补藏蓝底 ----
    inner = int(s * 0.76)
    small = src.resize((inner, inner), Image.LANCZOS)
    canvas = Image.new("RGBA", (s, s), NAVY + (255,))
    off = (s - inner) // 2
    canvas.paste(small, (off, off), small)
    p = os.path.join(OUT, f"icon-maskable-{s}.png")
    canvas.save(p, optimize=True)
    print("写出", p, canvas.size, f"{os.path.getsize(p)/1024:.1f}KB")

# ---- favicon ----
ico_src = src.resize((64, 64), Image.LANCZOS)
p = os.path.join(BASE, "favicon.png")
ico_src.save(p, optimize=True)
print("写出", p)

# ---- apple-touch-icon（iOS 会自己加圆角，别补边）----
p = os.path.join(BASE, "apple-touch-icon.png")
src.resize((180, 180), Image.LANCZOS).save(p, optimize=True)
print("写出", p)

print("完成")
