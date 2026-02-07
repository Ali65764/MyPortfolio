import { navigationLinks } from '@pages/constants'
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const socialLinks = [
    { href: "https://instagram.com/ali_mmdv85", icon: <Instagram size={18} /> },
    { href: "https://www.linkedin.com/in/əli-məmmədli-25974931a?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: <Linkedin size={18} /> },
    { href: "https://github.com/Ali65764", icon: <Github size={18} /> },
    { href: "https://wa.me/994506957141", icon: <MessageCircle size={18} /> }
  ]
  return (
    <div className='container mx-auto border-t-4 border-[#33412f]'>
      <div className='text-center space-y-4 mt-7'>
        <p className='text-xl text-[#f0f1ef] '>
          <code className='text-[#a0f551] text-2xl'>&lt;</code><code className='text-[#a0f551] text-2xl'>&gt;</code>
          <span className='mx-2'>Ali Mammadli</span>
          <code className='text-[#a0f551] text-2xl'>&lt;</code><code className='text-[#a0f551] text-2xl'>/&gt;</code>
        </p>
        <div className='flex items-center space-x-5 text-[#f0f1ef] justify-center'>
          {socialLinks.map((link, index) => (
            <Link href={link.href} key={index}>{link.icon}</Link>
          ))}
        </div>
        <div className='flex items-center text-[#9ca3af] text-sm space-x-6 justify-center'>
          {navigationLinks.map((link, index) => (
            <Link href={link.href} key={index}>{link.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer