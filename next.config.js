/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    NEXT_APIKEY : 'AIzaSyDiTKP8CiwZ_pVl26TUjw9V3SAVCNY4nOU',
NEXT_AUTHDOMAIN : 'next-blog-js.firebaseapp.com',
NEXT_PROJECTID : 'next-blog-js',
NEXT_STORAGEBUCKET : 'next-blog-js.appspot.com',
NEXT_MESSENGING : '860791444324',
NEXT_APPID : '1:860791444324:web:41cb3493a703a957c4a071',
  },
  useFileSystemPublicRoutes: true,
}

