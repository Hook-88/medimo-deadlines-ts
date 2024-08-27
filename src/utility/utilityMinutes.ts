function getTimeStrMinutes(timeStr:string) {
    const minutes = timeStr.slice(3)

    return Number(minutes)
}

function getTimeStrHourMinutes(timeStr:string) {
    const hour = timeStr.slice(0, 2)

    return Number(hour) * 60
}

export {getTimeStrMinutes, getTimeStrHourMinutes}