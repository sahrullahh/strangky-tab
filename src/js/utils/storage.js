export const isLiveBg = (value = null) => {
    if(value != null) {
        value = Boolean(value);
        localStorage.setItem('livebg', value);

        return value;
    }

    const isLiveBg = localStorage.getItem('livebg');

    if(isLiveBg == null) return null;
    return localStorage.getItem('livebg') == 'true';
}

export const user_name = (value = null) => {
    if(value != null) localStorage.setItem('name', String(value));
    return localStorage.getItem('name');
}

export const time_format = (value = null) => {
    if(value != null) localStorage.setItem('timeformat', value);
    return localStorage.getItem('timeformat');
}
