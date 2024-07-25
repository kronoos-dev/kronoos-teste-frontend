import {
    Tabs as RadixTabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
  export interface TabsProps {
    /**
   * Deseja habilitar o modo escuro?
   */
    darkMode?: boolean;
    /**
   * Titulo da aba 1
   */
    tab1?: string;
    /**
   * Titulo da aba 2
   */
    tab2?: string;
    /**
   * Conteúdo da aba1
   */
    tab1Content?: string;
    /**
   * Conteúdo da aba2
   */
    tab2Content?: string;
  }
  
  /**
   * Componente de abas que exibe diferentes informações ao clicar em cada aba
   */
  export const Tabs = ({
      darkMode,
      tab1,
      tab2,
      tab1Content,
      tab2Content,
  }: TabsProps) => {
  
    return (
        <RadixTabs defaultValue={`${tab1}`} className={`w-[300px] lg:w-[500px] rounded-2xl ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'}`}>
            <TabsList className={`grid w-full grid-cols-2 ${darkMode ? 'bg-slate-600 text-white' : 'bg-slate-200 text-black'}`}>
                <TabsTrigger value={`${tab1}`}>{tab1}</TabsTrigger>
                <TabsTrigger value={`${tab2}`}>{tab2}</TabsTrigger>
            </TabsList>
            <TabsContent className={`p-5 pt-2 rounded-b-xl ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'}`} value={`${tab1}`}>
                <span className="text-xl font-bold mb-1 inline-block">{tab1}</span>
                <div>{tab1Content}</div>
            </TabsContent>
            <TabsContent className={`p-5 pt-2 rounded-b-xl ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-300 text-black'}`} value={`${tab2}`}>
                <span className="text-xl font-bold mb-1 inline-block">{tab2}</span>
                <div>{tab2Content}</div>
            </TabsContent>
        </RadixTabs>
    )
  }
  