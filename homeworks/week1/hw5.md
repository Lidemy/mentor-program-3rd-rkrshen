## 請解釋後端與前端的差異。
可以用使用者的角度簡單分類，使用者操作過程中「看得見的」屬於前端，「看不見的」屬於後端。
* 前端的部分，包含 html 架構、CSS 樣式、Javascript 程式所組成的網頁，再經由瀏覽器解析呈現出來的樣子都屬於前端。

* 後端包含了服務器、資料庫、應用程序，並使用 API 來與前端溝通。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 按下 Enter 後，瀏覽器開始執行「搜尋」這個動作。
2. 瀏覽器先向 DNS 詢問 Google 這個網址的 IP 位址。
3. 瀏覽器得到 IP 位址後，將「搜尋 JavaScript 」這個請求(Request)送到取得的 IP 位址（也就是 Google）。
4. Google 的 Sever 收到 request 後，從資料庫撈資料，並將資料返回給 Server。
5. Server 比對資料後再回傳前端。
6. 前端收到資料後，將資料塞進程式碼，瀏覽器根據寫好的 HTML/CSS/Javascript 呈現出搜尋結果的頁面。


## 請列舉出 3 個 command line 指令並且說明功用
1. `$sudo`
    為 " Substitute user do" 的縮寫，這是一個強大的指令，能讓使用者暫時獲得系統管理員(root)的權限。也就是說，任何使用者在執行需要系統管理員身份才能執行的命令時，只要在前面加上 `sudo`，就能輕易執行命令。當然，使用時可能還是得輸入系統管理員的密碼才行。
    
    參考自 [Mac OS X Terminal 101：终端使用初级教程](https://www.renfei.org/blog/mac-os-x-terminal-101.html)
2. `$find`
    這個指令可以根據搜尋關鍵字搜尋指定路徑內的檔案，什麼奇奇怪怪的搜尋要求都可以達到，但前提是要能把所有參數背起來。一般使用語法如下：
    `$find path -option`
    在上面語法中，path 代表路徑，option 可以輸入像是 name, size, user, type ...之類的參數，然後根據參數在後面補上搜索的條件。例如：
    ```
    #在 HOME 中查詢所有 .txt 的檔案
    $find ~ -name "*.txt"
    
    #在這個資料夾中查詢大於 512k 的檔案
    $find . -size +512k
    ```
    參考自 [Linux中find常見用法](https://blog.xuite.net/lidj37/twblog/179517563-Linux%E4%B8%ADfind%E5%B8%B8%E8%A6%8B%E7%94%A8%E6%B3%95)
3. `$whoami`
    真的！你沒看錯！這真的是一個指令，他能印出你的使用者名稱。例如我在 terminal 輸入 `$whoami`，將返回 `rkr-mac` 。