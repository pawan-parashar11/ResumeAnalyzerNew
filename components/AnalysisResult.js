function AnalysisResult({ result }) {
  try {
    return (
      <div className="space-y-6" data-name="analysis-result" data-file="components/AnalysisResult.js">
        <div className="card">
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Compatibility Score</h3>
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--primary-color)" strokeWidth="8" strokeDasharray={`${result.compatibilityScore * 2.51} 251`} strokeLinecap="round" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-[var(--primary-color)]">{result.compatibilityScore}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Extracted Skills</h3>
          <div className="flex flex-wrap gap-2">
            {result.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-full text-sm font-medium">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Missing Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {result.missingKeywords.map((keyword, index) => (
              <span key={index} className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">{keyword}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Improvement Suggestions</h3>
          <ul className="space-y-2">
            {result.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="icon-check-circle text-lg text-[var(--accent-color)] mt-0.5"></div>
                <span className="text-[var(--text-secondary)]">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AnalysisResult component error:', error);
    return null;
  }
}