//node dellAutomation3.js --config=sample.json --config2=textSample.json

//npm init -y
//npm install puppeteer
//npm install minimist
//Aa8suA6D7#2Ee9d

let minimist=require("minimist");
let puppeteer=require("puppeteer");
let fs=require("fs");

let args=minimist(process.argv);
// // console.log(args.url);

let configJSON=fs.readFileSync(args.config ,"utf-8");
let configJSON2=fs.readFileSync(args.config2,"utf-8");

let configJSO=JSON.parse(configJSON);//this line is converting string that we have written in config.JSON into an object
let configJSO2=JSON.parse(configJSON2);
// console.log(configJSO);

run();

async function run(){

    let browser=await puppeteer.launch({
        defaultViewport:null,
        args:[
            "--start-maximized"
        ],
        headless: false,
        slowMo:50
    });

    //get tab
    let pages=await browser.pages();
    let page=pages[0];

    //goto url
    await page.goto("https://www.dell.com/en-in");

    // //clicking sign in
    await page.waitForSelector(configJSO.signinbtn);
    await page.click(configJSO.signinbtn);

    //create account button click
    // let btnclick=document.querySelectorAll("a.mh-btn.mh-btn-secondary.navigate[role='button']")
    // console.log(btnclick);
    // //a.mh-btn.mh-btn-secondary.navigate[role="button"]
    await page.goto("https://www.dell.com/dci/idp/dwa/register?response_type=id_token&client_id=228467e4-d9b6-4b04-8a11-45e1cc9f786d&redirect_uri=https://www.dell.com/identity/global/in/228467e4-d9b6-4b04-8a11-45e1cc9f786d&scope=openid&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256&tag=cid%3dcd2b5dd5-6d9b-4663-92f3-cfad4aff3c94%2caid%3d1c283ee3-e64a-482b-aac9-19617fb6e65b&nonce=m31k0pyj5qx04sj4xx3ayg4u&state=aHR0cHM6Ly93d3cuZGVsbC5jb20vSWRlbnRpdHkvZ2xvYmFsL0luL2NkMmI1ZGQ1LTZkOWItNDY2My05MmYzLWNmYWQ0YWZmM2M5ND9jPWluJmw9ZW4mcj1hcCZzPWNvcnAmYWN0aW9uPXJlZ2lzdGVyJnJlZGlyZWN0VXJsPWh0dHBzOi8vd3d3LmRlbGwuY29tL2VuLWlu");

    //Typing first name
    await page.waitForSelector(configJSO.input0);
    await page.click(configJSO.input0);
    await page.type(configJSO.input0,(configJSO2.input0).substring(10,(configJSO2.input0).length-1));

    //Typing Last name
    await page.waitForSelector(configJSO.input1);
    await page.click(configJSO.input1);
    await page.type(configJSO.input1,(configJSO2.input1).substring(10,(configJSO2.input1).length-1));

    //Typing Email Address 
    await page.waitForSelector(configJSO.input2);
    await page.click(configJSO.input2);
    await page.type(configJSO.input2,(configJSO2.input2).substring(10,(configJSO2.input2).length-1));

    //Typing Password
    await page.waitForSelector(configJSO.input3);
    await page.click(configJSO.input3);
    await page.type(configJSO.input3,(configJSO2.input3).substring(10,(configJSO2.input3).length-1));

    //Clicking the checkbox
    await page.waitForSelector(configJSO.input5);
    await page.click(configJSO.input5);

    //create account button
    await page.waitForSelector(configJSO.input6);
    await page.click(configJSO.input6);
    

};
