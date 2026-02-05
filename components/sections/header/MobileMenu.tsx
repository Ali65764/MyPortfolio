import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@pages/components/ui/sheet"
import { Github, Instagram, Linkedin, Menu } from 'lucide-react'
import { navigationLinks } from '@pages/constants'
import Link from 'next/link'

const MobileMenu = () => {
    const socialLinks = [
        { href: "https://instagram.com/ali_mmdv85", icon: <Instagram size={25} /> },
        { href: "https://linkedin.com/", icon: <Linkedin size={25} /> },
        { href: "https://github.com/Ali65764", icon: <Github size={25} /> }
    ]
    
    return (
        <Sheet>
            <SheetTrigger>
                <div className='md:hidden'>
                    <Menu />
                </div>
            </SheetTrigger>
            <SheetContent className='bg-[#272730] border-0 text-white'>
                <SheetTitle className='text-xl text-white text-center mt-3'>
                    <code className='text-[#a2f552]'>&lt;p&gt;</code> Ali Mammadli <code className='text-[#a2f552]'>&lt;/p&gt;</code>
                </SheetTitle>
                <div className='flex flex-col space-y-3 mt-6 text-xl'>
                    {navigationLinks.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link href={link.href} className='block text-center'>
                                {link.label}
                            </Link>
                        </SheetClose>
                    ))}
                </div>
                <div className='flex items-center justify-center mt-8 space-x-6'>
                    {socialLinks.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link href={link.href}>
                                {link.icon}
                            </Link>
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu