## 什麼是 DOM？
DOM (Document Object Model 文件物件模型)，由 document 開始一層一層延伸出 head, body 等元素。當我們在選取元素時便是透過 DOM 的順序抓取該元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
當網頁發生事件時：
* 捕獲：事件沿著 DOM 結構，從 document 往下傳遞到 target，這個過程稱為補獲。
* 冒泡：由 target 往上傳遞事件回到 document，這個過程稱為冒泡。
<br>
事件傳遞順序是「先捕獲，後冒泡」，但當你觸發該元素的位置在 target 上時，因為就是觸發元素本身，則沒有補獲、冒泡之分。

## 什麼是 event delegation，為什麼我們需要它？
事件代理，就是由目標元素的父元素們去做事件監聽。我們可以透過 event delegation 達到：

1. 比較有效率，如果每一個事件內容都差不多的話，不用寫一堆 function 去監聽每一個事件。
2. 可以處理動態新增的情形，例如 appendChild 出來的元素不可能時時手動去加上 `addEventListener()`

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
* event.preventDefault() 阻止瀏覽器預設的行為，常見應用像是表單沒填完就無法按送出。
* e.stopPropagation() 防止事件冒泡到 DOM 上，但還是會執行同層的監聽效果。例如有兩重疊父子元素皆有綁定事件，為了不讓一個動作引起多層觸發，就必須設置停止事件傳遞。
