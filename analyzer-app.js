class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AnalyzerApp() {
  try {
    const [analysisResult, setAnalysisResult] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [alert, setAlert] = React.useState(null);

    const handleAnalyze = async (resumeText, jobDescription) => {
      setLoading(true);
      setAlert(null);
      try {
        const result = await analyzeResume(resumeText, jobDescription);
        setAnalysisResult(result);
        await trickleCreateObject('resume_analysis', result);
      } catch (error) {
        setAlert({ type: 'error', message: 'Failed to analyze resume. Please try again.' });
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen" data-name="analyzer-app" data-file="analyzer-app.js">
        <Header />
        {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <UploadSection onAnalyze={handleAnalyze} loading={loading} />
          {analysisResult && <AnalysisResult result={analysisResult} />}
        </div>
      </div>
    );
  } catch (error) {
    console.error('AnalyzerApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><AnalyzerApp /></ErrorBoundary>);