"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@pages/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@pages/components/ui/form"
import { Input } from "@pages/components/ui/input"
import { Textarea } from '@pages/components/ui/textarea'
import ReCAPTCHA from "react-google-recaptcha";
import { Instagram, Mail, Phone } from 'lucide-react'
import { getDictionary } from '../../dictionaries'

type Dictionary = Awaited<ReturnType<typeof getDictionary>>

interface ContactProps {
  dict: Dictionary
}

const Contact = ({ dict }: ContactProps) => {
  const formSchema = z.object({
    name: z.string().min(2, { message: dict.portfolio.validname, }),
    email: z.string().email({ message: dict.portfolio.validemail, }),
    message: z.string().min(5, { message: dict.portfolio.validmessage, }),
    recaptcha: z.string().min(1, { message: "Please verify that you are not a robot" })
  })
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...values })
      })
      form.reset()
    }
    catch (err) {
      console.log(err);
    }

  }

  return (
    <div className='container mx-auto select-none' id='contact'>
      <div className='lg:mx-8 mx-2'>
        <h2 className='text-green-700 font-bold dark:text-[#a0f551] lg:text-4xl text-3xl'>{dict.portfolio.contactme}</h2>
        <div className='flex  lg:flex-row flex-col'>
          <div className='lg:w-3/4 mt-8 lg:pr-8 w-full'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-white dark:bg-[#272730] border-0 dark:border border-[#33412f] outline-0 dark:text-white py-6'>
                        <Input placeholder={dict.portfolio.yourname + '...'} {...field} className='placeholder:text-black dark:placeholder:text-[#a1a1aa]' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-white dark:bg-[#272730] border-0 dark:border border-[#33412f] outline-0 dark:text-white py-6'>
                        <Input placeholder={dict.portfolio.email + '...'} {...field} className='placeholder:text-black dark:placeholder:text-[#a1a1aa]' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-white dark:bg-[#272730] border-0 dark:border border-[#33412f] outline-0 dark:text-white h-44'>
                        <Textarea placeholder={dict.portfolio.yourmessage + '...'} className='placeholder:text-black dark:placeholder:text-[#a1a1aa]' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <ReCAPTCHA sitekey="6Lcg82IsAAAAANuEBy1q3rS0882iaRTzSYRZpkf3"
                  onChange={(token) => {
                    setRecaptchaToken(token);
                    form.setValue("recaptcha", token || "", { shouldValidate: true })
                  }}
                  onExpired={() => {
                    setRecaptchaToken(null)
                    form.setValue("recaptcha", "")
                  }} />
                <Button type="submit" className='dark:text-black text-white bg-green-600 dark:bg-[#a0f551]  w-full hover:bg-green-600 dark:hover:bg-[#a0f551] py-6'>{dict.portfolio.send}</Button>
              </form>
            </Form>
          </div>

          <div className='lg:w-1/2 lg:pl-8 space-y-12 mt-8'>
            <div className='flex items-center space-x-4'>
              <div className='dark:bg-[#272730] bg-white dark:text-[#a0f551] text-green-600 p-4 rounded-xl dark:border border-[#33412f]'>
                <Instagram />
              </div>
              <div>
                <p className='text-[#6b7280] font-semibold'>{dict.portfolio.instagram}</p>
                <p className='dark:text-[#fafafa] text-2xl'>ali_mmdv85</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='dark:bg-[#272730] bg-white dark:text-[#a0f551] text-green-600 p-4 rounded-xl dark:border border-[#33412f]'>
                <Mail />
              </div>
              <div>
                <p className='text-[#6b7280] font-semibold'>{dict.portfolio.email}</p>
                <p className='dark:text-[#fafafa] text-2xl'>limmmdli066@gmail.com</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='dark:bg-[#272730] bg-white dark:text-[#a0f551] text-green-600 p-4 rounded-xl dark:border border-[#33412f]'>
                <Phone />
              </div>
              <div>
                <p className='text-[#6b7280] font-semibold'>{dict.portfolio.phone}</p>
                <p className='dark:text-[#fafafa] text-2xl'>+994506957141</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact