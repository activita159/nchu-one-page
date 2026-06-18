import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    title: 'Creator Kit',
    type: '個人品牌系統',
    color: 'bg-pop-lime',
    text: '用一套可延展的視覺語言，讓作品集、社群與名片保持一致。',
  },
  {
    title: 'Studio Pulse',
    type: '工作室網站',
    color: 'bg-pop-pink text-white',
    text: '將服務、案例與詢問入口壓縮成高轉換的一頁式體驗。',
  },
  {
    title: 'Pop Launch',
    type: '新品形象頁',
    color: 'bg-pop-blue text-white',
    text: '以鮮明色塊與短句節奏，快速建立新品上市的視覺記憶。',
  },
  {
    title: 'Social Blocks',
    type: '內容版型',
    color: 'bg-pop-orange text-white',
    text: '規劃可重複使用的貼文模組，讓社群更新更有效率。',
  },
];

function Works() {
  return (
    <section id="works" className="bg-white py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-pop-orange">Works</p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">精選亮點，保留剛好的驚喜。</h2>
          </div>
          <a
            href="#contact"
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-[#fbfbf8] px-5 py-3 font-black transition hover:-translate-y-1 hover:bg-pop-lime"
          >
            合作詢問
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {works.map((work) => (
            <article
              key={work.title}
              className="group grid min-h-72 overflow-hidden rounded-2xl border border-black/10 bg-[#fbfbf8] transition hover:-translate-y-1 hover:shadow-pop sm:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={`flex items-end p-6 ${work.color}`}>
                <p className="text-4xl font-black leading-none">{work.title}</p>
              </div>
              <div className="flex flex-col justify-between p-6">
                <p className="w-fit rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-black/60 shadow-sm">
                  {work.type}
                </p>
                <p className="mt-8 text-lg font-bold leading-8 text-black/70">{work.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
