import limitRate from 'express-rate-limit'
import slowRate from 'express-slow-down'

// Maximum of 30 requests every 5 minutes
const limit = limitRate({
    windowMs: 5 * 60 * 1000,
    max: 30,
    message: 'Too many requests to the server'
});

// Every request is 250ms longer that before, resets after a minute
const slow = slowRate({
    windowMs: 60 * 1000,
    delayAfter: 1,
    delayMs: 250
});

export { limit, slow }