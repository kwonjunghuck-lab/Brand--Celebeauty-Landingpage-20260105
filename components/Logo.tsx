import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'default' }) => {
  // If variant is white, we might want to apply a filter or use a different logo version if available.
  // For now, we'll use the default logo.svg which has a purple fill.
  // To make it white, we can use CSS filter brightness.
  const filterStyle = variant === 'white' ? { filter: 'brightness(0) invert(1)' } : {};

  return (
    <img 
      src="/logo.svg" 
      alt="CelebLife" 
      className={`h-9 md:h-10 w-auto ${className} select-none`} 
      style={filterStyle}
    />
  );
};

export default Logo;
