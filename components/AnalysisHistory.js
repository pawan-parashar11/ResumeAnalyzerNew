function AnalysisHistory({ analyses }) {
  try {
    if (analyses.length === 0) {
      return (
        <div className="card text-center py-12" data-name="analysis-history" data-file="components/AnalysisHistory.js">
          <div className="icon-inbox text-4xl text-[var(--text-secondary)] mb-4"></div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No analyses yet</h3>
          <p className="text-[var(--text-secondary)] mb-6">Start by analyzing your first resume</p>
          <a href="analyzer.html" className="inline-block px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:opacity-90">
            Analyze Resume
          </a>
        </div>
      );
    }

    return (
      <div className="card" data-name="analysis-history" data-file="components/AnalysisHistory.js">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Analysis History</h2>
        <div className="space-y-4">
          {analyses.map((analysis) => (
            <div key={analysis.objectId} className="border border-[var(--border-color)] rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    analysis.objectData.compatibilityScore >= 70 ? 'bg-green-100' : 
                    analysis.objectData.compatibilityScore >= 50 ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                    <span className={`text-lg font-bold ${
                      analysis.objectData.compatibilityScore >= 70 ? 'text-green-600' : 
                      analysis.objectData.compatibilityScore >= 50 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {analysis.objectData.compatibilityScore}%
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {new Date(analysis.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Skills Found</p>
                  <div className="flex flex-wrap gap-1">
                    {analysis.objectData.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-[var(--secondary-color)] text-[var(--primary-color)] rounded">
                        {skill}
                      </span>
                    ))}
                    {analysis.objectData.skills.length > 3 && (
                      <span className="text-xs px-2 py-1 text-[var(--text-secondary)]">
                        +{analysis.objectData.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)] mb-1">Missing Keywords</p>
                  <p className="text-sm text-[var(--text-primary)]">
                    {analysis.objectData.missingKeywords.length} keywords to improve
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('AnalysisHistory component error:', error);
    return null;
  }
}