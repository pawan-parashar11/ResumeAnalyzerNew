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

function DashboardApp() {
  try {
    const [analyses, setAnalyses] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadAnalyses();
    }, []);

    const loadAnalyses = async () => {
      try {
        const result = await trickleListObjects('resume_analysis', 50, true);
        setAnalyses(result.items);
      } catch (error) {
        console.error('Failed to load analyses:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen" data-name="dashboard-app" data-file="dashboard-app.js">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-8">Dashboard</h1>
          {loading ? (
            <div className="text-center py-12">
              <div className="text-[var(--text-secondary)]">Loading...</div>
            </div>
          ) : (
            <>
              <DashboardStats analyses={analyses} />
              <AnalysisHistory analyses={analyses} />
            </>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><DashboardApp /></ErrorBoundary>);