import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './lib/font';
import Image from 'next/image';


export default function Page() {
    return (
        <main className="flex w-full h-screen flex-col p-6 bg-black text-grey-metro">
            <div className="flex w-full h-20 shrink-0 items-end rounded-lg bg-grey-10 p-4 lg:h-28 xl:h-36">
                <AcmeLogo />
            </div>
            <div className="mt-8 w-full flex grow flex-col gap-6 lg:flex-row lg:h-[calc(100%-168px)] xl:h-[calc(100%-200px)]">
                <div className=" w-full flex flex-col justify-center gap-6 rounded-lg bg-grey-10 px-6 py-10 md:w-1/2 lg:px-20 xl:w-2/5">
                    <p className={`text-xl lg:text-3xl lg:leading-normal ${lusitana.className}`}>
                        <strong>Welcome to Acme.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/" className=" text-blue-darkLink">
                            Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </p>
                    <Link
                        href="/login"
                        className="flex items-center gap-5 self-start rounded-lg bg-grey-metro px-6 py-3 text-sm font-medium text-black-lightText transition-colors hover:bg-white md:text-base"
                    >
                        <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                    </Link>
                </div>
                <div className="w-full relative flex items-center justify-center p-6 lg:w-1/2 xl:w-3/5">
                    <Image
                        src={"/hero-desktop.png"}
                        className='hidden lg:block'
                        alt='hero'
                        // width={1000}
                        // height={800}
                        // style={{ width: '100%', height: 'auto' }}
                        fill
                    />

                    <Image
                        src={"/hero-mobile.png"}
                        className=' lg:hidden'
                        alt='hero'
                        width={560}
                        height={620}
                    />
                </div>
            </div>
        </main>
    );
}

// bg-gray-50
// text-gray-800