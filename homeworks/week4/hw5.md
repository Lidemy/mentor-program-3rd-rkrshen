## 請以自己的話解釋 API 是什麼
API 是一種讓前端與後端或者不同平台之間互相溝通、交換資料的方法。藉由定義好的規則發出 request 便能獲取相對應的 response。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. **410 Gone**：表示所請求的資源不再可用，但大多數伺服器端不會使用這個狀態碼，而是直接使用404狀態碼。
2. **503 Service Unavailable**：由於臨時的伺服器維護或者過載，伺服器目前無法處理請求。這個狀況是暫時的，並且將在一段時間以後恢復。
3. **508 Loop Detected**：伺服器在處理請求時陷入無窮迴圈。

參考資料： wikipedia

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://rkrs.restaurants

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                    | /restaurants/5      |
| 刪除餐廳   | DELETE   | /restaurants     | name: 餐廳名 | 無              |
| 新增餐廳   | POST   | /restaurants/:id     | 無 | 無              |
| 更改餐廳   | PATCH   | /restaurants/:id     | name: 餐廳名 | 無              |
