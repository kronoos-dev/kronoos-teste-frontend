import {
  Dialog,
  DialogContent,
  DialogTrigger,
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
};

/**
 * Componente que exibe um modal quando clicar no botão de gatilho
 */
export const Modal = ({
    message,
    darkMode = false,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-slate-800 text-white hover:bg-slate-600 transition-all duration-300 p-5 rounded-xl">Abrir modal</button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-md ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'}`}>
        <div className="flex items-center space-x-2">
          {message}
        </div>
      </DialogContent>
    </Dialog>
  )
}
