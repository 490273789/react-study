import { ComponentPropsWithRef } from 'react';
import { IconType } from 'react-icons';

type Props = {
  variant?: 'text' | 'default' | 'outline';
  icon?: IconType;
} & ComponentPropsWithRef<'button'>;

export default function Button({
  variant = 'default',
  className = '',
  icon: Icon,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`inline-flex px-2 py-1.5 items-center min-w-[38px] min-h-[38px] ${
        variant === 'default'
          ? 'border border-[#6699ff] rounded transition-all duration-200 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat hover:text-gray-100 hover:bg-gradient-to-r from-[#6699ff] to-[#19bbcc] active:from-[#19bbcc] active:to-[#6699ff]'
          : variant === 'outline'
            ? 'hover:text-white underline'
            : 'hover:text-white'
      } ${className}`}
      {...props}
    >
      {Icon && <Icon className={`text-lg ${children ? 'mr-1' : ''}`} />}
      {children}
    </button>
  );
}