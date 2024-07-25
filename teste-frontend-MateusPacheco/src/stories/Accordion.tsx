import {
    Accordion as AccordionComponent,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export interface AccordionProps {
    /**
   * Deseja habilitar o modo escuro?
   */
    darkMode?: boolean;
    /**
   * Definir a pergunta 1
   */
    question1?: string;
    /**
     * Definir a pergunta 2
    */
    question2?: string;
    /**
     * Definir a pergunta 3
    */
    question3?: string;
    /**
     * Definir a resposta 1
    */
    answer1?: string;
    /**
     * Definir a resposta 2
    */
    answer2?: string;
    /**
     * Definir a resposta 3
    */
    answer3?: string;
}
  
export const Accordion = ({
    darkMode = false,
    question1,
    question2,
    question3,
    answer1,
    answer2,
    answer3,
}: AccordionProps) => {

    return (
      <AccordionComponent type="single" collapsible className={`p-5 rounded-xl ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'}`}>
        <span className="text-3xl">Perguntas Frequentes</span>
        <AccordionItem value="item-1" className="border-b border-slate-600">
          <AccordionTrigger>{question1}</AccordionTrigger>
          <AccordionContent>
            {answer1}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-slate-600">
          <AccordionTrigger>{question2}</AccordionTrigger>
          <AccordionContent>
            {answer2}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-slate-600">
          <AccordionTrigger>{question3}</AccordionTrigger>
          <AccordionContent>
            {answer3}
          </AccordionContent>
        </AccordionItem>
      </AccordionComponent>
    )
};
  