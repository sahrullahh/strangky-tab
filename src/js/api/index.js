// weather API

export const weather = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.response);
  }
};

export const getCurrentLocation = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=id`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.response);
  }
};
