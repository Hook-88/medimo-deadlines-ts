function getTimeStrMinutes(timeStr:string) {
    const minutes = timeStr.slice(3)

    return Number(minutes)
}

function getTimeStrHourMinutes(timeStr:string) {
    const hour = timeStr.slice(0, 2)

    return Number(hour) * 60
}

function getDayIndexMinutes(dayIndex:string) {
    const index = Number(dayIndex)

    return index * 24 * 60
}

function getTotalTimeStrMinutes(timeStr:string) {
    const hours = getTimeStrHourMinutes(timeStr)
    const minutes = getTimeStrMinutes(timeStr)

    return hours + minutes
}

function getDeadline(send: number, start: number) {
    // const send = deadlineObj.send_baxter_day + deadlineObj.send_baxter_time
    // const start = deadlineObj.start_baxter_day + deadlineObj.start_baxter_time

    if (send > start) {
        
        return start - send + (7 * 24 * 60)
    }

    return start - send
}

export {getTimeStrMinutes, getTimeStrHourMinutes, getDayIndexMinutes, getTotalTimeStrMinutes, getDeadline}