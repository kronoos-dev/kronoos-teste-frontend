import { useState } from "react";
import IconCookie from "@/icons/iconCookies";

export interface CookiesProps {
    /**
   * Deseja habilitar o modo escuro?
   */
    darkMode?: boolean;
    /**
   * A posição do banner deve ser fixa ou flutuante?
   */
    placement?: 'fixed' | 'floating';
    /**
   * Qual mensagem deve ser exibida no banner?
   */
    label?: string;
    /**
   * Ao clicar no botão, o banner é fechado
   */
    onClick?: (setAccept: boolean) => void;
};

/**
 * Componente que exibe um banner de aceitação de Cookies - LGPD
 */
export const Cookies = ({
    darkMode = false,
    placement = 'fixed',
    label,
    ...props
}: CookiesProps) => {
    
    const mode = darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black';
    const [accept, setAccept] = useState(false);

    if (accept) {
        return null;
    }

    return (
        <div>
            <div
                className={`${placement === 'fixed' ? 'top-0 left-0 w-full' : 'fixed top-10 w-3/4 left-0 right-0 mx-auto rounded-2xl'} ${mode} z-[1000] p-5 cursor-default`}
            >
                <div className='flex w-full max-w-[1280px] flex-col items-center justify-between lg:mx-[auto] lg:flex-row'>
                    <div className='mb-4 text-sm lg:mb-0 lg:w-4/5'>
                        <b>Proteção de dados pessoais - LGPD</b>
                        <p>{label}</p>
                    </div>
                    <button onClick={() => setAccept(true)} className='group flex items-center gap-1 bg-black p-2 text-white hover:bg-slate-600 lg:p-3 text-xs transition-all duration-300'>
                        <IconCookie className='h-4 w-4 fill-white group-hover:-rotate-180 transition-all duration-500' />
                        Aceitar cookies
                    </button>
                </div>
            </div>
        </div>
    );
};