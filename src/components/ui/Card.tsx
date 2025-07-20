import React from 'react';
import classNames from 'classnames';

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'rounded-2xl shadow-md bg-gray-900 p-4 h-full',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={classNames('p-2', className)}>{children}</div>;
};
