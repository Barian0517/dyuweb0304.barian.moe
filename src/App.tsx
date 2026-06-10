import { Hero } from './components/Hero';
import { WorldSetting } from './components/WorldSetting';
import { KingdomsGrid } from './components/KingdomsGrid';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-serif bg-[#fdfcf0] text-[#2c1e14] selection:bg-[#b34d3d]/20 selection:text-[#b34d3d] md:p-8">
      <div className="border-[8px] md:border-[16px] border-[#2c1e14] flex flex-col md:flex-row min-h-[calc(100vh-4rem)] bg-[#fdfcf0]">
        <aside className="hidden md:flex w-24 border-r border-[#2c1e14] flex-col items-center py-10 gap-8 shrink-0">
          <div className="text-3xl font-black tracking-widest [writing-mode:vertical-rl] mt-4">十二國記</div>
          <div className="h-32 w-px bg-[#2c1e14] opacity-30"></div>
          <div className="text-xs uppercase tracking-widest [writing-mode:vertical-rl] opacity-60">The Twelve Kingdoms</div>
        </aside>

        <main className="flex-1 flex flex-col relative overflow-hidden">
          <Hero />
          <WorldSetting />
          <KingdomsGrid />
          <Footer />
        </main>
      </div>
    </div>
  );
}
