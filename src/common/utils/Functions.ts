import { addYears } from 'date-fns'

export const generateCreditCardNumber = () => {
    let blockOne = (Math.random() * 10000).toFixed(0)
    let blockTwo = (Math.random() * 10000).toFixed(0)
    let blockThree = (Math.random() * 10000).toFixed(0)
    let blockFour = (Math.random() * 10000).toFixed(0)

    return `${blockOne} ${blockTwo} ${blockThree} ${blockFour}`
}

export const generateCvvNumber = () => {
    return (Math.random() * 10000).toFixed(0)
}

export const generateExpirationDate = () => {
    let atualDate = new Date()

    atualDate = addYears(atualDate, 5)

    return atualDate
}