function UploadSection({ onAnalyze, loading }) {
  try {
    const [resumeText, setResumeText] = React.useState('');
    const [jobDescription, setJobDescription] = React.useState('');

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => setResumeText(e.target.result);
        reader.readAsText(file);
      }
    };

    const handleSubmit = () => {
      if (resumeText && jobDescription) {
        onAnalyze(resumeText, jobDescription);
      }
    };

    return (
      <div className="card mb-8" data-name="upload-section" data-file="components/UploadSection.js">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Analyze Your Resume</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Upload Resume</label>
            <input type="file" accept=".txt,.pdf,.doc,.docx" onChange={handleFileUpload} className="w-full px-4 py-2 border border-[var(--border-color)] rounded-lg" />
            <p className="text-sm text-[var(--text-secondary)] mt-1">or paste your resume text below</p>
            <textarea value={resumeText} onChange={(e) => setResumeText(e.target.value)} placeholder="Paste your resume here..." className="w-full mt-2 px-4 py-3 border border-[var(--border-color)] rounded-lg h-40" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Job Description</label>
            <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Paste the job description here..." className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg h-40" />
          </div>
          <button onClick={handleSubmit} disabled={loading || !resumeText || !jobDescription} className="btn-primary w-full disabled:opacity-50">
            {loading ? 'Analyzing...' : 'Analyze Resume'}
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UploadSection component error:', error);
    return null;
  }
}