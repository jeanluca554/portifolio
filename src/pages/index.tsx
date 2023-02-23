import { useState } from 'react';
import Head from 'next/head';
import ItemNavList from '@/components/ItemNavList';


import { House, User, FileText, Briefcase, Image, PaperPlaneRight, X, SquaresFour, List, LinkedinLogo, WhatsappLogo, GithubLogo } from "phosphor-react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Jean Luca Portifólio</title>
        <meta name="description" content="Portifolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`header w-full fixed bottom-0 left-0 z-100 bg-body-color`}>
        <nav className='nav max-w-4xl mx-6 h-12 flex justify-between items-center'>
          <a href="#" className={`nav__logo ${isOpen ? 'hidden' : 'block'} text-title-color font-medium hover:text-first-color`}>Jean Luca</a>

          <div className={`nav__menu fixed w-full ${isOpen ? 'bottom-0' : 'bottom-[-100%]'} left-0 bg-body-color pt-8 px-6 pb-16 shadow-[0_-1px_4px_rgba(0,0,0,.15)] rounded-t-3xl duration-300 `}>
            <ul className="nav__list grid md:gap-6 grid-cols-3 gap-8">
              <ItemNavList
                icon={<House className='text-xl' weight='bold' />}
                text="Home"
              />

              <ItemNavList
                icon={<User className='text-xl' weight='bold' />}
                text="About"
              />

              <ItemNavList
                icon={<FileText className='text-xl' weight='bold' />}
                text="Skills"
              />

              <ItemNavList
                icon={<Briefcase className='text-xl' weight='bold' />}
                text="Services"
              />

              <ItemNavList
                icon={<Image className='text-xl' weight='bold' />}
                text="Portifolio"
              />

              <ItemNavList
                icon={<PaperPlaneRight className='text-xl' weight='bold' />}
                text="Contactme"
              />
            </ul>
            <X className="nav__close absolute right-5 bottom-2 h-6 w-6 cursor-pointer text-first-color hover:text-first-color-alt" weight='bold' onClick={() => setIsOpen(false)} />

          </div>

          <div className="nav__btns">
            <div className='nav__toggle text-title-color font-medium text-lg cursor-pointer' id='nav-toggle'>
              <SquaresFour className={`nav__close ${isOpen ? 'hidden' : 'block'} absolute right-5 bottom-2 h-6 w-6 cursor-pointer text-first-color hover:text-first-color-alt`} id="nav-close" weight='bold' onClick={() => setIsOpen(true)} />
            </div>
          </div>
        </nav>
      </header>

      <main className="">
        <section className='home section pt-8 px-0 pb-16' id='home'>
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="" target="_blank" className="home__social-icon">
                  <LinkedinLogo />
                </a>

                <a href="" target="_blank" className="home__social-icon">
                  <GithubLogo />
                </a>

                <a href="" target="_blank" className="home__social-icon">
                  <WhatsappLogo />
                </a>
              </div>

              <div className="home__img">

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
