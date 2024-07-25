// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // 模拟从服务器获取用户认证状态
    const token = localStorage.getItem('auth_token');
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};

export default useAuth;
