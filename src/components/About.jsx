import { motion } from 'framer-motion';
import { BadgeCheck, PencilRuler, UsersRound } from 'lucide-react';

const points = [
  { icon: BadgeCheck, title: '品牌清楚', text: '整理核心訊息，讓你的定位與風格一眼被理解。' },
  { icon: PencilRuler, title: '視覺精準', text: '用亮色、節奏與排版建立年輕俐落的品牌印象。' },
  { icon: UsersRound, title: '對象明確', text: '適合個人品牌、創作者、工作室與小型品牌。' },
];

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase text-pop-pink">About</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">把品牌說得更少，卻更有力。</h2>
        </div>
        <p className="text-lg font-medium leading-8 text-black/64">
          POPFRAME 是為創作者與小型品牌打造的形象展示提案。透過簡潔內容、鮮明重點色與高辨識版面，
          讓服務價值、作品亮點與聯絡入口都維持清楚、輕盈、好瀏覽。
        </p>
      </div>

      <div className="section-shell mt-12 grid gap-4 md:grid-cols-3">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-black/10 bg-[#fbfbf8] p-6 transition hover:-translate-y-1 hover:shadow-pop"
            >
              <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pop-lime">
                <Icon size={22} />
              </span>
              <h3 className="text-xl font-black">{point.title}</h3>
              <p className="mt-3 font-medium leading-7 text-black/60">{point.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default About;
