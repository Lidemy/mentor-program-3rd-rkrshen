## 交作業流程

1. 首先，先在 terminal 開啟 mentor-program-3rd-rkrshen 資料夾。
`git cd mentor-program-3rd-rkrshen`

2. 在 master 新增一個 branch （以 week1 為例）並切換至新的 branch。
`git branch week1`
`git checkout week1`

3. 作業完成至一個段落後，新增一個 commit，並輸入更動內容。
`git commit -am "add homework"`

   其中，添加 -a 參數，就可以檢測出有修改的檔案(不包括新增的檔案)。加上 -m 參數，就可以指令提交 “提交訊息”。
   
4. 作業完成後，把作業 push 到 Github 上。
`git push origin week1`

5. 到 Github 上將看到 "Your recently pushed branch"，按下旁邊的 **Compare&pull request** 按鈕請求與 master 合併。

6. 進入 open a pull request 頁面，確認 base 是 master，compare 是 week1 後，輸入標題以及詳細內容。輸入完畢後按下 **Create pull request** 按鈕。

7. 到作業區**按照格式**建立 issue，並貼上 pull request 的網址以及任何想交流的內容，然後按下 **Submit new issue**。

8. 如果作業OK（老師 merge pull request 並關掉 issue），回到 master，並把 Github 上最新的 repository pull 下來。如果作業不OK，回到第一步從頭來過。
`git checkout master`
`git pull origin master`

9. 把 week1 的 branch 刪除。
`git branch -d week1`
