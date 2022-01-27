import Image from 'next/image';

// import { AppConfig } from '../utils/AppConfig';

// type ILogoProps = {
//   xl?: boolean;
// };

// const Logo = (props: ILogoProps) => {
const Logo = () => {
  // const size = props.xl ? '44' : '32';
  // const fontStyle = props.xl
  //   ? 'font-semibold text-3xl'
  //   : 'font-semibold text-xl';

  return (
    <>
      <Image
        src="/smoking-zombie-logo.png"
        alt="Smoking Zombie Logo"
        width={120}
        height={120}
      />
    </>
  );
};

export { Logo };
