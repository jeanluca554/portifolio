import { useState } from 'react';
import Head from 'next/head';
import ItemNavList from '@/components/ItemNavList';


import { House, User, FileText, Briefcase, Image, PaperPlaneRight, X, SquaresFour, LinkedinLogo, WhatsappLogo, GithubLogo, MouseSimple, ArrowDown, DownloadSimple, BracketsCurly, Code } from "phosphor-react";
import Blob from '@/components/Blob';
import Button from '@/components/Button';
import Skills from '@/components/Skills';
import SkillsData from '@/components/SkillsData';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFront, setIsOpenFront] = useState(false);
  const [isOpenBack, setIsOpenBack] = useState(false);

  function openCloseFront() {
    if (isOpenBack) {
      setIsOpenBack(false)
    }
    setIsOpenFront(!isOpenFront)
  }

  function openCloseBack() {
    if (isOpenFront) {
      setIsOpenFront(false)
    }
    setIsOpenBack(!isOpenBack)
  }


  return (
    <>
      <Head>
        <title>Jean Luca Portifólio</title>
        <meta name="description" content="Portifolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`header w-full fixed bottom-0 left-0 z-100 bg-white`}>
        <nav className='nav max-w-4xl mx-6 h-12 flex justify-between items-center'>
          <a href="#" className={`nav__logo ${isOpen ? 'hidden' : 'block'} text-title-color font-medium hover:text-first-color`}>Jean Luca</a>

          <div className={`nav__menu fixed w-full ${isOpen ? 'bottom-0' : 'bottom-[-100%]'} left-0 bg-white pt-8 px-6 pb-16 shadow-[0_-1px_4px_rgba(0,0,0,.15)] rounded-t-3xl duration-300 `}>
            <ul className="nav__list grid md:gap-6 grid-cols-3 gap-8">
              <ItemNavList
                icon={<House className='text-xl' weight='bold' />}
                text="Home"
                href='#home'
              />

              <ItemNavList
                icon={<User className='text-xl' weight='bold' />}
                text="About"
                href='#about'
              />

              <ItemNavList
                icon={<FileText className='text-xl' weight='bold' />}
                text="Skills"
                href='#skills'
              />

              <ItemNavList
                icon={<Briefcase className='text-xl' weight='bold' />}
                text="Services"
                href='#services'
              />

              <ItemNavList
                icon={<Image className='text-xl' weight='bold' />}
                text="Portifolio"
                href='#portifolio'
              />

              <ItemNavList
                icon={<PaperPlaneRight className='text-xl' weight='bold' />}
                text="Contact"
                href='#contact'
              />
            </ul>
            <X className="nav__close absolute right-5 bottom-2 h-6 w-6 cursor-pointer text-first-color hover:text-first-color-alt" weight='bold' onClick={() => setIsOpen(false)} />

          </div>

          <div className="nav__btns">
            <div className='nav__toggle text-title-color font-medium text-lg cursor-pointer' id='nav-toggle'>
              <SquaresFour className={`nav__close ${isOpen ? 'hidden' : 'block'} absolute right-5 bottom-2 h-6 w-6 cursor-pointer text-first-color hover:text-first-color-alt`} id="nav-close" weight='bold' onClick={() => setIsOpen(true)} />
            </div>
          </div>
        </nav >
      </header >

      <main className="max-w-sm mx-auto">
        <section className='home section pt-8 px-0 pb-16 mx-6' id='home'>
          <div className="home__container container grid gap-4">
            <div className="home__content grid grid-cols-12 gap-y-14 pt-14 items-center">
              <div className="home__social grid gap-4">
                <a href="" target="_blank" className="home__social-icon text-first-color text-xl hover:text-first-color-alt">
                  <LinkedinLogo weight='bold' />
                </a>

                <a href="" target="_blank" className="home__social-icon text-first-color text-xl hover:text-first-color-alt">
                  <GithubLogo weight='bold' />
                </a>

                <a href="" target="_blank" className="home__social-icon text-first-color text-xl hover:text-first-color-alt">
                  <WhatsappLogo weight='bold' />
                </a>
              </div>

              <div className="home__img col-start-4 col-span-9">
                <Blob />
              </div>

              <div className="home__data col-span-12">
                <h1 className="home__title text-4xl font-semibold text-gray-800">Olá, sou o Jean</h1>
                <h3 className='home__subtitle text-xl text-gray-500 mb-4 mt-3 font-semibold'>Desenvolvedor Web</h3>
                <p className="home__description mb-8 text-gray-500">Sólido conhecimento em Desenvolvimento Web, produzindo resultados de alta qualidade.</p>
                <Button
                  text='Entre em contato'
                  icon={<PaperPlaneRight className='text-xl ml-2 duration-300' weight='bold' />}
                />
              </div>

            </div>
            <div className="home__scroll col-span-1 hidden">
              <a href="" className="home__scroll-button button--flex inline-flex items-center text-first-color duration-300 hover:translate-y-1">
                <MouseSimple className='home__scroll-mouse text-4xl' />
                <span className="home__scroll-name text-sm text-title-color font-medium mr-1">Rolar para baixo</span>
                <ArrowDown className='home__scroll-arrow' weight='bold' />
              </a>
            </div>
          </div>
        </section>

        <section className="about section pt-8 pb-16 mx-6 items-center" id="about">
          <h2 className="section__title text-2xl font-semibold text-center text-gray-800">Sobre mim</h2>
          <span className="section__subtitle block text-sm text-center mb-10 text-gray-500">Minha introdução</span>
          <div className="about__container container grid">
            <img src="perfil.jpg" alt="" className="about__img w-52 rounded-lg justify-self-center self-center" />

            <div className="about__data text-gray-500">
              <p className="about__description text-center mb-10 mt-6">
                Desenvolvedor web com sólidos conhecimentos em HTML, CSS e JavaScript, e experiência em desenvolvimento de pequenos projetos.
              </p>

              <div className="about__info flex justify-evenly mb-10">
                <div>
                  <span className="about__info-title block text-center text-xl font-semibold text-gray-800">08+</span>
                  <span className="about__info-name text-sm block text-center">Years <br /> experience</span>
                </div>

                <div>
                  <span className="about__info-title block text-center text-xl font-semibold text-gray-800">20+</span>
                  <span className="about__info-name text-sm block text-center">Completed <br /> project</span>
                </div>

                <div>
                  <span className="about__info-title block text-center text-xl font-semibold text-gray-800">05+</span>
                  <span className="about__info-name text-sm block text-center">Companies <br /> worked</span>
                </div>
              </div>

              <div className="about__buttons flex justify-center">

                <a download="" href="Currículo-Jean-Desenvolvedor-Web.pdf" className="button button--flex inline-flex items-center bg-first-color text-white font-semibold p-4 rounded-lg hover:bg-first-color-alt">
                  Download CV<DownloadSimple className='button__icon text-xl ml-2 duration-300' weight='bold' />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section mb-12" id="skills">
          <h2 className="section__title text-2xl font-semibold text-center text-gray-800">Habilidades </h2>
          <span className="section__subtitle block text-sm text-center mb-10 text-gray-500">Meu nível técnico</span>

          <div className="skills__container container grid gap-y-0">
            <div>
              <div onClick={openCloseFront}>
                <Skills
                  skillTitle='Frontend developer'
                  skillSubtitle='More than 4 years'
                  isOpen={isOpenFront}
                  icon={<BracketsCurly className='skills__icon text-4xl text-first-color mr-3' weight="bold" />}
                  skillsData={<>
                    <SkillsData
                      skillName="HTML"
                      skillNumber="90%"
                    />
                    <SkillsData
                      skillName="CSS"
                      skillNumber="80%"
                    />

                    <SkillsData
                      skillName="JavaScript"
                      skillNumber="60%"
                    />

                    <SkillsData
                      skillName="React"
                      skillNumber="85%"
                    />
                  </>}
                />
              </div>

              <div onClick={openCloseBack}>
                <Skills
                  skillTitle='Backend developer'
                  skillSubtitle='More than 4 years'
                  isOpen={isOpenBack}
                  icon={<Code className='skills__icon text-4xl text-first-color mr-3' weight="bold" />}
                  skillsData={<>
                    <SkillsData
                      skillName="PHP"
                      skillNumber="80%"
                    />

                    <SkillsData
                      skillName="Node JS"
                      skillNumber="70%"
                    />

                    <SkillsData
                      skillName="SQL"
                      skillNumber="90%"
                    />
                  </>}
                />
              </div>
            </div>
            <div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
