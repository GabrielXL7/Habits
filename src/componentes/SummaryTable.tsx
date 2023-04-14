import { generateDateFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
]

const SummaryDates = generateDateFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7 
const amountOfDaysToFill = minimumSummaryDatesSize - SummaryDates.length


// QUADRADO REPRESENTANDO DIAS 
export function SummaryTable(){
    return(

        // Calendario
        <div className="w-full flex">

            {/* Dias da semana no Calendario */}
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {weekDays.map((weekDays, i) =>{
                    return(
                        <div key={`${weekDays}-${i}`} 
                        className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'>
                            {weekDays}      
                        </div>
                    )
                })}
            </div>

            {/* Controle de quadrados do Calendario */}
            <div className=" grid grid-rows-7 grid-flow-col gap-3">
              {SummaryDates.map(date =>{
                return (
                <HabitDay 
                    amount={5} 
                    completed={Math.round(Math.random()* 5)} 
                    key={date.toString()}
                        />
                    ) 
              })}

               {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill}).map((_, i) =>{
                return (
                    <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed">
                        
                    </div>
                )
              })} 
            </div>
        </div>
    )    


}