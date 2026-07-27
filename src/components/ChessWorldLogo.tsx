import React from 'react';

interface ChessWorldLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
}

export const ChessWorldLogo: React.FC<ChessWorldLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-10 md:w-16 md:h-16',
    lg: 'w-16 h-16 md:w-20 md:h-20',
    xl: 'w-24 h-24 md:w-32 md:h-32',
    custom: '',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Chess World Crest Logo"
        className={`object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)] ${
          size !== 'custom' ? sizeClasses[size] : ''
        }`}
      />
      {showText && (
        <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-white">
          CHESS WORLD
        </span>
      )}
    </div>
  );
};
