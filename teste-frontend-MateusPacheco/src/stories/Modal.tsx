import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

export interface ModalProps {
  /**
 * Deseja habilitar o modo escuro?
 */
  darkMode?: boolean;
  /**
 * Qual mensagem deve ser exibida no modal?
 */
  message?: string;
  /**
 * URL do vídeo do youtube que será exibido no modal:
 */
  videoUrl: string;
}

/**
 * Componente que exibe um modal de vídeo ao clicar no botão
 */
export const Modal = ({
    message,
    darkMode = false,
    videoUrl,
}: ModalProps) => {

  const url = videoUrl.split('=')[1];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'} hover:bg-slate-600 transition-all duration-300 p-5 rounded-xl`}>Abrir modal</button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className={`${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'}`}>
        <DialogTitle className="hidden">Vídeo</DialogTitle>
        <div className="flex flex-col items-center justify-center gap-2">
          {message}

          <iframe width="390" height="220" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
