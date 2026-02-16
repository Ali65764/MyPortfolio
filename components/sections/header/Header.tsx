"use client"
import { Button } from '@pages/components/ui/button'
import { FileDown, Globe, Instagram, Sun, Moon, Menu, User } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@pages/components/ui/dropdown-menu"
import Link from 'next/link'
import { useTheme } from '@pages/context/ThemeContext'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@pages/components/ui/sheet"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { getDictionary } from '@pages/app/[lang]/dictionaries'

type Dictionary = Awaited<ReturnType<typeof getDictionary>>

interface HeaderProps {
  dict: Dictionary
}

const Header = ({ dict }: HeaderProps) => {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { href: "https://instagram.com/ali_mmdv85", icon: <Instagram size={18} /> },
    { href: "https://www.linkedin.com/in/əli-məmmədli-25974931a", icon: <FaLinkedinIn size={18} /> },
    { href: "https://github.com/Ali65764", icon: <FaGithub size={18} /> },
    { href: "https://wa.me/994506957141", icon: <FaWhatsapp size={20} /> }
  ]

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'az', label: 'Azərbaycan' },
    { code: 'ru', label: 'Русский' }
  ]

  const navigationLinks = [
    { href: "#about", label: dict.portfolio.about },
    { href: "#skills", label: dict.portfolio.skills },
    { href: "#projects", label: dict.portfolio.projects },
    { href: "#contact", label: dict.portfolio.contact }
  ]

  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }

  if (!mounted) {
    return (
      <header className='container mx-auto'>
        <div className='flex md:justify-between items-center justify-center p-2'>
          <div className='md:flex hidden items-center text-[#8b8b8f] bg-white dark:bg-[#272730] p-2 rounded-md '>
            <User size={18} />  <span className='ml-2'>My Portfolio</span>
          </div>
          <div className='flex items-center space-x-2'>
            <Button className='bg-white dark:bg-[#272730] text-[#8b8b8f] dark:hover:bg-[#272730] hover:bg-white dark:border border-[#33412f]' asChild>
              <a href="/Cv.pdf" download='cv.pdf' >
                <FileDown /><span>{dict.portfolio.download}</span>
              </a>
            </Button>
            <Button className='bg-white dark:bg-[#272730] border-0 dark:border border-[#33412f] text-[#8b8b8f] dark:hover:bg-[#272730] hover:bg-white hover:text-[#8b8b8f]  flex items-center' variant="outline">
              <Globe /> <span>{dict.portfolio.language}</span>
            </Button>
          </div>
        </div>

        <div className='flex justify-between items-center bg-white dark:bg-[#272730] py-3  dark:border border-[#33412f] mt-1 rounded-md mx-2 h-20'>
          <div className=' px-5 md:text-lg dark:text-white'>
            <code className='text-green-600 dark:text-[#a2f552]'> &lt;p&gt;</code> {dict.portfolio.name} <code className='text-green-600 dark:text-[#a2f552]'>&lt;/p&gt;</code>
          </div>
          <nav className='text-[#8b8b90] md:flex items-center space-x-6 text-md hidden'>
            {navigationLinks.map((link, index) => (
              <Link href={link.href} key={index}>{link.label}</Link>
            ))}
          </nav>
          <div className='flex items-center space-x-4 text-white'>
            <div className='md:flex hidden items-center space-x-4 dark:text-white text-black'>
              {socialLinks.map((link, index) => (
                <Link href={link.href} key={index} target='_blank'>{link.icon}</Link>
              ))}
            </div>
            <div className='flex items-center md:bg-gray-200 dark:md:bg-[#32323b] px-5 py-[25.2px] md:space-x-0 space-x-5'>
              <button className='text-[#facc15]' onClick={toggleTheme}>
                {theme === "light" ? <Moon size={29} /> : <Sun size={29} />}
              </button>
              <div className='md:hidden dark:text-white text-black'>
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className='container mx-auto' suppressHydrationWarning>
      <div className='flex md:justify-between items-center justify-center p-2'>
        <div className='md:flex hidden items-center text-[#8b8b8f] bg-white dark:bg-[#272730] p-2 rounded-md '>
          <User size={18} />  <span className='ml-2'>My Portfolio</span>
        </div>
        <div className='flex items-center space-x-2'>
          <Button className='bg-white dark:bg-[#272730] text-[#8b8b8f] dark:hover:bg-[#272730] hover:bg-white dark:border border-[#33412f]' asChild>
            <a href="/Cv.pdf" download='cv.pdf' >
              <FileDown /><span>{dict.portfolio.download}</span>
            </a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='bg-white dark:bg-[#272730] border-0 dark:border border-[#33412f] text-[#8b8b8f] dark:hover:bg-[#272730] hover:bg-white hover:text-[#8b8b8f]  flex items-center' variant="outline">
                <Globe /> <span>{dict.portfolio.language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-black text-white border-black'>
              {languages.map((l) => (
                <DropdownMenuItem key={l.code} asChild>
                  <Link href={`/${l.code}`}>
                    {l.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className='flex justify-between items-center bg-white dark:bg-[#272730] py-3  dark:border border-[#33412f] mt-1 rounded-md mx-2 h-20'>
        <div className=' px-5 md:text-lg dark:text-white'>
          <code className='text-green-600 dark:text-[#a2f552]'> &lt;p&gt;</code> {dict.portfolio.name} <code className='text-green-600 dark:text-[#a2f552]'>&lt;/p&gt;</code>
        </div>
        <nav className='text-[#8b8b90] md:flex items-center space-x-6 text-md hidden'>
          {navigationLinks.map((link, index) => (
            <Link href={link.href} key={index}>{link.label}</Link>
          ))}
        </nav>
        <div className='flex items-center space-x-4 text-white'>
          <div className='md:flex hidden items-center space-x-4 dark:text-white text-black'>
            {socialLinks.map((link, index) => (
              <Link href={link.href} key={index} target='_blank'>{link.icon}</Link>
            ))}
          </div>
          <div className='flex items-center md:bg-gray-200 dark:md:bg-[#32323b] px-5 py-[25.2px] md:space-x-0 space-x-5' suppressHydrationWarning>
            <button className='text-[#facc15]' onClick={toggleTheme}>
              {theme === "light" ? <Moon size={29} /> : <Sun size={29} />}
            </button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild suppressHydrationWarning>
                <div className='md:hidden dark:text-white text-black'>
                  <Menu />
                </div>
              </SheetTrigger>
              <SheetContent className='bg-white dark:bg-[#272730] border-0 dark:text-white' suppressHydrationWarning>
                <SheetTitle className='text-xl dark:text-white text-center mt-3'>
                  <code className='text-green-600 dark:text-[#a2f552]'>&lt;p&gt;</code> {dict.portfolio.name} <code className='text-green-600 dark:text-[#a2f552]'>&lt;/p&gt;</code>
                </SheetTitle>
                <SheetDescription></SheetDescription>
                <nav className='flex flex-col space-y-3 mt-6 text-xl'>
                  {navigationLinks.map((link, index) => (
                    <SheetClose asChild key={index}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className='block text-center'
                      >
                        {link.label}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                <div className='flex items-center justify-center mt-8 space-x-5'>
                  {socialLinks.map((link, index) => (
                    <SheetClose asChild key={index}>
                      <Link href={link.href} target='_blank'>
                        {link.icon}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header