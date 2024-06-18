import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={handleToggle}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;