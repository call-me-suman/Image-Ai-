import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleError = (error:unknown ) =>{
  if (error instanceof Error){
    //this is native javascript error
    console.error(error.message)
    throw new Error (`Error : ${error.message}`)
  }else if (typeof error === 'string'){}
}