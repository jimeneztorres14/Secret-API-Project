import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

const API_URL = "https://secrets-api.appbrewery.com/";

app.get("/", async (req, res)=>{

    try{
        const response = await axios.get(`${API_URL}random`);
        const result = response.data;
        console.log(result);
        res.render("index.ejs", {secret: result.secret, user: result.username});
    }catch(error){
        console.error("failed to make request:", error.message);
        res.render("index.ejs", {secret: error.message})
    }
});

app.listen(port, ()=>{
    console.log(`This server is running at port ${port}.`)
})