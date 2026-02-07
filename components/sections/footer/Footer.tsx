import { getDictionary } from '@pages/app/[lang]/dictionaries'

import {Instagram} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
interface FooterProps {
  lang: "en" | "az" | "ru"
}

const Footer = async ({ lang }: FooterProps) => {
  const dict = await getDictionary(lang)

  const socialLinks = [
    { href: "https://instagram.com/ali_mmdv85", icon: <Instagram size={18} /> },
    { href: "https://www.linkedin.com/in/əli-məmmədli-25974931a?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: <FaLinkedinIn size={18} /> },
    { href: "https://github.com/Ali65764", icon: <FaGithub size={19} /> },
    { href: "https://wa.me/994506957141", icon: <FaWhatsapp size={20} /> }
  ]

  const navigationLinks = [
    { href: "#about", label: dict.portfolio.about },
    { href: "#skills", label: dict.portfolio.skills },
    { href: "#projects", label: dict.portfolio.projects },
    { href: "#contact", label: dict.portfolio.contact }
  ]
  return (
    <div className='container mx-auto border-t-4 dark:border-[#33412f] border-green-300 select-none'>
      <div className='text-center space-y-4 mt-7'>
        <p className='text-xl dark:text-[#f0f1ef] '>
          <code className='text-[#a0f551] text-2xl'>&lt;</code><code className='text-[#a0f551] text-2xl'>&gt;</code>
          <span className='mx-2'>{dict.portfolio.name}</span>
          <code className='text-[#a0f551] text-2xl'>&lt;</code><code className='text-[#a0f551] text-2xl'>/&gt;</code>
        </p>
        <div className='flex items-center space-x-5 dark:text-[#f0f1ef] justify-center'>
          {socialLinks.map((link, index) => (
            <Link href={link.href} key={index}>{link.icon}</Link>
          ))}
        </div>
        <div className='flex items-center dark:text-[#9ca3af] text-sm space-x-6 justify-center'>
          {navigationLinks.map((link, index) => (
            <Link href={link.href} key={index}>{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer