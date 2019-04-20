# 教你朋友 Git

### 講笑話有學問，你一定要用 Git
1. 人的記憶不可靠，不把笑話記錄下來你很容易忘記你之前講過的笑話。

2. 光是用文字檔記起來還不夠，因為你的笑話需要修改，還會演進，每個版本都必須留著以備不時之需。

3. 如果你以後事業做大要跟別人一起建構笑話，那你更需要知道哪個好笑的部分是你寫的，哪個不好笑的部分是別人寫的。

這些狀況我們都可以透過使用 Git 來解決，哪怕你有再多笑話、再多版本、跟再多的人一起編笑話，他全部都能幫你保存起來讓你方便管理。

### Git 的特性
1. 分散式版本控制軟體
2. 在你自己的電腦就能運行
3. 可和很多人一起開發
4. 任何修改都能快速追蹤
5. 隨時可以回到你想要的版本

### 手把手教你使用 Git
1. 打開 terminal 輸入 `$git version`，如果未安裝 Git，將引導你安裝。

2. 對你的笑話專案進行版本控制：
    * 切換至笑話專案資料夾 `$cd haha`
    * 初始化 `$git init`

3. 初始化後可以輸入 `$git status` 查看目前的狀態。

4. 把笑話加進版本控制吧！輸入 `$git add haha.md` 把你的笑話加入索引，如果你想新增多筆檔案，可以用 `$git add .` 一次完成。

5. 記得把檔案加入後，必須要提交才算完成版本控制，方法如下：`$git commit -m "新增笑話"` 其中 `-m` 是可以讓你後面接一段訊息的參數。

6. 現在你已經完成了版本控制，你可以輸入 `$git log` 查看詳細情形。

7. 當你修改過你的笑話後，你必須再次 commit，可以輸入 `$git commit -am "修改笑點"` 其中，參數 `a` 代表 add 指令，可省略輸入 `$git add haha.md` 指令的步驟。

8. 當你想要發展下一個版本時，建議你新開一個 branch 來做控管。新的 branch 就像是分身，能在不影響本體(master)的情況下編輯笑話的內容，也就是說，在你新版本的笑話編輯好以前，別人還是只能看到原版的笑話。輸入指令如下：`$git branch new-version` branch 後面接的是自定義的名稱。

9. 記得在建立新的 branch 之後，必須輸入 `$git checkout new-version` 才會切換到新的 branch 上編輯。

10. 新版本笑話編輯完，可以使用 merge 與原版合併。
    * 先切換到 master 的 branch
    `$git checkout master`
    * 再進行合併
    `$git merge new-version`
    
11. 萬一合併之後還想回到原版呢？這時只要輸入 `$git log` 查看你想回去的版本，最前面有一段亂碼（假設是長這樣 2bb09af），複製起來，然後再輸入 `$git checkout 2bb09af` 就可以回到那個版本的狀態，很厲害吧？

### 很多 git 聚集的地方叫 Github
上一段學完，你應該就會使用基本的 Git 操作了，身為朋友我就好人做到底，再教你怎麼使用 Github 這個以圖形介面操作 Git 的網站。

1. 首先，去 [Github](https://github.com/) 註冊一個帳號，然後新增一個 repository，名稱要跟自己本地的笑話資料夾一樣。

2. 建立好後，打開 terminal 輸入 `$git remote add origin https://github.com/你的帳號/專案名稱.git`，就可以把你本機的資料夾與 Github 上的資料夾做關聯。

3. 關聯之後，可以輸入 `$git push -u origin master` 把你的笑話推到 Github 上。當然，如果你想推新的 branch 上去也可以，將 master 改成 branch 名稱即可。

4. 如果你想將新的 branch 與 master 合併，只要點選 pull requests 即可。

5. 當有 Github 上有新的內容，你必須同步到你的電腦上，那就需要輸入 `$git pull origin master`，以確保你的電腦裡是最新版本的檔案。

只要按照這樣的原則，要跟別人一起建構笑話就變得相當容易，相當好管理。另外，偷偷告訴你，其實我使用的 vscode 裡面就有內建 git 管理工具，可用圖形介面操作常用指令，也是很方便喔。但還是建議先熟練這些指令操作啦...

這些實用網站提供給你參考，祝你笑話事業一飛沖天！
[Git 超新手入門](https://www.lidemy.com/courses/enrolled/379441)
[連猴子都懂得Git入門指南](https://backlog.com/git-tutorial/tw/)
[Git Cheatsheet正體中文版](http://scars377.github.io/git-cheatsheet-cht/)
[Git官方的教學文件](https://git-scm.com/book/zh-tw/v2)
[線上分支學習網站](https://learngitbranching.js.org/)
[Awesome Git中文版](https://github.com/hylerrix/awesome-git)

