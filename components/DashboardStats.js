function DashboardStats({ analyses }) {
  try {
    const totalAnalyses = analyses.length;
    const avgScore = totalAnalyses > 0 
      ? Math.round(analyses.reduce((sum, a) => sum + a.objectData.compatibilityScore, 0) / totalAnalyses)
      : 0;
    const highestScore = totalAnalyses > 0
      ? Math.max(...analyses.map(a => a.objectData.compatibilityScore))
      : 0;

    const stats = [
      { label: 'Total Analyses', value: totalAnalyses, icon: 'file-text', color: 'blue' },
      { label: 'Average Score', value: `${avgScore}%`, icon: 'trending-up', color: 'green' },
      { label: 'Highest Score', value: `${highestScore}%`, icon: 'award', color: 'purple' }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-name="dashboard-stats" data-file="components/DashboardStats.js">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[var(--text-secondary)] mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-[var(--text-primary)]">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                <div className={`icon-${stat.icon} text-xl text-[var(--primary-color)]`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('DashboardStats component error:', error);
    return null;
  }
}