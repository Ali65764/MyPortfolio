import { Button } from '@pages/components/ui/button'
import { FileDown, Github, Globe, Instagram, Linkedin, Sun } from 'lucide-react'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@pages/components/ui/dropdown-menu"
import { navigationLinks } from '@pages/constants'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
const Header = () => {
  const socialLinks = [
    { href: "https://instagram.com/ali_mmdv85", icon: <Instagram size={18} /> },
    { href: "https://linkedin.com/", icon: <Linkedin size={18} /> },
    { href: "https://github.com/Ali65764", icon: <Github size={18} /> }
  ]
  return (
    <header className='container mx-auto bg-[#1c1d22]'>
      <div className='flex md:justify-between items-center justify-center p-2'>
        <div className='md:flex hidden text-white bg-[#272730] p-2 rounded-lg text-sm'>
          Mammadli Ali
        </div>
        <div className='flex items-center space-x-2'>
          <Button className='bg-[#272730] text-[#8b8b8f] hover:bg-[#272730] border border-[#33412f]'><FileDown />Download CV</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='bg-[#272730] border border-[#33412f] text-[#8b8b8f] hover:bg-[#272730] hover:text-[#8b8b8f]  flex items-center' variant="outline">
                <Globe /> <span>Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-black text-white border-black'>
              <DropdownMenuItem>
                Azərbaycan
              </DropdownMenuItem>
              <DropdownMenuItem>
                English
              </DropdownMenuItem>
              <DropdownMenuItem>
                Rusca
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className='flex justify-between items-center bg-[#272730] py-3  border border-[#33412f] mt-1 rounded-md mx-2 h-20'>
        <div className='text-white px-5 md:text-lg'>
          <code className='text-[#a2f552]'> &lt;p&gt;</code> Ali Mammadli <code className='text-[#a2f552]'>&lt;/p&gt;</code>
        </div>
        <nav className='text-[#8b8b90] md:flex items-center space-x-6 text-md hidden'>
          {navigationLinks.map((link, index) => (
            <Link href={link.href} key={index}>{link.label}</Link>
          ))}
        </nav>
        <div className='flex items-center space-x-4 text-white'>
          <div className='md:flex hidden items-center space-x-4 text-white'>
            {socialLinks.map((link, index) => (
              <Link href={link.href} key={index}>{link.icon}</Link>
            ))}
          </div>
          <div className='flex items-center md:bg-[#32323b] px-5 py-6 md:space-x-0 space-x-5'>
            <button className='text-[#facc15]'><Sun size={29} /></button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header