import {CreditValues} from "../CreditForm/types.ts";
import {Payment} from "./types.ts";

export const getPaymentsSchedule = ({ amount, rate, term }: CreditValues): Payment[] => {
    const annualRate = rate / 100
    const monthlyRate = annualRate / 12

    const numerator = monthlyRate * amount
    const denominator = 1 - Math.pow(1 + monthlyRate, -term)
    const monthlyPayment = numerator / denominator

    let balance = amount

    return Array.from({ length: term }, (_, i) => {
        const interest = balance * monthlyRate
        const principal = monthlyPayment - interest
        balance = balance - principal

        return {
            month: i + 1,
            payment: monthlyPayment.toFixed(2),
            principal: principal.toFixed(2),
            interest: interest.toFixed(2),
            leftover: balance.toFixed(2),
        }
    })
}
