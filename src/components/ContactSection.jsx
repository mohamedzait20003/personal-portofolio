// Libraries
"use client";
import React from 'react'
import Link from 'next/link';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from: data.email,
                    to_name: "Mohammed Zaitoun", 
                    subject: data.subject,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            );
            toast.success('Email sent successfully!');
            e.target.reset();
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <>
            <ToastContainer />
            <section className='grid lg:grid-cols-2 my-12 md:my-12 py-2 px-10 gap-6' id='contact'>
                <div className='flex flex-col place-self-center items-start justify-center'>
                    <h2 className='text-4xl font-bold text-white my-2'>Let&apos;s Connect</h2>
                    <p className='text-[#e5e5e5] mb-4 mt-4 max-w-md'>
                        {" "}
                        My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                    <div className='flex flex-row mt-4 gap-4'>
                        <Link href="https://github.com/mohamedzait20003">
                            <FaGithub className='text-2xl text-white cursor-pointer hover:text-purple-600' />
                        </Link>
                        <Link href="www.linkedin.com/in/mohamed-zaitoun-a4a2391b7">
                            <FaLinkedin className='text-2xl text-white cursor-pointer hover:text-cyan-300' />
                        </Link>
                    </div>
                </div>
                <div className='w-full sm:w-4/5 flex flex-col place-self-center bg-[#135b5b] rounded-lg px-5 py-5 mr-3 mt-6 sm:mt-0'>
                    <h2 className='text-center text-3xl text-[#ffbad0] font-bold'>Email Me</h2>
                    <form className='w-full flex flex-col gap-4 mt-8' onSubmit={handleSubmit}>
                        <div className='w-full flex flex-col space-y-1 mb-3'>
                            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                            <input name='email' type='email' id='email' className='w-full px-5 py-2 rounded-lg' required placeholder='Example@gmail.com' />
                        </div>
                        <div className='w-full flex flex-col space-y-1 mb-3'>
                            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                            <input name='subject' type='text' id='subject' className='w-full px-5 py-2 rounded-lg' required placeholder='Subject' />
                        </div>
                        <div className='w-full flex flex-col space-y-1 mb-3'>
                            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
                            <textarea name='message' id='message' rows={8} className='w-full px-5 py-2 rounded-lg' placeholder="let's talk about ..." required />
                        </div>
                        <button type='submit' className='bg-[#191919] px-5 py-3 rounded-full text-white hover:bg-emerald-600'>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactSection