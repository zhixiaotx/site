import React, { useState } from 'react';
import { Mail, Github, MessageSquare, Send, CheckCircle2, Sparkles, MapPin, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const socials = [
    {
      name: 'GitHub',
      handle: '@skylay',
      desc: '开源项目与代码仓库',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/zhixiaotx/',
      color: 'from-neutral-800 to-neutral-900',
    },
    {
      name: '小红书 (Xiaohongshu)',
      handle: 'Sky的AI日记',
      desc: '分享独立开发与AI实战',
      icon: <Sparkles className="w-5 h-5" />,
      url: 'https://xiaohongshu.com',
      color: 'from-rose-500 to-red-600',
    },
    {
      name: '电子邮箱 (Email)',
      handle: 'skylay199610@gmail.com',
      desc: '商务合作与技术交流',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:skylay199610@gmail.com',
      color: 'from-indigo-600 to-violet-600',
    },
  ];

  return (
    <section id="contact" className={`py-20 md:py-32 border-t ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-amber-500/10 text-amber-600 dark:text-amber-400">
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            与我取得联系
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            无论你是想探讨 AI 应用、寻求项目合作，还是交流独立开发心得，欢迎随时给我留言。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className={`p-8 rounded-3xl border shadow-sm mb-6 ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200/80'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                社交触点
              </h3>
              <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                你可以通过以下平台找到我，随时交流最新技术趋势。
              </p>

              <div className="space-y-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all group ${
                      darkMode
                        ? 'bg-neutral-800/60 border-neutral-700/80 hover:bg-neutral-800 hover:border-neutral-600 text-white'
                        : 'bg-neutral-50 border-neutral-200/80 hover:bg-neutral-100 hover:border-neutral-300 text-neutral-900 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${social.color} flex items-center justify-center text-white shadow-md`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm group-hover:text-indigo-500 transition-colors">
                          {social.name}
                        </div>
                        <div className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {social.desc}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-500">访问 &rarr;</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>坐标：中国 · 随时准备拥抱数字游民与远程协作</span>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-sm ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200/80'
            }`}>
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    留言发送成功！
                  </h3>
                  <p className={`text-sm max-w-md mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    谢谢你的来信！我已收到你的消息，会尽快通过邮件与你取得联系。
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-medium bg-neutral-900 text-white dark:bg-neutral-800 hover:bg-neutral-800 transition-colors"
                  >
                    发送新消息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    发送在线留言
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-700'
                      }`}>
                        你的称呼 / 姓名 *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="例如：Alex"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          darkMode
                            ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-700'
                      }`}>
                        电子邮箱 *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          darkMode
                            ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                      留言内容 *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="写下你想和我交流的话题、合作意向或项目咨询..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode
                          ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>发送留言</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
