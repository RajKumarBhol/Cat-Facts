let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");


async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("error: ",e);
        return "NO FACT FOUND";
    }
}


btn.addEventListener("click",async()=>{
    let facts=await getFacts();
    console.log(facts);
    let p=document.querySelector("#result");
    p.innerHTML=facts;
    });


