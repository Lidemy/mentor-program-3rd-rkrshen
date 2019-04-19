# 教你朋友 CLI

### 什麼是 CLI ?
CLI (Command Line Interface) 是透過輸入文字的方式對電腦下指令，使電腦執行相對應的動作。在 CLI 上下指令會同步反映在 GUI (Graphical User Interface) 上。

一般來說，CLI 更節省電腦資源、提高生產效率，開發成本較低。GUI 的學習成本低、使用體驗更好，但生產效率相對較低，開發成本高。

### 使用 CLI
* **Windows**
    開啟 cmd，或者可以安裝 [cmder](https://cmder.net/)，下載完解壓縮後即可開啟使用。
    
* **Mac**
    直接打開 terminal，或者安裝 [iTerm2](https://www.iterm2.com/)，可透過安裝 zsh 美化介面。
    
### 常用指令介紹

| 動作 | 指令 | 說明 |
| --- | --- | --- |
| Print Working Directory | pwd | 取得目前所在位置 |
| List | ls | 列出目前資料夾底下的檔案 |
| Change Directory | cd | 切換資料夾 |
| Manual | man | 查看指令說明 |
| Make Directory | mkdir | 建立新資料夾 |
| touch | touch | 建立新檔案或更改最後修改時間 |
| Copy | cp | 複製檔案 |
| Move | mv | 移動檔案或改名 |
| Remove | rm | 刪除檔案 |
| Clear | clear | 清除 terminal 上的內容 |

### 所以，這些指令怎麼用呢？

##### 資料夾切換
```
#切換至 wifi 資料夾
1. $cd wifi (相對路徑)
2. $cd /User/rkrs/wifi (絕對路徑)

#切換至上一層資料夾
$cd ..

#切換至 home 資料夾
$cd ~

#切換至 home 資料夾裡的 wifi 資料夾
$cd ~/wifi
```

##### 建立檔案
```
#建立一個 afu.js 檔案
$touch afu.js

如果 afu.js 已經存在，則會更改最後修改時間
```

##### 複製檔案
```
#複製一份 afu.js 成 hello.js
$cp afu.js hello.js

#複製一個 wifi 資料夾成 hello 資料夾
$cp -r wifi hello

增加 -r 參數，即使發現錯誤也會強制執行複製 
```

##### 移動檔案或更名
```
#將 afu.js 移動至 wifi 資料夾裡
$mv afu.js wifi

#將 afu.js 重新命名成 hello.js
$mv afu.js hello.js
```

##### 刪除檔案
```
#刪除 afu.js
$rm afu.js

#刪除 wifi 資料夾
$rmdir wifi
或是
$rm -r wifi

#刪除這個資料夾裡所有的 .js 檔案
$rm *.js
```

##### 列出檔案詳細資料
```
#列出這個資料夾裡的所有檔案及詳細資料
$ls -al

參數 -al 中
a 代表包括以 . 開頭在內的資料
l 則表示完整檔案的權限、擁有者以及建立、修改時間
```

### 學長只能幫你到這了
以下列出了一些參考資源，想精進 CLI 的功力還是得靠自己多練習。

[[CMD101] Command Line 超新手入門](https://www.lidemy.com/courses/enrolled/386965)

[Git 教學：終端機及常用指令介紹](https://gitbook.tw/chapters/command-line/command-line.html)

[Mac OS X Terminal 101：终端使用初级教程](https://www.renfei.org/blog/mac-os-x-terminal-101.html)

