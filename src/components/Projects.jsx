'use client';

import { useState } from 'react';

const ITEMS_PER_ROW = 3;
const INITIAL_ROWS = 2;

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'full-stack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const visibleProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, ITEMS_PER_ROW * INITIAL_ROWS);

  const hasMore = filteredProjects.length > ITEMS_PER_ROW * INITIAL_ROWS;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Projects
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            A selection of projects I've worked on
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-white rounded-xl shadow-sm border border-border">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === cat.key
                    ? 'bg-accent text-white shadow-md'
                    : 'text-text-secondary hover:text-accent hover:bg-accent-light'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-6 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-text-primary">
                  {project.title}
                </h3>
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${
                  project.category === 'full-stack' 
                    ? 'bg-purple-100 text-purple-600' 
                    : 'bg-accent-light text-accent'
                }`}>
                  {project.category === 'full-stack' ? 'Full Stack' : 'Frontend'}
                </span>
              </div>
              
              <p className="text-text-secondary mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-bg-secondary text-text-secondary text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-text-muted py-12">No projects found in this category.</p>
        )}

        {/* Load More / Show Less Button */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-border text-text-primary font-medium rounded-xl hover:border-accent hover:text-accent transition-all"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
                  </svg>
                </>
              ) : (
                <>
                  Load More ({filteredProjects.length - visibleProjects.length} more)
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
