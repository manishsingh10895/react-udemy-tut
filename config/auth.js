module.exports = {
    "production": {
        "GOOGLE_CLIENT_ID": process.env.GOOGLE_CLIENT_ID || "1052758219946-2vd9oifi36761splfhgdb3gks5aj1b2i.apps.googleusercontent.com",
        "GOOGLE_CLIENT_SECRET": process.env.GOOGLE_CLIENT_SECRET || "DcdmrlWGJPtKTT-oL3NBCgn9",
        "COOKIE_KEY": process.env.COOKIE_KEY || "randomworkofgod"
    },
    "development": {
        "GOOGLE_CLIENT_ID": "1052758219946-2vd9oifi36761splfhgdb3gks5aj1b2i.apps.googleusercontent.com",
        "GOOGLE_CLIENT_SECRET": "DcdmrlWGJPtKTT-oL3NBCgn9",
        "COOKIE_KEY": "randomworkofgod"
    }
}