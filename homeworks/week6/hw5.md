## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. ```<canvas />``` 定義圖形，比如圖表和其他圖像,標籤只是圖形容器，必须使用 script 來繪製圖形。
2. ```<noscript />``` 用来定義在 script 未被執行時的替代内容。
3. ```<video />``` 定義視訊內容，目前支援 MP4、WebM、Ogg 等三種格式。

## 請問什麼是盒模型（box modal）
是 html 元素的空間定位模型，會把每一個元素分成 content(內容本身大小), padding(往內擠壓的空間), margin(往外擴充的空間), border(邊框)。其中，使用 box-sizing 可以讓 border 算進 padding 空間裡面，就不影響外面的排版。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* inline: 想針對多個物件做橫排時，inline 的元素連在一起會在同一行，不會換行。 
* block: 想針對多個物件做直排時，不管 block 元素的前面後面是什麼，他就是會換行，而寬度預設會撐到最大。
* inline-block: 想針對多個物件做橫排，又想調整各種屬性時，inline-block 能在不換行的狀況下設定 padding-top, padding-bottom, width, height, background-image。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static: 預設參數，會根據原本的定位自動排版。
* relative: 針對物件原來的位置做篇移顯示。
* absolute: 物件會從資料流當中抽離，獨立出來，並尋找具有定位設定的父層（position: relative/absolute/fixed;）來定位。
* fixed: 固定在畫面上的指定位置，不會因為滾動而跑版。
