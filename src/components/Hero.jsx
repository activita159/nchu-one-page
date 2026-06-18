import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section id="top" className="pop-grid relative overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase text-pop-blue shadow-sm">
            Minimal Pop Identity
          </p>
          <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
            打造簡潔而有記憶點的數位形象
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-black/64 sm:text-xl">
            用極簡設計與流行視覺，呈現你的品牌個性，讓第一次看見的人也能立刻記住你。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-pop-pink px-7 py-4 text-base font-black text-white shadow-pop transition hover:-translate-y-1 hover:bg-pop-blue"
            >
              開始了解
              <ArrowRight size={19} />
            </a>
            <a
              href="#works"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 text-base font-black text-pop-ink transition hover:-translate-y-1 hover:border-pop-lime hover:bg-pop-lime"
            >
              查看亮點
              <ArrowDown size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
          aria-hidden="true"
        >
          <div className="absolute inset-4 rotate-6 rounded-[2rem] bg-pop-lime" />
          <div className="absolute inset-0 rounded-[2rem] border-2 border-black bg-white shadow-pop" />
          <div className="absolute left-7 top-7 h-20 w-20 rounded-full bg-pop-pink" />
          <div className="absolute right-8 top-10 h-24 w-24 rounded-[1.4rem] bg-pop-blue" />
          <div className="absolute bottom-9 left-9 h-28 w-28 rounded-[1.6rem] bg-pop-orange" />
          <div className="absolute bottom-10 right-8 grid h-44 w-44 place-items-center rounded-full border-2 border-black bg-white text-center text-5xl font-black leading-none">
            POP
          </div>
          <div className="absolute left-1/2 top-1/2 h-28 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-full bg-pop-ink px-8 py-7 text-center text-3xl font-black text-white">
            FRAME
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
