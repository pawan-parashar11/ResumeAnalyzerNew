function Alert({ type, message, onClose }) {
  try {
    const bgColor = type === 'error' ? 'bg-red-50' : 'bg-green-50';
    const textColor = type === 'error' ? 'text-red-800' : 'text-green-800';
    const iconName = type === 'error' ? 'alert-circle' : 'check-circle';

    return (
      <div className={`${bgColor} ${textColor} px-4 py-3 rounded-lg flex items-center justify-between mb-4 max-w-7xl mx-auto`} data-name="alert" data-file="components/Alert.js">
        <div className="flex items-center space-x-2">
          <div className={`icon-${iconName} text-lg`}></div>
          <span>{message}</span>
        </div>
        <button onClick={onClose} className="hover:opacity-70">
          <div className="icon-x text-lg"></div>
        </button>
      </div>
    );
  } catch (error) {
    console.error('Alert component error:', error);
    return null;
  }
}