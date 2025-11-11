function Header() {
  try {
    return (
      <header className="bg-white border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-file-text text-lg text-white"></div>
              </div>
              <span className="text-xl font-bold text-[var(--text-primary)]">Resume Analyzer</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="index.html" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium">Home</a>
              <a href="analyzer.html" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Analyze</a>
              <a href="dashboard.html" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">Dashboard</a>
            </nav>
            <a href="analyzer.html" className="btn-primary">Get Started</a>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}