import { useState } from "react";
import IconCookie from "@/icons/iconCookies";

export interface CookiesProps {
    darkMode?: boolean;
    placement?: 'fixed' | 'floating';
    onClick?: (setAccept: boolean) => void;
};

export const Cookies = ({
    darkMode = false,
    placement = 'fixed',
    ...props
}: CookiesProps) => {
    
    const mode = darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black';
    const [accept, setAccept] = useState(false);

    if (accept) {
        return null;
    }

    return (
        <div 
            className={`${placement === 'fixed' ? 'bottom-0 left-0 w-full' : 'bottom-10 w-3/4 left-0 right-0 mx-auto rounded-2xl'} ${mode} absolute z-[1000] p-5 cursor-default`}
        >
            <div className='flex w-full max-w-[1280px] flex-col items-center justify-between lg:mx-[auto] lg:flex-row'>
                <div className='mb-4 text-base lg:mb-0 lg:w-4/5'>
                    <b className='mb-2 inline-block text-base'>Proteção de Dados Pessoais</b>
                    <p>Utilizamos cookies e outras tecnologias semelhantes, de acordo com nossa <span className='underline hover:cursor-pointer'>Política de Privacidade.</span></p>
                    <p>Ao continuar navegando, você aceita estas condições</p>
                </div>
                <button onClick={() => setAccept(true)} className='group flex items-center gap-2 bg-black p-2 text-white transition-all hover:bg-slate-600 lg:p-4 lg:text-sm'>
                    <IconCookie className='h-5 w-5 fill-white group-hover:-rotate-180 transition-all duration-500' />
                    Aceitar cookies
                </button>
            </div>
        </div>
    );
};