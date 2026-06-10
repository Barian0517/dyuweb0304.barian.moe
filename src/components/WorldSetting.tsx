import { motion } from 'motion/react';

const settings = [
  {
    title: "麒麟與王",
    desc: "十二個國家各有一隻專屬的神獸「麒麟」，負責依照天意選出國王。麒麟是國家的宰輔，王若行仁政則國泰民安；若行暴政或失道，麒麟會染上「失道」之病而死，王也會隨之殞命。"
  },
  {
    title: "生命之源",
    desc: "在這個世界裡，無論是人類、動物還是植物，都不是由母體孕育，而是由特定的神木（如里木、野木）結出「卵果」孵化而來。即使是王與麒麟，亦是誕生自捨身木之上。"
  },
  {
    title: "海客與山客",
    desc: "在十二國世界之外，存在著被稱為「崑崙」與「蓬萊」的地方（即中國與日本）。當發生名為「蝕」的嚴重自然災害時，空間會產生扭曲，偶爾會將我們世界的人捲入其中。來自日本的稱為「海客」，來自中國的稱為「山客」。"
  },
  {
    title: "神仙與妖魔",
    desc: "這是一個神仙與妖魔並存的世界。仙人居住在名山之中，擁有長生不老的壽命；而荒野與虛海之中則潛伏著危險的妖魔，時常威脅著普通百姓的生命。"
  }
];

export function WorldSetting() {
  return (
    <section className="flex flex-col border-b border-[#2c1e14]">
      <div className="p-8 md:p-12 border-b border-[#2c1e14] bg-[#e6e2d1] opacity-90 flex flex-col items-start mix-blend-multiply">
        <span className="text-[10px] uppercase tracking-widest opacity-60 mb-2">The World Settings</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-widest text-[#2c1e14]">
          世界觀設定
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-flow-row">
        {settings.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`p-8 md:p-10 flex flex-col border-[#2c1e14] ${
              index !== settings.length - 1 ? 'border-b xl:border-b-0 xl:border-r' : ''
            }`}
          >
            <span className="text-[10px] uppercase tracking-widest mb-6 opacity-60">Concept {(index + 1).toString().padStart(2, '0')}</span>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-sm leading-relaxed mb-8 opacity-80">
              {item.desc}
            </p>
            <div className="mt-auto flex gap-2">
              <div className="w-4 h-4 rounded-full bg-[#d4a017]"></div>
              <div className="w-4 h-4 rounded-full border border-[#2c1e14]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
