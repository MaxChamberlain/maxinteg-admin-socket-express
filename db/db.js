const fs = require('firebase-admin');
const serviceAccount = {"type": "service_account", "project_id": "maxinteg-admin","private_key_id": "f8fb8c73af1e66236213981a66f583f6e9255ccd","private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCqw3yEbAPh/VMa\ncFXa/QGR82jmMhqTp4DcoNsJZcfMtBbgtWB6bsKpYSX4DXJnU2iRFe90Yvv2SuV3\nxSVmYxNs7g5ILv3zbgs+1aCISr+ADgdMcyCZ8N9keF7+tYTtS2hNepOwymvh073q\n0bwVwxOwaIYBKjzTZvnuG2yegg57UKHICy1GurPRfsZuIUcCutt6nPXTFOEndaAz\nnThYMpVO5K669+GdCCbch1O42EUJ6oX6y6vUJewAffSnH7KuRIAsOYa7TDX/eGgG\nco2QKyg9DMClrPHFFT8L1lL8k5ee7ad/Y8QG6miqbu1LM5F3U1gYT0neuFyfaOJa\n6KoyNscVAgMBAAECggEACixFr3zg2VZ2XDGbh8WBUbDSy73p4+h7boldqyhnV/xV\njZL4maqeCamqMaYZberj5JrOLlyUPpa1J2a1BO27k0Z2TtoP0m/4lwhyfRQY5vfO\n+wCzzT/yiwF5xUpKjjlrEAyQnlxcw3ISExpmDlTWCDEd5JVf1MdCdesn1CSS2Mk6\nlQgGGS75MzvEceNrsHVXWYWYvMUCR7Lr/uqgf6ZOGKL6Ll9eHwjrJ5jRFE+TDhzF\nzrQDtrj7M3BaM4LEw3cTZ/vDW/rn6GWC98DCnmtefiIA/Vu008me/gtsquRdDIs8\nlNftfhYaZWZLO0WNtB9QtI5uTgUvq2cg0/KJoeVtKQKBgQDsP4/r76DzJVydRerz\nI6t9jREMthgkziGN4ugWl4Q1zTtYMVlQq1sg/E/sEyJQydXV/b9hVZnN17vz1ioH\nV05AM0rjhbcLETImSVoWQl2Iu3zVqWe09rlI3xPDPzH7nBEl3tuWn+ksx5vCP3hz\nVgxPv5Zs0ym4OvFNcVEl+borXQKBgQC5Cln4XTXS8+bGnLjF8AH8peYeCWHXPDf6\nhivmedzL7fpDSU8QQPaYkgKcHGoVHwdVObH1PQOflRd2xLufSteSX4EyIpEHHCVI\nwO7OEs7K7e65NfV1wO/vDLfke+ynT8Wp3XpvVOa+tqruwBPmiCenCIm6YOFUT00o\n0Onqcq0HGQKBgAQ0BU1/T+/DhGhP7CQzSEPNlLYTL07IVBSAKvzr6TBD3IBvMFWd\nFtv5YTqkBIJHdQR/pT4IFdpxsihecRT8WqoNv5FYua76uVexCmdG+v8JxujOQMgZ\nc6Z2QZXBtBPz7OItmt6NLcrcKktEcdIrf8CTegupnh5m/hAQqg7w6H0JAoGAdDI9\n4SqXHAsxBdNwbEuU09RRttbpa8FS3azXcHlh32VnXE1yqqBAufomTWXCb9T2Q9xh\nFcDkv5deDqTntNXInRAADz2JmM9h0lflHd7NoLzcxc1OgE1R3ek8qOvw5ffABjUg\nJz1HUMdge2B+nqstS0SfSDyCAvFxYIof+atdYDECgYAKGX2ptGIkSgjnGWe+C9RO\nSXQ38CNGJHqpj2JUUCwW9lDkvCF/is5XRLeIJugbrwlsDXicmdO6XkNUSy1BPvxV\nFBzCDP7N4YpmabkOzyRlbiUU/9JdzIXBC6sQoUPwe9eXs5weYdUM6omvKeDpCxXy\n2fv3h9mIfCaSlzNY8v/l9w==\n-----END PRIVATE KEY-----\n","client_email": "firebase-adminsdk-mqmyw@maxinteg-admin.iam.gserviceaccount.com","client_id": "116600344564265517329","auth_uri": "https://accounts.google.com/o/oauth2/auth","token_uri": "https://oauth2.googleapis.com/token","auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mqmyw%40maxinteg-admin.iam.gserviceaccount.com"}

let db = null

const connectDB = async () => {
    fs.initializeApp({
        credential: fs.credential.cert(serviceAccount)
    });
    db = fs.firestore();
    console.log('Loaded database instance.');
}

const getDB = () => {
    return db;
}

module.exports = { connectDB, getDB }