window.KNOWLEDGE = window.KNOWLEDGE || {};
window.KNOWLEDGE.math = [

  { cat:'集合与常用逻辑用语', items:[
    { t:'子集个数公式', type:'公式', f:'含 n 个元素的集合，子集个数 2<sup>n</sup>，真子集个数 2<sup>n</sup>-1，非空真子集个数 2<sup>n</sup>-2。', m:'注意"非空真子集"既要去掉空集也要去掉集合本身。' },
    { t:'交集 并集 补集', type:'概念', f:'A∩B={x|x∈A 且 x∈B}；A∪B={x|x∈A 或 x∈B}；∁<sub>U</sub>A={x|x∈U 且 x∉A}。', m:'常用韦恩图辅助；De Morgan 律：∁(A∪B)=∁A∩∁B。' },
    { t:'充分必要条件', type:'概念', f:'p⇒q：p 是 q 的充分条件，q 是 p 的必要条件。<br>p⇔q：p 是 q 的充要条件。', m:'小范围推大范围；"A是B的什么条件"以 A⇒B 还是 B⇒A 判断。' },
    { t:'全称/特称命题否定', type:'概念', f:'¬(∀x, p(x)) ≡ ∃x, ¬p(x)；<br>¬(∃x, p(x)) ≡ ∀x, ¬p(x)。', m:'改量词+否定结论；"都是"的否定是"不都是"而非"都不是"。' }
  ]},

  { cat:'不等式', items:[
    { t:'基本不等式', type:'公式', f:'a+b ≥ 2√(ab)（a,b>0），等号当且仅当 a=b。<br>变形：ab ≤ (a+b)<sup>2</sup>/4，1/a+1/b ≥ 4/(a+b)。', m:'一正二定三相等；求最值必须能取到等号。' },
    { t:'均值不等式链', type:'公式', f:'调和≤几何≤算术≤平方平均：<br>2/(1/a+1/b) ≤ √(ab) ≤ (a+b)/2 ≤ √((a<sup>2</sup>+b<sup>2</sup>)/2)。', m:'仅在 a=b 时取等号。' },
    { t:'一元二次不等式解法', type:'概念', f:'解 ax<sup>2</sup>+bx+c>0(≥0)：先求对应方程根 x<sub>1</sub>,x<sub>2</sub>，结合 a 的符号与判别式 Δ。<br>Δ<0 且 a>0 时恒大于 0。', m:'解集与开口、两根位置直接相关；含等号时端点要带。' },
    { t:'分式不等式', type:'公式', f:'f(x)/g(x)>0 ⇔ f(x)g(x)>0 且 g(x)≠0；<br>f(x)/g(x)≥0 ⇔ f(x)g(x)≥0 且 g(x)≠0。', m:'移项通分后再化乘积，切勿直接两边乘分母（符号未知）。' },
    { t:'绝对值不等式', type:'公式', f:'|x|<a ⇔ -a<x<a；|x|>a ⇔ x>a 或 x<-a。<br>三角不等式：|a|-|b| ≤ |a±b| ≤ |a|+|b|。', m:'两边平方法是去绝对值的常用技巧（两边非负时）。' },
    { t:'线性规划', type:'概念', f:'在可行域（线性约束围成区域）上，平移目标函数 z=ax+by 的直线，于顶点处取得最值。', m:'先画可行域，再验各顶点；目标函数斜率与边界平行时整条边取最值。' }
  ]},

  { cat:'函数概念与性质', items:[
    { t:'函数定义域求法', type:'概念', f:'分母≠0；偶次根号内≥0；对数真数>0；零次幂底数≠0；实际问题还需符合语义。', m:'复合函数定义域"内层值域是外层定义域"。' },
    { t:'函数单调性', type:'概念', f:'定义法：任取 x<sub>1</sub><x<sub>2</sub>，比较 f(x<sub>1</sub>)-f(x<sub>2</sub>)。<br>导数法：f\'(x)>0 增，f\'(x)<0 减。', m:'写单调区间别用"∪"连接两个不相交区间。' },
    { t:'函数奇偶性', type:'概念', f:'f(-x)=f(x) 为偶函数（图像关于 y 轴对称）；<br>f(-x)=-f(x) 为奇函数（关于原点对称）。', m:'前提：定义域关于原点对称，否则非奇非偶。' },
    { t:'函数周期性', type:'概念', f:'f(x+T)=f(x)（T≠0）则 T 为周期，最小正周期记为 T<sub>0</sub>。<br>常见：sin/cos 周期 2π，tan 周期 π。', m:'f(x+a)=-f(x) ⇒ 周期 2a；f(x+a)=1/f(x) ⇒ 周期 2a。' },
    { t:'函数对称性', type:'概念', f:'f(a+x)=f(a-x) ⇔ 关于 x=a 对称；f(x)=f(2a-x)。<br>中心对称：f(a+x)+f(a-x)=2b ⇔ 关于 (a,b) 对称。', m:'"f(x)=f(2a-x)"对称轴是 x=a，不是 x=2a。' },
    { t:'函数值域求法', type:'概念', f:'常用：配方法、换元法、判别式法、单调性法、基本不等式法、导数法。', m:'分式且二次常考虑判别式法或分离常数。' },
    { t:'反函数', type:'概念', f:'单调函数必有反函数；y=f(x) 与 x=f<sup>-1</sup>(y) 图像关于直线 y=x 对称。', m:'求反函数：换元解出 x 再互换 x,y，并注明定义域。' }
  ]},

  { cat:'基本初等函数', items:[
    { t:'指数运算', type:'公式', f:'a<sup>m</sup>a<sup>n</sup>=a<sup>m+n</sup>；(a<sup>m</sup>)<sup>n</sup>=a<sup>mn</sup>；(ab)<sup>n</sup>=a<sup>n</sup>b<sup>n</sup>；<br>a<sup>-n</sup>=1/a<sup>n</sup>；a<sup>m/n</sup>=ⁿ√a<sup>m</sup>。', m:'底数 a>0。' },
    { t:'对数运算', type:'公式', f:'log<sub>a</sub>(MN)=log<sub>a</sub>M+log<sub>a</sub>N；<br>log<sub>a</sub>(M/N)=log<sub>a</sub>M-log<sub>a</sub>N；log<sub>a</sub>M<sup>n</sup>=n log<sub>a</sub>M。', m:'真数须>0；系数 n 可提到前面（n 为实数）。' },
    { t:'换底公式', type:'公式', f:'log<sub>a</sub>b = log<sub>c</sub>b / log<sub>c</sub>a = ln b / ln a。', m:'推论：log<sub>a</sub>b·log<sub>b</sub>a=1；log<sub>a<sup>n</sup></sub>b<sup>m</sup>=m/n log<sub>a</sub>b。' },
    { t:'对数恒等式', type:'公式', f:'a<sup>log<sub>a</sub>x</sup> = x（x>0）；log<sub>a</sub>a<sup>x</sup> = x。' },
    { t:'指数函数性质', type:'概念', f:'y=a<sup>x</sup>（a>0,a≠1）：a>1 增，0<a<1 减；恒过 (0,1)；值域 (0,+∞)。' },
    { t:'对数函数性质', type:'概念', f:'y=log<sub>a</sub>x（a>0,a≠1）：定义域 (0,+∞)，恒过 (1,0)；a>1 增，0<a<1 减。' },
    { t:'幂函数', type:'概念', f:'y=x<sup>α</sup>。常见：x（过原点增）、x<sup>2</sup>（偶，上抛）、x<sup>1/2</sup>（√x，定义域≥0）、x<sup>-1</sup>（双曲线）、x<sup>-2</sup>。', m:'看 α 正负与奇偶定图象与定义域。' }
  ]},

  { cat:'函数图像与零点', items:[
    { t:'函数图像变换', type:'概念', f:'平移：y=f(x+a) 左移；y=f(x)+b 上移。<br>伸缩：y=Af(x) 纵缩，y=f(ωx) 横缩。<br>对称：y=-f(x) 关于 x 轴；y=f(-x) 关于 y 轴。<br>翻折：y=|f(x)| 留上翻下；y=f(|x|) 保留 y 轴右侧并对称。', m:'先平移后伸缩与先伸缩后平移结果不同，注意顺序。' },
    { t:'零点存在定理', type:'概念', f:'若函数 f 在 [a,b] 连续且 f(a)f(b)<0，则在 (a,b) 内至少存在一个零点。', m:'连续是前提；f(a)f(b)<0 是"至少有一个"，不能保证唯一。' },
    { t:'二分法', type:'概念', f:'在区间 [a,b]（f(a)f(b)<0）不断取中点 m，用 f(m) 符号缩小含零点的半区间，逼近零点。', m:'只能求变号零点；精度满足 |a-b|<ε 即可停止。' }
  ]},

  { cat:'导数及其应用', items:[
    { t:'导数定义', type:'公式', f:'f\'(x) = lim<sub>Δx→0</sub> [f(x+Δx)-f(x)]/Δx。', m:'导数即割线斜率的极限，也是切线斜率。' },
    { t:'基本求导公式', type:'公式', f:'(x<sup>n</sup>)\'=nx<sup>n-1</sup>；(e<sup>x</sup>)\'=e<sup>x</sup>；(a<sup>x</sup>)\'=a<sup>x</sup>lna；<br>(lnx)\'=1/x；(log<sub>a</sub>x)\'=1/(x lna)；(sinx)\'=cosx；(cosx)\'=-sinx。' },
    { t:'四则运算求导', type:'公式', f:'(u±v)\'=u\'±v\'；(uv)\'=u\'v+uv\'；<br>(u/v)\'=(u\'v-uv\')/v<sup>2</sup>（v≠0）。', m:'(uv)\'≠u\'v\'，乘积要两项相加。' },
    { t:'复合函数求导', type:'公式', f:'y=f(g(x))，则 y\'=f\'(g(x))·g\'(x)（链式法则）。', m:'由外到内逐层求导再相乘。' },
    { t:'切线方程', type:'公式', f:'在点 (x<sub>0</sub>,f(x<sub>0</sub>)) 处切线：y-f(x<sub>0</sub>)=f\'(x<sub>0</sub>)(x-x<sub>0</sub>)，斜率 k=f\'(x<sub>0</sub>)。', m:'区分"在点P的切线"（P为切点）与"过点P的切线"（P未必是切点）。' },
    { t:'单调性与极值', type:'概念', f:'f\'(x)>0 增，f\'(x)<0 减；驻点 f\'(x)=0。极值点需 f\' 左右变号。', m:'f\'=0 不一定是极值（如 f(x)=x³ 在 0 处）；列表法最稳妥。' },
    { t:'闭区间最值', type:'概念', f:'求 [a,b] 上最值：比较所有极值点函数值与端点 f(a),f(b)，最大者为最大值。', m:'开区间无端点，只有极值，未必有最值。' },
    { t:'恒成立与存在性', type:'概念', f:'a>f(x) 恒成立 ⇔ a>f(x)<sub>max</sub>；<br>a<f(x) 恒成立 ⇔ a<f(x)<sub>min</sub>。<br>存在性则取相反端。', m:'常用参变分离，把参数与变量分置两边再求最值。' },
    { t:'构造函数与放缩', type:'概念', f:'常用放缩：e<sup>x</sup>≥x+1（等号 x=0），lnx≤x-1（等号 x=1），lnx≥1-1/x（x>0）。', m:'证明不等式可移项构造 g(x)，用单调性证 g(x)≥0。' }
  ]},

  { cat:'三角函数', items:[
    { t:'同角三角函数关系', type:'公式', f:'sin<sup>2</sup>α+cos<sup>2</sup>α=1；<br>tanα=sinα/cosα；1+tan<sup>2</sup>α=sec<sup>2</sup>α。', m:'齐次式常"切化弦"或分子分母同除以 cos。' },
    { t:'诱导公式', type:'概念', f:'口诀"奇变偶不变，符号看象限"：<br>k·90°±α，k 奇变 sin/cos，k 偶不变；符号由原角所在象限定。', m:'统一用弧度或角度，别混用。' },
    { t:'和差角公式', type:'公式', f:'sin(α±β)=sinαcosβ±cosαsinβ；<br>cos(α±β)=cosαcosβ∓sinαsinβ；<br>tan(α±β)=(tanα±tanβ)/(1∓tanαtanβ)。' },
    { t:'倍角公式', type:'公式', f:'sin2α=2sinαcosα；<br>cos2α=cos<sup>2</sup>α-sin<sup>2</sup>α=2cos<sup>2</sup>α-1=1-2sin<sup>2</sup>α；<br>tan2α=2tanα/(1-tan<sup>2</sup>α)。', m:'降幂：cos<sup>2</sup>α=(1+cos2α)/2，sin<sup>2</sup>α=(1-cos2α)/2。' },
    { t:'辅助角公式', type:'公式', f:'a sinx + b cosx = √(a<sup>2</sup>+b<sup>2</sup>) sin(x+φ)，其中 cosφ=a/√(a<sup>2</sup>+b<sup>2</sup>)，sinφ=b/√(a<sup>2</sup>+b<sup>2</sup>)。', m:'提公因式 √(a²+b²)；φ 所在象限由 a,b 符号定。' },
    { t:'三角函数图像性质', type:'概念', f:'y=A sin(ωx+φ)：振幅 |A|，周期 T=2π/|ω|，频率 1/T，初相 φ，相位 ωx+φ。', m:'由图像求解析式：先定 A、T 得 ω，再代入特殊点求 φ。' },
    { t:'三角函数最值', type:'概念', f:'y=A sin(ωx+φ)+B 的值域为 [B-|A|, B+|A|]。<br>含 sinx±cosx 可辅助角化一。', m:'注意 x 的取值范围会限制最值能否取到。' }
  ]},

  { cat:'解三角形', items:[
    { t:'正弦定理', type:'公式', f:'a/sinA = b/sinB = c/sinC = 2R（R 为外接圆半径）。', m:'已知两角一边或两边与对角用正弦；注意多解情形（大边对大角）。' },
    { t:'余弦定理', type:'公式', f:'a<sup>2</sup>=b<sup>2</sup>+c<sup>2</sup>-2bc cosA；<br>cosA=(b<sup>2</sup>+c<sup>2</sup>-a<sup>2</sup>)/(2bc)。', m:'已知三边或两边夹角用余弦；也是求角的工具。' },
    { t:'三角形面积公式', type:'公式', f:'S=1/2 ab sinC = 1/2 bc sinA = 1/2 ac sinB；<br>海伦公式 S=√[p(p-a)(p-b)(p-c)]，p=(a+b+c)/2。', m:'面积公式常与正余弦定理联用。' },
    { t:'射影定理', type:'公式', f:'a=b cosC + c cosB；b=a cosC + c cosA；c=a cosB + b cosA。', m:'可由余弦定理推出，常用于边角互化。' }
  ]},

  { cat:'平面向量', items:[
    { t:'向量加减与数乘', type:'概念', f:'加减：三角形法则、平行四边形法则。<br>数乘：λa 与 a 共线，|λa|=|λ||a|。', m:'a+b=b+a；|a+b|≤|a|+|b|（三角不等式）。' },
    { t:'数量积（点积）', type:'公式', f:'a·b = |a||b|cosθ = x<sub>1</sub>x<sub>2</sub>+y<sub>1</sub>y<sub>2</sub>。<br>a⊥b ⇔ a·b=0。', m:'数量积结果为实数；a·b=0 不能推出 a=0 或 b=0。' },
    { t:'坐标运算', type:'公式', f:'a±b=(x<sub>1</sub>±x<sub>2</sub>, y<sub>1</sub>±y<sub>2</sub>)；<br>λa=(λx<sub>1</sub>, λy<sub>1</sub>)；a·b=x<sub>1</sub>x<sub>2</sub>+y<sub>1</sub>y<sub>2</sub>。' },
    { t:'模与夹角', type:'公式', f:'|a|=√(x<sub>1</sub><sup>2</sup>+y<sub>1</sub><sup>2</sup>)；<br>cosθ = (a·b)/(|a||b|)。', m:'求夹角先算点积与模，再取 arccos。' },
    { t:'向量投影', type:'公式', f:'a 在 b 方向上的投影 = |a|cosθ = (a·b)/|b|。', m:'投影是数量（可负），不是向量。' },
    { t:'极化恒等式', type:'公式', f:'a·b = 1/4(|a+b|<sup>2</sup> - |a-b|<sup>2</sup>)。', m:'把点积转为模长，常用于以圆/正方形为背景的向量题。' }
  ]},

  { cat:'数列', items:[
    { t:'等差数列通项', type:'公式', f:'a<sub>n</sub>=a<sub>1</sub>+(n-1)d；<br>等差中项 2A=a+b。', m:'若 a<sub>m</sub>,a<sub>n</sub> 已知，d=(a<sub>n</sub>-a<sub>m</sub>)/(n-m)。' },
    { t:'等差数列前n项和', type:'公式', f:'S<sub>n</sub>=n(a<sub>1</sub>+a<sub>n</sub>)/2 = n a<sub>1</sub>+n(n-1)d/2。', m:'S<sub>n</sub> 是关于 n 的缺常数项二次函数（d≠0）。' },
    { t:'等比数列通项', type:'公式', f:'a<sub>n</sub>=a<sub>1</sub>q<sup>n-1</sup>；<br>等比中项 G<sup>2</sup>=ab（同号）。', m:'q 可能为 0？首项是 0 则全 0；通常 q≠0。' },
    { t:'等比数列前n项和', type:'公式', f:'S<sub>n</sub>=a<sub>1</sub>(1-q<sup>n</sup>)/(1-q) = (a<sub>1</sub>-a<sub>n</sub>q)/(1-q)（q≠1）；<br>q=1 时 S<sub>n</sub>=n a<sub>1</sub>。', m:'用求和公式前先化简或讨论 q=1！' },
    { t:'通项求法', type:'概念', f:'累加法（a<sub>n+1</sub>-a<sub>n</sub>=f(n)）、累乘法（a<sub>n+1</sub>/a<sub>n</sub>=f(n)）、构造等比（a<sub>n+1</sub>=p a<sub>n</sub>+q 凑 a<sub>n+1</sub>+t=p(a<sub>n</sub>+t)）、待定系数。', m:'S<sub>n</sub> 与 a<sub>n</sub> 关系：n=1 时 a<sub>1</sub>=S<sub>1</sub>，n≥2 时 a<sub>n</sub>=S<sub>n</sub>-S<sub>n-1</sub>。' },
    { t:'错位相减法', type:'概念', f:'用于 {等差×等比} 求和：写出 S<sub>n</sub>，乘公比 q 得 qS<sub>n</sub>，两式相减后等比数列求和。', m:'相减后首项常单独保留，别漏项。' },
    { t:'裂项相消', type:'公式', f:'1/[n(n+1)] = 1/n - 1/(n+1)；<br>1/[n(n+k)] = (1/k)(1/n - 1/(n+k))；<br>1/(√n+√(n+1)) = √(n+1)-√n。', m:'相消后通常只剩首尾几项。' },
    { t:'数学归纳法', type:'概念', f:'①验证 n=n<sub>0</sub> 成立；②假设 n=k 成立，证 n=k+1 也成立；则对所有 n≥n<sub>0</sub> 成立。', m:'第二步必须用归纳假设，不能凭空推出。' }
  ]},

  { cat:'立体几何', items:[
    { t:'点线面位置关系', type:'概念', f:'线面平行：线∥面内一直线且线不在面内。<br>面面垂直：一平面过另一平面垂线。<br>线面垂直：垂直面内两条相交直线。', m:'判定定理与性质定理要分清"由什么推什么"。' },
    { t:'空间角', type:'概念', f:'线线角：平移至相交，取 [0,π/2]。<br>线面角：直线与射影夹角，θ∈[0,π/2]。<br>二面角：两个半平面夹角，常取平面角。', m:'线面角范围是 [0,π/2]，不是 [0,π]。' },
    { t:'体积公式', type:'公式', f:'柱 V=Sh；锥 V=1/3 Sh；<br>球 V=4/3 πR<sup>3</sup>；台 V=1/3 h(S+√SS\'+S\')。', m:'锥体是等底等高柱体的 1/3。' },
    { t:'表面积公式', type:'公式', f:'球 S=4πR<sup>2</sup>；<br>直棱柱侧面积=底面周长×高；圆柱 S=2πr(r+h)；圆锥 S=πrl+πr<sup>2</sup>。', m:'球的表面积与体积都只与 R 有关。' },
    { t:'外接球', type:'概念', f:'长方体的外接球直径=体对角线，R=√(a<sup>2</sup>+b<sup>2</sup>+c<sup>2</sup>)/2。<br>直棱柱/直圆柱外接球：轴截面矩形对角线为直径。', m:'补形法：把几何体补成长方体求外接球。' },
    { t:'内切球', type:'概念', f:'正四面体内切球半径 r=h/4；正方体内切球 r=a/2（与各面切）。', m:'正多面体内切球心即中心。' },
    { t:'三视图', type:'概念', f:'正视图、侧视图、俯视图；长对正、高平齐、宽相等。', m:'由三视图还原几何体时先看俯视图定底面。' },
    { t:'空间向量法', type:'概念', f:'建系求法向量 n，线面角 sinθ=|cos⟨a,n⟩|；<br>二面角 cos=|n<sub>1</sub>·n<sub>2</sub>|/(|n<sub>1</sub>||n<sub>2</sub>|)（注意锐/钝角）。', m:'法向量方向决定二面角取补，需结合图形判断。' }
  ]},

  { cat:'直线、圆与解析几何', items:[
    { t:'两直线位置关系', type:'概念', f:'斜率 k<sub>1</sub>,k<sub>2</sub>：平行 k<sub>1</sub>=k<sub>2</sub> 且截距不等；<br>垂直 k<sub>1</sub>k<sub>2</sub>=-1；夹角 tanθ=|(k<sub>1</sub>-k<sub>2</sub>)/(1+k<sub>1</sub>k<sub>2</sub>)|。', m:'斜率不存在时要单独讨论（垂直于 x 轴）。' },
    { t:'点到直线距离', type:'公式', f:'点 (x<sub>0</sub>,y<sub>0</sub>) 到直线 Ax+By+C=0：<br>d=|Ax<sub>0</sub>+By<sub>0</sub>+C|/√(A<sup>2</sup>+B<sup>2</sup>)。', m:'直线必须先化为一般式 Ax+By+C=0。' },
    { t:'圆的标准方程', type:'公式', f:'(x-a)<sup>2</sup>+(y-b)<sup>2</sup>=r<sup>2</sup>，圆心 (a,b)，半径 r。<br>一般式：x<sup>2</sup>+y<sup>2</sup>+Dx+Ey+F=0（D<sup>2</sup>+E<sup>2</sup>-4F>0）。', m:'一般式配方得圆心 (-D/2,-E/2)。' },
    { t:'弦长公式', type:'公式', f:'圆中弦长 |AB|=2√(r<sup>2</sup>-d<sup>2</sup>)，d 为圆心到弦的距离。<br>直线截曲线：|AB|=√(1+k<sup>2</sup>)|x<sub>1</sub>-x<sub>2</sub>|。' },
    { t:'圆的切线', type:'概念', f:'过圆上点 (x<sub>0</sub>,y<sub>0</sub>) 切线：(x<sub>0</sub>-a)(x-a)+(y<sub>0</sub>-b)(y-b)=r<sup>2</sup>。<br>过圆外点切线：设斜率用 d=r 或联立 Δ=0 求。', m:'过圆外一点有两条切线，别漏斜率不存在的一条。' }
  ]},

  { cat:'圆锥曲线', items:[
    { t:'椭圆定义与标准方程', type:'公式', f:'定义：|PF<sub>1</sub>|+|PF<sub>2</sub>|=2a（2a>2c）。<br>标准式 x<sup>2</sup>/a<sup>2</sup>+y<sup>2</sup>/b<sup>2</sup>=1（a>b>0），c<sup>2</sup>=a<sup>2</sup>-b<sup>2</sup>。', m:'焦点在长轴；a 永远最大。' },
    { t:'双曲线定义与标准方程', type:'公式', f:'定义：||PF<sub>1</sub>|-|PF<sub>2</sub>||=2a（2a<2c）。<br>标准式 x<sup>2</sup>/a<sup>2</sup>-y<sup>2</sup>/b<sup>2</sup>=1，c<sup>2</sup>=a<sup>2</sup>+b<sup>2</sup>。', m:'渐近线 y=±(b/a)x；a 不是最大，c 最大。' },
    { t:'抛物线定义与标准方程', type:'公式', f:'定义：到定点(焦点)与定直线(准线)距离相等。<br>y<sup>2</sup>=2px（p>0）：焦点 (p/2,0)，准线 x=-p/2。', m:'p 是焦点到准线距离；开口由平方项与符号定。' },
    { t:'离心率', type:'公式', f:'e=c/a。椭圆 0<e<1；双曲线 e>1；抛物线 e=1。<br>椭圆越扁 e 越大，双曲线开口越阔 e 越大。', m:'统一定义：e=动点到焦点距离/到准线距离。' },
    { t:'焦半径公式', type:'公式', f:'椭圆（左焦点）：r<sub>1</sub>=a+ex<sub>0</sub>，r<sub>2</sub>=a-ex<sub>0</sub>。<br>抛物线 y<sup>2</sup>=2px：|AF|=x<sub>0</sub>+p/2。', m:'双曲线焦半径带绝对值，注意点在左右支。' },
    { t:'焦点弦（通径）', type:'公式', f:'抛物线通径长 2p（过焦点垂直轴）；<br>椭圆/双曲线焦点弦可用焦半径和。', m:'抛物线焦点弦 |AB|=x<sub>1</sub>+x<sub>2</sub>+p。' },
    { t:'中点弦（点差法）', type:'概念', f:'设弦端点代入曲线相减，得 (y<sub>1</sub>-y<sub>2</sub>)/(x<sub>1</sub>-x<sub>2</sub>)·(y<sub>1</sub>+y<sub>2</sub>)/(x<sub>1</sub>+x<sub>2</sub>) = -b²/a²（椭圆）。', m:'点差法得斜率与中点关系，常用于求弦所在直线方程。' },
    { t:'定义法求轨迹', type:'概念', f:'由 |PF<sub>1</sub>|±|PF<sub>2</sub>| 或到定点定直线距离相等，直接套圆锥曲线定义判定轨迹。', m:'先算 2a 与 2c 大小关系，排除退化情形。' }
  ]},

  { cat:'计数原理与二项式定理', items:[
    { t:'排列数', type:'公式', f:'A<sub>n</sub><sup>m</sup>=n(n-1)…(n-m+1)=n!/(n-m)!（m≤n）。', m:'与顺序有关用排列。' },
    { t:'组合数', type:'公式', f:'C<sub>n</sub><sup>m</sup>=n!/[m!(n-m)!]；<br>C<sub>n</sub><sup>0</sup>=C<sub>n</sub><sup>n</sup>=1；C<sub>n</sub><sup>m</sup>=C<sub>n</sub><sup>n-m</sup>。', m:'与顺序无关用组合；对称性质常用来化简。' },
    { t:'二项式定理', type:'公式', f:'(a+b)<sup>n</sup> = Σ<sub>k=0</sub><sup>n</sup> C<sub>n</sub><sup>k</sup> a<sup>n-k</sup> b<sup>k</sup>。' },
    { t:'二项展开式通项', type:'公式', f:'T<sub>k+1</sub>=C<sub>n</sub><sup>k</sup> a<sup>n-k</sup> b<sup>k</sup>（第 k+1 项）。', m:'"第 r 项"对应 k=r-1；求某次幂项令指数为目标。' },
    { t:'赋值法', type:'概念', f:'令 a=b=1 得系数和 Σ C<sub>n</sub><sup>k</sup>=2<sup>n</sup>；<br>令 a=1,b=-1 得奇数项与偶数项系数差。', m:'含参时赋值可求特定系数和。' }
  ]},

  { cat:'概率与统计', items:[
    { t:'古典概型', type:'公式', f:'P(A)=m/n（n 个等可能基本事件，A 含 m 个）。', m:'先数清样本空间与事件包含的基本事件数。' },
    { t:'条件概率', type:'公式', f:'P(B|A)=P(AB)/P(A)（P(A)>0）。', m:'可画树状图/列联表辅助。' },
    { t:'相互独立事件', type:'公式', f:'A、B 独立 ⇔ P(AB)=P(A)P(B)。<br>推广：P(A∪B)=1-(1-P(A))(1-P(B))。', m:'独立≠互斥；独立时 P(B|A)=P(B)。' },
    { t:'离散型分布列与期望', type:'公式', f:'分布列：P(X=x<sub>i</sub>)=p<sub>i</sub>，Σp<sub>i</sub>=1。<br>期望 E(X)=Σx<sub>i</sub>p<sub>i</sub>；方差 D(X)=Σ(x<sub>i</sub>-E)<sup>2</sup>p<sub>i</sub>=E(X<sup>2</sup>)-[E(X)]<sup>2</sup>。', m:'方差性质：D(aX+b)=a²D(X)。' },
    { t:'二项分布', type:'公式', f:'X~B(n,p)：P(X=k)=C<sub>n</sub><sup>k</sup> p<sup>k</sup>(1-p)<sup>n-k</sup>；<br>E(X)=np，D(X)=np(1-p)。', m:'"n 次独立重复试验，每次成功概率 p"才是二项分布。' },
    { t:'超几何分布', type:'公式', f:'P(X=k)=C<sub>M</sub><sup>k</sup>C<sub>N-M</sub><sup>n-k</sup>/C<sub>N</sub><sup>n</sup>（不放回抽样）。', m:'与二项分布区别在于是否放回。' },
    { t:'正态分布', type:'概念', f:'X~N(μ,σ<sup>2</sup>)：密度曲线关于 x=μ 对称，<br>P(μ-σ<X<μ+σ)≈0.6827，P(μ-2σ<X<μ+2σ)≈0.9545，P(μ-3σ<X<μ+3σ)≈0.9973。', m:'对称轴 x=μ；σ 越大越矮胖。' },
    { t:'线性回归', type:'概念', f:'回归直线 y=bx+a 必过样本中心点 (x̄,ȳ)；<br>b=Σ(x<sub>i</sub>-x̄)(y<sub>i</sub>-ȳ)/Σ(x<sub>i</sub>-x̄)<sup>2</sup>。', m:'相关≠因果；r 越接近±1 线性相关越强。' },
    { t:'独立性检验', type:'概念', f:'χ<sup>2</sup>=n(ad-bc)<sup>2</sup>/[(a+b)(c+d)(a+c)(b+d)]，对照临界值表判断是否有 95%/99% 把握相关。', m:'n=a+b+c+d 为样本总数。' },
    { t:'茎叶图与抽样', type:'概念', f:'茎叶图保留各位数据、展示分布；抽样方法：简单随机、分层、系统抽样。', m:'中位数、众数、平均数可直接从茎叶图读取。' }
  ]},

  { cat:'复数', items:[
    { t:'复数四则运算', type:'公式', f:'(a+bi)±(c+di)=(a±c)+(b±d)i；<br>(a+bi)(c+di)=(ac-bd)+(ad+bc)i。', m:'i²=-1；除法用分子分母同乘分母共轭。' },
    { t:'共轭复数', type:'公式', f:'z=a+bi 的共轭 z̄=a-bi；<br>z·z̄=|z|<sup>2</sup>=a<sup>2</sup>+b<sup>2</sup>。', m:'复数相等：实部虚部分别相等（实数化比较）。' },
    { t:'复数的模', type:'公式', f:'|z|=|a+bi|=√(a<sup>2</sup>+b<sup>2</sup>)；<br>|z<sub>1</sub>z<sub>2</sub>|=|z<sub>1</sub>||z<sub>2</sub>|；|z<sub>1</sub>+z<sub>2</sub>|≤|z<sub>1</sub>|+|z<sub>2</sub>|。' },
    { t:'复数几何意义', type:'概念', f:'复数 z=a+bi 对应平面点 (a,b) 或向量；<br>加减即向量加减，乘模长相乘、辐角相加。', m:'复平面 x 轴实轴、y 轴虚轴。' },
    { t:'i 的幂的周期', type:'公式', f:'i<sup>1</sup>=i，i<sup>2</sup>=-1，i<sup>3</sup>=-i，i<sup>4</sup>=1，周期为 4。<br>i<sup>4k</sup>=1，i<sup>4k+1</sup>=i，i<sup>4k+2</sup>=-1，i<sup>4k+3</sup>=-i。', m:'遇高次幂先对指数 mod 4。' }
  ]}

];
