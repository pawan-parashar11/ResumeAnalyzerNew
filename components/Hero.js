function Hero() {
  try {
    return (
      <section className="py-20 bg-gradient-to-br from-[var(--secondary-color)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-[var(--text-primary)] mb-6">
              Optimize Your Resume with AI
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Get instant AI-powered analysis, compatibility scores, and personalized suggestions to land your dream job
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="analyzer.html" className="btn-primary">Analyze Resume</a>
              <a href="dashboard.html" className="btn-secondary">View Dashboard</a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">AI-Powered</div>
              <div className="text-[var(--text-secondary)]">Advanced NLP Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">Instant</div>
              <div className="text-[var(--text-secondary)]">Real-time Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">Smart</div>
              <div className="text-[var(--text-secondary)]">Actionable Insights</div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}