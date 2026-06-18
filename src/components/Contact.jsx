import { Instagram, Mail, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="rounded-[2rem] border-2 border-black bg-pop-ink p-8 text-white shadow-[10px_10px_0_#b7ff3c] sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-pop-lime">Contact</p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">準備讓品牌更被記住了嗎？</h2>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/68">
                歡迎帶著你的品牌想法、作品集需求或網站草稿來聊聊，我們會一起把訊息變得更清楚、更好看。
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:hello@popframe.studio"
                className="focus-ring inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 font-black text-pop-ink transition hover:-translate-y-1 hover:bg-pop-lime"
              >
                <Mail size={21} />
                hello@popframe.studio
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-3 rounded-2xl border border-white/18 px-5 py-4 font-black text-white transition hover:-translate-y-1 hover:border-pop-pink hover:bg-pop-pink"
              >
                <Instagram size={21} />
                @popframe.studio
              </a>
              <a
                href="mailto:hello@popframe.studio?subject=合作詢問"
                className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-pop-pink px-7 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-pop-blue"
              >
                立即開始合作
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
