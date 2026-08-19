import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/mockData';
import { Mail, Send, CheckCircle2, Github, Twitter, Linkedin, Copy, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50/50 dark:bg-neutral-900/40 border-t border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase block mb-2">联系与合作</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              让我们一起打造卓越的项目。
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-8">
              无论您是有项目咨询、技术顾问需求，还是想探讨 AI 与软件设计，随时与我取得联系。
            </p>

            <div className="space-y-4 mb-8">
              {/* Email card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block font-medium">电子邮箱</span>
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '已复制' : '复制'}</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-3">社交主页</span>
              <div className="flex items-center gap-3">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium hover:bg-neutral-50 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium hover:bg-neutral-50 transition-colors">
                  <Twitter className="w-4 h-4" />
                  <span>Twitter / X</span>
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium hover:bg-neutral-50 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-6 md:p-8 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">消息已发送！</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto mb-6">
                    感谢您的留言，{formData.name}。Sky 会在 24 小时内通过邮件回复您。
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-medium"
                  >
                    发送其他消息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>发送直接留言</span>
                  </h3>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">您的姓名</label>
                    <input
                      type="text"
                      required
                      placeholder="例如：张三"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">电子邮箱</label>
                    <input
                      type="email"
                      required
                      placeholder="例如：zhangsan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">留言内容</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="请详细描述您的项目需求或合作意向..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium text-sm hover:opacity-95 transition-opacity shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>发送留言</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
