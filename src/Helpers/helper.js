

export const setHeaders = () => ({
    Accept : 'application/json'

});




export const parseQueryString = (query,key) => {
    try {
        if(query != null) {
            let url = new URL(query);
            let value = url.searchParams.get(key);
            return value;
        }
        return null;

    } catch (error) {
        return { error: 'Invalid query string' };
    }
}

export const convertDateTime = (input) => {
   return new Date(input).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
}
export const logger = (...args) => {
    if (process.env.NODE_ENV === 'production') return;
    console.log(...args)
}



export const baseUrl = "https://swapi.dev/";

