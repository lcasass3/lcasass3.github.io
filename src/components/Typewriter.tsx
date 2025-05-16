import Typewriter from "typewriter-effect";

interface Props {
  options: {
    strings: string[];
    autoStart?: boolean;
    pauseFor?: number;
    loop?: boolean;
    cursor?: string;
    wrapperClassName?: string;
    cursorClassName?: string;
  };
}

export default ({ options }: Props) => {
  return <Typewriter options={options} />;
};
