
let content = document.querySelector("input");
content.addEventListener("input", contentSearch);

key = "AIzaSyCxBH8V7FcGOsvWrHKwpn-R0JGg0S3tuhE";
// key = "AIzaSyAVw3g4D6A4E2eMKQPOW8rCQRJfEP3VNhE";

api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet`
// api = `https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&maxResults=20`;

async function contentSearch(){
    console.log(content.value);

    // use promise function to use api and fetch data with resolve and reject
    let getData = new Promise(function(resolve,reject){
        // console.log(resolve);
        // let data = fetch(`${api}&${key}`)
        // console.log(data);
    })
    // getData.then(function(a){
    //     console.log("resolve",a);
    //     let data = fetch(`${api}&${key}`)
    //     console.log(data);
    // }).catch((error)=>{
    //     console.log("reject",error);
    // })


    // using async await
    let res = await fetch(`${api}&key=${key}$q=${content.value}`)
    console.log(res)
    let data = await res.json();
    console.log(data);

}