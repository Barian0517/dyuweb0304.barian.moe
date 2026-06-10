import { motion } from 'motion/react';

type Kingdom = {
  name: string;
  pinyin: string;
  ruler: string;
  kirin: string;
  desc: string;
};

const kingdoms: Kingdom[] = [
  { name: "慶", pinyin: "Kei", ruler: "景王 陽子", kirin: "景麒", desc: "位於東方的國家。曾因女王的暴政與偽王的篡位而荒廢，現由出身海客的赤子統治。" },
  { name: "雁", pinyin: "En", ruler: "延王 尚隆", kirin: "延麒 六太", desc: "位於東北的強國。王與麒麟皆為海客，治世長達五百年以上，國力強盛、商業繁榮。" },
  { name: "巧", pinyin: "Kou", ruler: "塙王 (從缺)", kirin: "塙麟 (已故)", desc: "位於東南的國家。前任塙王因嫉妒慶國的新王而引發動亂，最終失道而死，目前處於無王狀態。" },
  { name: "戴", pinyin: "Tai", ruler: "泰王 驍宗", kirin: "泰麒 蒿里", desc: "位於東北極寒之地的國家。泰麒曾流落蓬萊，歸來後選出驍宗為王，卻不幸遭遇叛亂。" },
  { name: "芳", pinyin: "Hou", ruler: "峯王 (從缺)", kirin: "峯麟 (已故)", desc: "位於西北的國家。前代峯王因過度嚴苛的刑法導致民不聊生，最終被諸侯起義推翻。" },
  { name: "奏", pinyin: "Sou", ruler: "宗王 櫨先新", kirin: "宗麟 昭彰", desc: "位於南方的國家。治世長達六百年，為十二國中治世最長的國家，由王及其家人共同治理。" },
  { name: "柳", pinyin: "Ryuu", ruler: "劉王", kirin: "劉麒", desc: "位於北方的國家。曾以嚴格的法治聞名，治世達一百二十年，但近年國政出現衰退跡象。" },
  { name: "才", pinyin: "Sai", ruler: "采王 慎思", kirin: "采麟 搖籃", desc: "位於西南的國家。現任王曾是芳國的公主，因緣際會下成為才國的統治者，致力於仁政。" },
  { name: "舜", pinyin: "Shun", ruler: "徇王", kirin: "徇麒", desc: "位於東南的國家。以盛產藥草與寶石聞名，關於其內政的詳細描述較少。" },
  { name: "楚", pinyin: "So", ruler: "楚王", kirin: "楚麒", desc: "位於西南的國家。雖然少有在故事中被詳細提及，但也是維持十二國平衡的一部分。" },
  { name: "漣", pinyin: "Ren", ruler: "廉王 鴨世卓", kirin: "廉麟 逢山", desc: "位於南方的國家。王性格豁達，國家體制相對寬鬆，國民生活富足、安居樂業。" },
  { name: "範", pinyin: "Han", ruler: "氾王 吳藍滌", kirin: "氾麟 梨雪", desc: "位於西方的國家。以精緻的工藝品與藝術聞名天下，治世達三百年以上。" }
];

export function KingdomsGrid() {
  return (
    <section className="flex flex-col mb-12">
      <div className="p-8 md:p-12 border-b border-[#2c1e14] flex flex-col items-start">
        <span className="text-[10px] uppercase tracking-widest opacity-60 mb-2">The Twelve States</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-widest text-[#2c1e14]">
          十二國列傳
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l-0 border-[#2c1e14]">
        {kingdoms.map((k, idx) => (
           <motion.div
            key={k.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 4) * 0.05 }}
            className="group relative p-8 md:p-10 bg-[#fdfcf0] border-b sm:border-r border-[#2c1e14] hover:bg-[#e6e2d1] hover:text-[#b34d3d] transition-colors duration-300 flex flex-col overflow-hidden"
           >
             <span className="text-[10px] uppercase tracking-widest mb-6 opacity-60 text-[#2c1e14]">State {(idx + 1).toString().padStart(2, '0')}</span>
             
             <div className="flex items-baseline justify-between mb-4">
                 <h3 className="text-3xl font-bold">{k.name}</h3>
             </div>
             
             <div className="mb-6 text-sm font-medium text-[#2c1e14]">
               <div className="flex justify-between py-1 border-b border-[#2c1e14] border-dashed">
                 <span className="opacity-70">國君</span>
                 <span className="italic">{k.ruler}</span>
               </div>
               <div className="flex justify-between py-1 border-b border-[#2c1e14] border-dashed">
                 <span className="opacity-70">台輔</span>
                 <span className="italic">{k.kirin}</span>
               </div>
             </div>
             
             <p className="text-sm leading-relaxed opacity-90 mb-8 text-[#2c1e14]">
               {k.desc}
             </p>

             <div className="mt-auto text-[64px] font-bold opacity-10 absolute bottom-[-10px] right-4 pointer-events-none text-[#2c1e14]">
               {k.pinyin}
             </div>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
