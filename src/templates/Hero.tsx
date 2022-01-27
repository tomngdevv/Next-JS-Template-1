import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      {/* <NavbarTwoColumns logo={<Logo xl />}> */}
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ATTRIBUTE</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ROADMAP</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>TEAM</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>FAQ</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <div className="flex">
        <div className="flex-1 mr-10">
          <HeroOneButton
            title={
              <>
                <div className="text-4xl leading-snug">
                  <p>Welcome to</p>
                  <p>Smoking Zombies</p>
                </div>
                <div className="text-sm">
                  {'Smoking Zombies is so bullshit\n'}
                </div>
                {/* <span className="text-primary-500">React developers</span> */}
              </>
            }
            description="The easiest way to build a React landing page in seconds."
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <a>
                  <Button xl>Download Your Free Theme</Button>
                </a>
              </Link>
            }
          />
        </div>
        <div className="flex-1">
          <img
            src="/assets/images/smoking-zombie-logo.png"
            alt="Smoking Zombie Logo"
            width={450}
            height={450}
          />
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
