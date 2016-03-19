// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1556298231328124', // your App ID
        'clientSecret'    : '4e8e7f06e2d155fde6e178b783cc0702', // your App Secret
        'callbackURL'     : 'http://www.sentisense.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'mbF12SL8UHiRCSY9cT3Tny9CJ',
        'consumerSecret'     : '2EnWVpPBDX8zZmh2tyiHTGGcdhnUFSJdHyCD1ML7vKeKc7tKK2',
        'callbackURL'        : 'http://www.sentisense.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '1073518431381-68o4o7ndn9p4ejqopogf16dfg8v9oer3.apps.googleusercontent.com',
        'clientSecret'     : 'gkqKU6xmbxARa-CQWMVT5hWx',
        'callbackURL'      : 'http://www.sentisense.com/auth/google/callback'
    }

};