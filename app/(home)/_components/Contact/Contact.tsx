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
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters.", }),
  email: z.string().email({ message: "Please enter a valid email address.", }),
  message: z.string().min(5, { message: "Message must be at least 5 characters.", }),
  recaptcha: z.string().min(1, { message: "Please verify that you are not a robot" })
})

const Contact = () => {

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
    <div className='container mx-auto' id='contact'>
      <div className='lg:mx-8 mx-2'>
        <h2 className='text-[#a0f551] text-4xl'>Contact me!</h2>
        <div className='flex  lg:flex-row flex-col'>
          <div className='lg:w-3/4 mt-8 lg:pr-8 w-full'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className='bg-[#272730] border border-[#33412f] outline-0 text-white py-6'>
                        <Input placeholder="Your name" {...field} className='placeholder:text-[#a1a1aa]' />
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
                      <FormControl className='bg-[#272730] border border-[#33412f] outline-0 text-white py-6'>
                        <Input placeholder="Email" {...field} className='placeholder:text-[#a1a1aa]' />
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
                      <FormControl className='bg-[#272730] border border-[#33412f] outline-0 text-white h-44'>
                        <Textarea placeholder="Your message..." className='placeholder:text-[#a1a1aa]' {...field} />
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
                <Button type="submit" className='bg-[#a0f551] text-black w-full hover:bg-[#a0f551] py-6'>Send Message</Button>
              </form>
            </Form>
          </div>

          <div className='lg:w-1/2 lg:pl-8 space-y-12 mt-8'>
            <div className='flex items-center space-x-4'>
              <div className='bg-[#272730] text-[#a0f551] p-4 rounded-xl border border-[#33412f]'>
                <Instagram />
              </div>
              <div>
                <p className='text-[#6b7280] font-semibold'>Instagram</p>
                <p className='text-[#fafafa] text-2xl'>ali_mmdv85</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='bg-[#272730] text-[#a0f551] p-4 rounded-xl border border-[#33412f]'>
                <Mail />
              </div>
              <div>
                <p className='text-[#6b7280] font-semibold'>Email</p>
                <p className='text-[#fafafa] text-2xl'>limmmdli066@gmail.com</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <div className='bg-[#272730] text-[#a0f551] p-4 rounded-xl border border-[#33412f]'>
                <Phone />
              </div>
              <div>
                <p className='text-[#6b7280] font-semibold'>Phone</p>
                <p className='text-[#fafafa] text-2xl'>+994506957141</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact