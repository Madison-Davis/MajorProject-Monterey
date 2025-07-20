import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'ghost' | 'secondary';
  className?: string;
};

const baseStyles = 'px-4 py-2 rounded-xl text-sm font-medium transition';

const variants = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  ghost: 'bg-transparent text-gray-300 hover:bg-gray-700',
  secondary: 'bg-gray-700 text-white hover:bg-gray-600',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};
