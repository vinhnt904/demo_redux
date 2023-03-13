
const getDogImage = async () => {
  const responseRaw = await fetch('https://dog.ceo/api/breeds/image/random')
  const responseJson = await responseRaw.json()
  return responseJson
}

export default {
  getDogImage
}