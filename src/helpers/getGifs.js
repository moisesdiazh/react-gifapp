
    //creamos la función    //mandamos la categoria como argumento
export const getGifs = async(category) => {
    
        //función http                                      PARA PODER FILTRAR POR CATEGORIA
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=DwLkZmdF45qLOM5yjnIQyPE2CKkJ5zTl`;
                const resp = await fetch(url);

        //desestructuramos data 
        const {data} = await resp.json();

        //mapeamos lo que queremos (id, title, la imagen)
        const gifs = data.map(img => {

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,

            }
        })

        return gifs;
    }