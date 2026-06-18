import { motion } from 'framer-motion';
import { Brush, Globe2, MessageSquareText } from 'lucide-react';

const services = [
  {
    icon: Brush,
    title: '品牌形象設計',
    text: '建立標誌延伸、色彩語彙、字體階層與基本識別規範。',
    accent: 'bg-pop-pink',
  },
  {
    icon: Globe2,
    title: '網站視覺設計',
    text: '規劃一頁式網站、作品展示與可部署的前端介面。',
    accent: 'bg-pop-blue',
  },
  {
    icon: MessageSquareText,
    title: '社群內容規劃',
    text: '設計貼文版型、短文案節奏與品牌內容的視覺一致性。',
    accent: 'bg-pop-orange',
  },
];

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase text-pop-blue">Services</p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">從形象到曝光，一次整理到位。</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border-2 border-black bg-white p-7 shadow-[8px_8px_0_#141414] transition duration-300 hover:-translate-y-2 hover:shadow-[14px_14px_0_#141414]"
              >
                <div className={`mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white ${service.accent}`}>
                  <Icon size={25} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 text-base font-medium leading-7 text-black/62">{service.text}</p>
                <div className="mt-8 h-2 rounded-full bg-black/10">
                  <div className={`h-full w-2/3 rounded-full ${service.accent} transition group-hover:w-full`} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
