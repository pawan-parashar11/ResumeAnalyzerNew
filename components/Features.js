function Features() {
  try {
    const features = [
      {
        icon: 'brain',
        title: 'AI-Powered Analysis',
        description: 'Advanced algorithms extract skills, experience, and qualifications from your resume'
      },
      {
        icon: 'target',
        title: 'Job Matching',
        description: 'Compare your resume against job descriptions and get compatibility scores'
      },
      {
        icon: 'sparkles',
        title: 'Smart Suggestions',
        description: 'Receive personalized recommendations to improve your resume'
      },
      {
        icon: 'search',
        title: 'Keyword Detection',
        description: 'Identify missing keywords that could boost your application'
      },
      {
        icon: 'award',
        title: 'Skill Extraction',
        description: 'Automatically detect and categorize your technical and soft skills'
      },
      {
        icon: 'chart-bar',
        title: 'Visual Reports',
        description: 'Get detailed insights with easy-to-understand visual analytics'
      }
    ];

    return (
      <section className="py-20 bg-white" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Powerful Features</h2>
            <p className="text-xl text-[var(--text-secondary)]">Everything you need to optimize your resume</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mb-4">
                  <div className={`icon-${feature.icon} text-xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                <p className="text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}