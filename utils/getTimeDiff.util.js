    export const getTimeDiffUtil = (start, end) => {
        const startDt = new Date(start)
        const endDt = new Date(end)
        let diff = endDt - startDt

        if (diff <= 0) return null

        const msInHour = 1000 * 60 * 60
        const msInDay = msInHour * 24
        const msInMonth = msInDay * 30 // Aproximação de mês

        const months = Math.floor(diff / msInMonth)
        diff -= months * msInMonth

        const days = Math.floor(diff / msInDay)
        diff -= days * msInDay

        const hours = Math.floor(diff / msInHour)

        return { months, days, hours }
    }