import openai from "./chatgpt";

const textQuery = async (prompt: string, model:string) => {

    const res = await openai.createCompletion({
        model,
        prompt,
        temperature:0.9,  //for creativity in answers
        top_p:1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text)
    .catch(
        (err) =>
         `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
         );

         return res;
} ;

const imageQuery = async (prompt: string) => {
    const res = await openai.createImage({
        prompt,
        n:1,
        size: "512x512"
    }).then(res => res.data.data[0].url)
    .catch(
        (err) =>
         `ChatGPT was unable to generate an image for that! (Error: ${err.message})`
         );

         return res;
}

export {textQuery, imageQuery};