var http_dog = function (targetUrl) {
    //建立 XMLHttpRequest 實例才能發送ajax
    var ourRequest = new XMLHttpRequest();
    // 設定http方法和目標網址
    ourRequest.open('GET', targetUrl)
    // 一但request事件完成後執行該函式，回傳的json為字串，需用JSON.parse轉換成可讀物件
    ourRequest.onload = () => {
        let ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData)
        document.querySelector('img').src = ourData.message
    }
    // 一但ourRequest open了即可發送 http 一次，並關閉 open 狀態
    ourRequest.send()
}

http_dog('https://dog.ceo/api/breeds/image/random')
