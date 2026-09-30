// 高中英语（山西新高考 · 新课标II卷）
window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS.english = {
  name: "英语",
  icon: "🔤",
  color: "#c78a00",
  paper: "新课标II卷 · 笔试150分 · 120分钟（山西2025起听力不计入总分）",
  intro: "英语提分公式=词汇量×阅读量+写作模板。⚠️ 山西2025年起听力不计入总成绩，笔试部分题目分值扩大使满分150分（以省考试院当年说明为准）——笔试能力是全部。写作占40分（应用文15+续写25），是从『锦上添花』变成『生死线』的科目。",
  modules: [
    {
      t: "词汇与短语（3500 词打底）",
      points: [
        "课标 3500 词分层：高频 1500 词必须会拼写会用，其余认识即可",
        "熟词生义高频：address(处理/演讲)、book(预订)、charge(收费/指控/充电)、cover(报道/覆盖/足以支付)、mean(吝啬的)、spring(泉水/弹簧)",
        "一词多性：present n.礼物 adj.在场的 v.呈现；conduct n.行为 v.指挥/实施",
        "词根词缀速记：un-/dis-/re-/pre-；-tion/-ment/-ness；-able/-ive/-ous",
        "高频动词短语：put up with 忍受、come up with 想出、run out of 用完、look forward to 盼望（to 是介词！）"
      ],
      pitfalls: [
        "suggest doing / suggest that sb (should) do，不接 to do",
        "look forward to / be used to / stick to 中的 to 是介词，后接 doing",
        "advice 不可数、news 不可数、progress 不可数——别加 s"
      ],
      qa: [
        {
          q: "The doctor suggested that he ___ (quit) smoking at once. 填什么？为什么？",
          a: "填 (should) quit。suggest 表“建议”时宾语从句用虚拟语气 (should)+动词原形，should 可省。注意：suggest 表“暗示/表明”时不用虚拟（His accent suggests that he is from the south.）。",
          src: "虚拟语气+词汇辨析 · 高频考点"
        }
      ]
    },
    {
      t: "语法填空核心语法",
      points: [
        "时态语态：现在完成时（since/for/already）、过去完成时（过去的过去）、被动语态 be done",
        "非谓语动词：to do（目的/将来）、doing（主动/进行）、done（被动/完成）——语法填空半壁江山",
        "定语从句：that/which/who/whom/whose/when/where/why；介词+which；只用 that 的情况（先行词有不定代词/最高级/序数词/既有人又有物）",
        "名词性从句：what vs that（what 在从句中作成分，that 不作成分）",
        "状语从句：让步（although/though 不与 but 连用）、时间（when/while/as）、条件（unless=if not）",
        "虚拟语气：if 从句三种时态倒退；wish/would rather/as if 的虚拟"
      ],
      pitfalls: [
        "有逗号隔开的非限制性定从不能用 that",
        "it 作形式主语/形式宾语的句型：It is + adj + that / sb find it + adj + to do",
        "强调句 It is...that... 去掉后句子仍完整（判断方法）",
        "主谓一致：就近原则（there be, either...or）与就远原则（with, together with, as well as）"
      ],
      qa: [
        {
          q: "语法填空：___ (face) with difficulties, we should stay calm. 与 Faced with difficulties / Facing difficulties 哪个对？",
          a: "Faced 或 Facing 都对，但逻辑不同：be faced with 表状态用 Faced；face 作“面对”及物动词用 Facing（主动）。此处两解均常见，高考中更多考 Faced with（固定搭配）。",
          src: "非谓语动词 · 语法填空高频"
        }
      ]
    },
    {
      t: "阅读理解",
      points: [
        "先题后文定位：细节题划关键词回原文找同义替换",
        "主旨题看首末段+各段首句；标题题要能概括全篇（太大太小都不对）",
        "猜词题：看上下文逻辑（因果/转折/举例/同义反义）",
        "推理题：只能“推一步”，原文直接说的是干扰项",
        "作者态度词：positive/negative/neutral/objective/critical/approving/doubtful"
      ],
      pitfalls: [
        "选项中出现原文原词的往往是干扰项，同义改写才是答案",
        "绝对化词（never, all, completely）慎选",
        "推理题选“原文没有明说但必然成立”的，不选“可能是”的过度推断"
      ],
      qa: [
        {
          q: "原文：Unlike his brother, Tom rarely shares his feelings with others. 题目：What can we learn about Tom? A. He is outgoing. B. He keeps his feelings to himself. C. He dislikes his brother. 选哪个？",
          a: "选 B。rarely shares feelings = keeps feelings to himself（同义改写）。A 与原文相反；C 是无中生有——unlike 只是对比不同，没说讨厌。",
          src: "细节+推理 · 同义替换示范"
        }
      ]
    },
    {
      t: "七选五",
      points: [
        "看空格位置：段首（主题句/过渡句）、段中（承上启下）、段尾（总结/引出下文）",
        "三大线索：代词指代（this/these/it 必有所指）、逻辑连接词（however/besides/for example）、词汇复现（同词/同义/上下义）",
        "先易后难，选定即排除，最后通读检查连贯",
        "干扰项特征：内容相关但逻辑接不上、代词指代不明"
      ],
      pitfalls: [
        "代词线索最可靠：选项有 this method，前文必须出现过 method",
        "however 前后语义必须相反，instead 前后是替代关系",
        "做完把多余两项也读一遍，确认排除理由"
      ],
      qa: [
        {
          q: "空格前一句：Reading is a mental workout. 选项：A. It strengthens your brain just as exercise builds muscles. B. Many people dislike reading. 选哪个？用什么线索？",
          a: "选 A。线索：①It 指代 Reading（代词指代）；②mental workout 与 strengthens brain / builds muscles 是类比复现（词汇复现+逻辑顺承）。B 与上文无逻辑衔接。",
          src: "七选五 · 线索法示范"
        }
      ]
    },
    {
      t: "完形填空",
      points: [
        "第一遍通读抓主线：记叙文看情感变化曲线，夹叙夹议看道理升华",
        "四大线索：复现（原词/同义词）、逻辑（因果转折）、搭配（固定短语）、情感（褒贬一致）",
        "动词题看动作先后逻辑；形容词题看情感色彩；名词题看上下文复现",
        "答案往往在文章主题上有呼应——选不出时选最贴合主旨的"
      ],
      pitfalls: [
        "凭“语感”孤立看一句必错，完形是考语篇不是考单句",
        "开头的设空答案常在结尾有呼应",
        "一词多义题（如 still 仍然/静止的）要代入语境"
      ],
      qa: [
        {
          q: "（记叙文）作者讲自己失败的经历，结尾空格：That failure turned out to be a ___ in disguise. A. blessing B. burden C. mistake D. challenge",
          a: "选 A。a blessing in disguise 是固定表达“因祸得福/塞翁失马”，且与记叙文“失败带来成长”的情感升华主线一致。",
          src: "完形 · 固定搭配+主旨呼应"
        }
      ]
    },
    {
      t: "写作：应用文 + 读后续写",
      points: [
        "应用文（15分）：信件/通知/演讲稿/投稿。格式分+要点分+语言分",
        "万能开头：I'm writing to invite/inform/apologize... 结尾：I would appreciate it if you could... / Looking forward to your reply.",
        "升级句式：Not only...but also（倒装）、It is...that 强调句、with 复合结构、非限制性定从",
        "读后续写（25分）：两段式，第一段承接原文情节，第二段升华主题",
        "续写高分公式：动作链（did A, did B, and did C）+情绪描写（tears welling up）+环境烘托+主题金句收尾",
        "积累情绪词块：with a mixture of joy and relief / frozen with fear / warmth flooding through me"
      ],
      pitfalls: [
        "应用文审清：人称、时态、要点数，漏一个要点扣一档",
        "续写必须与原文人称、时态（一般过去时）一致，两段开头句已给必须衔接",
        "堆砌高级词汇但语法错误连篇反而降档：先求对再求美",
        "词数：应用文 80 左右、续写 150 左右，写超写少都扣分"
      ],
      qa: [
        {
          q: "写一句“当我看到成绩单时，我激动得说不出话来”的升级表达（用于续写）。",
          a: "The moment I caught sight of the report card, I was too thrilled to utter a word, with tears of joy welling up in my eyes.（the moment 引导时间状语+too...to 结构+with 复合结构，三个加分点一次到位）",
          src: "读后续写 · 句式升级示范"
        }
      ]
    },
    {
      t: "听力（山西不计入总分，仍建议练）",
      points: [
        "读题预测：放音前扫题干和选项，预判话题与设问（who/where/what time）",
        "数字题注意干扰：先出现的价格/时间常被否定，听转折后的",
        "转折词后是答案：but, however, actually, instead",
        "长对话记笔记：缩写记关键信息（时间、地点、态度）",
        "每天坚持 15 分钟泛听+精听：真题音频 1.2 倍速训练"
      ],
      pitfalls: [
        "听到的原词选项常是陷阱，同义改写才可能是答案",
        "最后 5 道独白题信息密集，宁可少写不能走神",
        "涂卡随听随涂，别指望最后统一涂",
        "山西政策：听力不计入总分但部分高校外语类专业参考听力成绩——别彻底放弃"
      ],
      qa: [
        {
          q: "听力原文：The flight was supposed to take off at 3:15, but it has been delayed for 40 minutes. 问题：When will the flight take off? A. 3:15 B. 3:40 C. 3:55",
          a: "选 C（3:55）。was supposed to 表示“原定”，but 后的 delay 40 minutes 才是有效信息：3:15+0:40=3:55。典型“时间干扰”题。",
          src: "听力数字题 · 干扰排除示范"
        }
      ]
    },
    {
      t: "长难句分析（阅读提分核心）",
      points: [
        "三步拆解：找谓语动词→找连接词（that/which/when/because）→确定主句主干",
        "后置修饰四大件：介词短语、定语从句、非谓语短语、同位语——统统括号括起来先看主干",
        "插入语（两个逗号之间）先跳过不读",
        "it 形式主语句：真正的主语在 that 从句或 to do 里",
        "倒装句识别：Not only/Never/Only+状语开头，助动词提到主语前"
      ],
      pitfalls: [
        "一个简单句只能有一个谓语动词，多出的动词必是非谓语或从句谓语",
        "that 引导定从（作成分）还是同位语从句（不作成分）看从句是否完整",
        "翻译时按中文语序重组，别顺着英文硬翻"
      ],
      qa: [
        {
          q: "分析：The study, which was published in a leading journal, suggests that children who read regularly perform better at school.",
          a: "主干：The study suggests that...（这项研究表明……）。which was published... 是非限制性定从修饰 study；宾语从句中 children who read regularly perform better，who 定从修饰 children。整句：这项发表在某权威期刊上的研究表明，经常阅读的孩子在校表现更好。",
          src: "长难句拆解 · 示范"
        }
      ]
    },
    {
      t: "应用文分类模板",
      points: [
        "邀请信：开头 I'm writing to invite you to...；中间活动时间地点内容；结尾 We would be honored by your presence.",
        "建议信：I'm sorry to hear that... Here are my suggestions: To begin with... Besides... I hope you'll find them helpful.",
        "申请/自荐：Learning that..., I'm writing to apply for... I'm qualified in that...",
        "感谢信：I'm writing to express my sincere gratitude for...",
        "通知 Notice：标题+正文（目的/时间地点/要求）+落款（落款单位+日期）",
        "演讲稿：Good morning, everyone. It's my honor to... That's all. Thank you."
      ],
      pitfalls: [
        "时态：邀请/通知用将来时，感谢/道歉用过去时",
        "要点必须全覆盖，阅卷按点给分",
        "落款 Yours sincerely/faithfully 与称呼搭配：Dear Sir→Yours faithfully；Dear Tom→Yours sincerely"
      ],
      qa: [
        {
          q: "写一句邀请外教参加学校艺术节的开头和结尾。",
          a: "开头：I'm writing to sincerely invite you to attend our school art festival, which will be held in the school hall this Friday afternoon. 结尾：We would be truly honored by your presence, and I'm convinced that you will have a great time. Looking forward to your reply.",
          src: "邀请信 · 首尾模板"
        }
      ]
    },
    {
      t: "读后续写素材库（情绪+动作+环境）",
      points: [
        "喜悦：Her eyes sparkled with joy. / A big smile spread across his face.",
        "紧张害怕：My heart was pounding wildly. / Frozen with fear, I couldn't move an inch.",
        "感动：Tears welling up in her eyes, she whispered, \"Thank you.\"",
        "后悔：A wave of regret washed over me. / How I wished I hadn't done that!",
        "动作链：He rushed to the door, pushed it open, and dashed into the rain.",
        "环境烘托：The sun dipped below the horizon, painting the sky orange.",
        "升华金句：It was at that moment that I truly understood the meaning of kindness."
      ],
      pitfalls: [
        "两段开头句已给出，第一句必须与其自然衔接",
        "全文保持过去时，直接引语用引号且注意现在时转换",
        "结尾要有情感升华，不能写完情节就停"
      ],
      qa: [
        {
          q: "原文结尾：男孩终于把捡到的钱包还给了失主。请续写第二段第一句（已给：The owner insisted on rewarding him with some money.）之后的内容思路。",
          a: "思路：男孩拒绝酬金（摇头+话语体现品格）→失主感动（hug/夸奖）→环境烘托（阳光/微笑）→升华句：It was at that moment that I realized honesty was the most valuable treasure. 动作+对话+环境+升华四件套齐全。",
          src: "续写 · 段落构思示范"
        }
      ]
    },
    {
      t: "词性转换清单（语法填空必考）",
      points: [
        "v.→n.：achieve→achievement、develop→development、choose→choice、succeed→success",
        "n.→adj.：care→careful、nature→natural、danger→dangerous、fame→famous",
        "adj.→adv.：fortunate→fortunately、actual→actually、extreme→extremely",
        "adj.→n.：important→importance、different→difference、confident→confidence",
        "v.→adj.：impress→impressive、attract→attractive、exhaust→exhausted/exhausting"
      ],
      pitfalls: [
        "-ed 修饰人（I am interested），-ing 修饰物（The book is interesting）",
        "名词前用形容词，动词/形容词/整句前用副词",
        "填空前先看空格缺什么成分：缺主语宾语用名词，缺表语定语用形容词"
      ],
      qa: [
        {
          q: "语法填空：The ___ (discover) of the new medicine saved thousands of lives, and the scientists were ___ (honor) by the government.",
          a: "第一空 discovery（冠词 the 后用名词，作主语）；第二空 honored/honoured（be honored by 被动，“受到表彰”）。",
          src: "词性转换+语态 · 综合填空"
        }
      ]
    },
    {
      t: "听力场景高频词汇",
      points: [
        "机场/车站：flight、delay、boarding pass、departure、platform、check in",
        "餐馆：menu、order、bill、tip、reserve a table、well-done",
        "医院：appointment、symptom、fever、prescription、take medicine",
        "购物：discount、on sale、refund、receipt、size",
        "学校：lecture、deadline、scholarship、registration、final exam",
        "天气：sunny spells、shower、clear up、breeze"
      ],
      pitfalls: [
        "数字听写：thirteen/thirty 重音区分，十几重音在后",
        "时间表达：a quarter past nine = 9:15，half past = 30 分",
        "场景题听“关键词”定位：听到 menu 就选 restaurant 相关"
      ],
      qa: [
        {
          q: "听力：W: Have you made a reservation? M: Yes, a table for two under the name of Li. 问：Where does the conversation probably take place?",
          a: "At a restaurant. 关键词：reservation、a table for two、under the name of——订座场景固定表达。",
          src: "听力场景判断 · 关键词法"
        }
      ]
    }
  ]
};
