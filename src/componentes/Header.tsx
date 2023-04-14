import { Plus, X} from 'phosphor-react'

import logoImage from '../assets/Group 2.svg'

import * as Dialog from '@radix-ui/react-dialog';
import { NewHabitForm } from './NewHabitForm';


export function Header(){
    return(
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
        <img src={logoImage} alt="Habits" />

{/* Botão Novo HABITO */}
        <Dialog.Root>
        <Dialog.Trigger type='button'
className='border border-violet-100 font-semibold rounded-lg px-6 py-4 flex items-c gap-2 hover:border-violet-900'>
  <Plus size={20} className="text-violet-500" />
  Novo hábito

        </Dialog.Trigger>
{/* ROTA DO METODO CRIAR HABITO, TODO DESIGNER */}
        <Dialog.Portal>

            {/* Escurecimento da tela quando entrar na rota "Novo hábito" DIALOG.OVERLAY */}
            <Dialog.Overlay className='w-screen h-screen bg-black/90 fixed inset-0'/>
            
            {/* Menu inicial do "Criar hábito" DIALOG.CONTENT */}
            <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

             {/* Botao X para sair do menu de Criar hábito DIALOG.CLOSE    */}
            <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
                <X size={12} aria-label='fechar'/>
            </Dialog.Close>

            {/* Titulo Criar hábito */}
            <Dialog.Title className='text-3xl leading-tight font-extrabold'>
                Criar hábito 
            </Dialog.Title>
            <NewHabitForm></NewHabitForm>
            </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root>
   </div>
    )
}