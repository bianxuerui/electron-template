import { useNavigate } from 'react-router-dom';

const useNavigationService = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string, options?: { replace?: boolean, state?: any }) => {
    // 可以在此添加全局导航前的处理逻辑，例如日志记录
    navigate(path, options);
  };

  const navigateWithAuth = (path: string, isAuthenticated: boolean, options?: { replace?: boolean, state?: any }) => {
    if (isAuthenticated) {
      navigate(path, options);
    } else {
      navigate('/login', { replace: true });
    }
  };

  const navigateWithConfirmation = (path: string, message: string, options?: { replace?: boolean, state?: any }) => {
    if (window.confirm(message)) {
      navigate(path, options);
    }
  };

  return {
    navigateTo,
    navigateWithAuth,
    navigateWithConfirmation,
  };
};

export default useNavigationService;
