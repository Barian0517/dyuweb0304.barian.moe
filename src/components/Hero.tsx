import { motion } from 'motion/react';
import { Scroll } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row border-b border-[#2c1e14] min-h-[60vh]">
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-end bg-[#fdfcf0]">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="mb-6 opacity-80">
            <Scroll className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            十二國記
          </h1>
          <p className="text-2xl max-w-md leading-relaxed italic opacity-80 mb-6">
            「王與麒麟的交響曲」
          </p>
          <p className="text-sm leading-loose max-w-xl opacity-90 font-medium">
            由小野不由美創作的史詩級奇幻巨作。建構於一個由「天法」規定的異世界，
            講述十二個國家中，神獸麒麟尋找並輔佐王，共同譜寫出治理國家的波瀾壯闊物語。
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/3 bg-[#2c1e14] text-[#fdfcf0] p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#2c1e14]">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] block mb-4 opacity-60">Introduction</span>
          <p className="text-sm leading-loose opacity-90">一個由十二位神獸「麒麟」依天意選出君王治理的世界。這是一個關於責任、王道與自我成長的龐大史詩。</p>
        </div>
        <div className="flex justify-between items-end mt-12 md:mt-0">
          <span className="text-4xl font-bold italic opacity-90">01</span>
          <div className="w-12 h-12 rounded-full border border-[#fdfcf0] flex items-center justify-center opacity-80">
            <div className="w-1 h-1 bg-[#fdfcf0] rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
