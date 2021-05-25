require('dotenv').config();

const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const postToIg = (palette) => {
    const cookieStore = new FileCookieStore('./cookies.json')
    const client = new Instagram({
        username,
        password,
        cookieStore
    })

    igCaption = generateIgCaption(palette);
    console.log(igCaption);

    collage = 'collage.jpg';

    ;
    (async () => {
        // URL or path of photo
        const photo = collage;

        await client.login()

        // Upload Photo to feed or story, just configure 'post' to 'feed' or 'story'
        const {
            media
        } = await client.uploadPhoto({
            photo: photo,
            caption: igCaption,
            post: 'feed'
        })
        console.log(`https://www.instagram.com/p/${media.code}/`)
    })()
};

const checkIgLogin = () => {
    const client = new Instagram({ username, password })
 
    ;(async () => {
      await client.login()
      const profile = await client.getProfile()
     
      console.log(profile)
    })()
};

function generateIgCaption(palette) {
    const today = new Date();
    const todayString = getFormattedDate(today);

    const paletteString = generatePaletteString(palette);

    const hashtags = '\n#collageoftheday #cotd #collageart #collageartwork #digitalcollage #patchwork #digitalpatchwork #grayscale #blacknwhite #bnw #blackandwhite #bw'

    const igCaption = '#Collage ' + todayString + paletteString + hashtags;


    return igCaption;
}

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = (date.getHours()<10?'0':'') + date.getHours();
    let minute = (date.getMinutes()<10?'0':'') + date.getMinutes();

    return year + month + day + ' | ' + hour + ':' + minute;
}

function generatePaletteString(palette) {
    const paletteString = '\nPalette: [' + palette[0] + ', ' + palette[1] + ', ' + palette[2] + ']';

    return paletteString;
}

exports.postToIg = postToIg;
exports.checkIgLogin = checkIgLogin;
