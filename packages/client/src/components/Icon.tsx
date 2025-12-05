import Utils from '../utils';
import { useTheme } from '../contexts/ThemeProvider';
import { THEME } from '@excalidraw/excalidraw';

type AvailableIcons = 'trash' | 'close' | 'plus' | 'home';

interface IconComponentProps {
  className?: string;
}

const Trash = ({ className }: IconComponentProps) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 2)"
      >
        <path d="m2.5 2.5h10v12c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2zm5-2c1.0543618 0 1.91816512.81587779 1.99451426 1.85073766l.00548574.14926234h-4c0-1.1045695.8954305-2 2-2z" />
        <path d="m.5 2.5h14" />
        <path d="m5.5 5.5v8" />
        <path d="m9.5 5.5v8" />
      </g>
    </svg>
  );
};

const Close = ({ className }: IconComponentProps) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 7.5 6 6" />
        <path d="m13.5 7.5-6 6" />
      </g>
    </svg>
  );
};

const Plus = ({ className }: IconComponentProps) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5.5 10.5h10" />
        <path d="m10.5 5.5v10" />
      </g>
    </svg>
  );
};

const Home = ({ className }: IconComponentProps) => {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
        fill="#030708"
      />
    </svg>
  );
};

interface IconProps {
  name: AvailableIcons;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const { theme } = useTheme();

  const iconClassName = `${className || ''} ${
    theme === THEME.LIGHT ? 'text-gray-800' : 'text-gray-200'
  }`;

  switch (name) {
    case 'trash':
      return <Trash className={iconClassName} />;
    case 'close':
      return <Close className={iconClassName} />;
    case 'plus':
      return <Plus className={iconClassName} />;
    case 'home':
      return <Home className={iconClassName} />;
    default:
      return Utils.exhaustiveMatchingGuard(name);
  }
};

export default Icon;
