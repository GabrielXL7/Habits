import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";


const diasDaSemana =[
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabado',
]
//CRIAR HABITO(INTERNO)

export function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]> ([])

    function createNewHabit(event: FormEvent) {
        event.preventDefault()

    }
    
    function handleToggleWeekDay(weekDay:number){
        if(weekDays.includes(weekDay)){
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)

            setWeekDays(weekDaysWithRemovedOne)
        } else {
            const weekDaysWithAddedOne = [...weekDays, weekDay]
            setWeekDays(weekDaysWithAddedOne)
        }

    }

    return(
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor='title' className="font-semibold leading-tight">
                Qual o seu comprometimento?
            </label>

            {/* Caixinha de exemplos */}
            <input
            type='text'
            id='title'
            placeholder='ex.: Exercícios, dormir bem.'
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
            autoFocus
            onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor='' className="font-semibold leading-tight mt-4">
                Qual a recorrência?                
            </label>


        {/* Dias da semana no modo Criar Hábito */}
            <div className="flex flex-col gap-2 mt-3">
                {diasDaSemana.map((weekDay, index) => {
                    return(
                            <Checkbox.Root 
                            key={weekDay} 
                            className='flex items-center gap-3 group'
                            onCheckedChange={()=>{
                                handleToggleWeekDay(index)
                            }}
                            >
                        <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500'>
                    <Checkbox.Indicator>
                        <Check size={20} className='text-white'/>
                    </Checkbox.Indicator>
                        </div>
                    
                    <span className=' text-white leading-tight '>
                    {weekDay}
                    </span>
                    </Checkbox.Root>
                        )
                })}
                
            </div>

              {/* Botão confirmar       */}
            <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
            <Check size={20} weight='bold'/>
            Confirmar
            </button>
        </form>
    )
}