$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const countDown = () => {
    const countDate = new Date('Sep 26, 2021 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    // ok gimana cara kerjanya sialann
    const second = 1000 // 1000 milisecond = 1 second
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // calculate the logic , fuck
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    if (textDay < 10) {
        tDay = "0" + textDay
    } else {
        tDay = textDay
    }
    if (textHour < 10) {
        tHour = "0" + textHour
    } else {
        tHour = textHour
    }
    if (textMinute < 10) {
        tMinute = "0" + textMinute
    } else {
        tMinute = textMinute
    }
    if (textSecond < 10) {
        tSecond = "0" + textSecond
    } else {
        tSecond = textSecond
    }

    $('#day').text(tDay)
    $('#hour').text(tHour)
    $('#minute').text(tMinute)

}

setInterval(countDown, 1000)