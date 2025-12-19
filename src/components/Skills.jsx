export default function Skills({ skills, tools }) {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Skills & Tools
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="animate-fade-in-up delay-100">
            <div className="bg-bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                Technical Skills
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-text-secondary mb-3">Primary</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.primary.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag px-4 py-2 bg-white text-text-primary text-sm font-medium rounded-xl border border-border cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-secondary mb-3">Secondary</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.secondary.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag px-4 py-2 bg-white text-text-secondary text-sm font-medium rounded-xl border border-border cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="animate-fade-in-up delay-200">
            <div className="bg-bg-secondary rounded-2xl p-6">
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                Tools & Software
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-text-secondary mb-3">Primary</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.primary.map((tool, index) => (
                      <span
                        key={index}
                        className="skill-tag px-4 py-2 bg-white text-text-primary text-sm font-medium rounded-xl border border-border cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-secondary mb-3">Secondary</p>
                  <div className="flex flex-wrap gap-2">
                    {tools.secondary.map((tool, index) => (
                      <span
                        key={index}
                        className="skill-tag px-4 py-2 bg-white text-text-secondary text-sm font-medium rounded-xl border border-border cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

