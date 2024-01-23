//aqui programa hora actual
const currentTime = (req, res, next) => {
    const now = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return `La hora actual es: ${hours}:${minutes}:${seconds}`;
}

module.exports = currentTime;