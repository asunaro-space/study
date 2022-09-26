- .gitフォルダがあるディレクトリではGradleプロジェクトはエラーを出してしまった

- JDKを最新の17系にしたい

- Udemyの学び方
    - 動画を見てノートをとる
    - 動画を見ながらコードを書く
    - 動画内で作成したアプリの仕様書・設計書を書く
    - 動画を見ないでアプリを作成する
        - 動画を見なくても済むようなノートに改善していく

    - LFとCRLFの違い

- [```Git History```の使用方法](https://qiita.com/y-tsutsu/items/2ba96b16b220fb5913be)

- クロージャ

    - 関数内のローカル変数**以外**の変数を取り込んでいる関数

    - 

        ```javascript
        function func(name, price) {
          this.name = name;
          this.price = price;
          
          	closerFunc(){
              console.log(`${name} : ${price}`)
            }
        }
        ```

        ``closerFunc()``は関数内に``name``と``price``というプロパティを持っていないが使用出来る

-   ラベル文を使用した脱出

    -   構文

    -   ```javascript
        ラベル名：{
         	処理 
        }
        ```

        例

        ```javascript
        // ラベルouterつきの繰り返し処理
        outer:
        for (let i = 0; i < 3; i ++) {
        	for (let j = 0; j < 3; j ++) {
        		console.log(i, j, '前');
        		
        		// iが1、jが1のとき、ラベルouterの繰り返し処理を抜ける
        		if (i === 1 && j === 1) {
        			break outer;
        		}
        
        		console.log(i, j, '後');
        	}
        }
        
        console.log('離脱');
        ```

        ​	

        ```bash
        0 0 前
        0 0 後
        0 1 前
        0 1 後
        0 2 前
        0 2 後
        1 0 前
        1 0 後
        1 1 前
        離脱
        ```

        ※なお、``continue``に関してもラベルに関する挙動は同じ

-   配列について

    -   Array

        -   | メソッド名                  | 挙動                   |
            | --------------------------- | ---------------------- |
            | Array.push(x[,y,...])       | 末尾に要素を追加する   |
            | Array.pop()                 | 末尾から要素を取り除く |
            | Array..sushift(x[,y, ....]) | 先頭に引数の要素を追加 |
            | Array.shift()               | 先頭の要素を取りのぞく |

            ```javascript
            // 配列を作成してコンソールに出力
            const arr = [20, 21, 22];
            console.log('元の配列');
            console.log('  ', arr);
            
            // 末尾に追加してコンソールに出力
            arr.push(30, 31, 32);
            console.log('末尾に追加したあとの配列');
            console.log('  ', arr);
            
            // 先頭に追加してコンソールに出力
            arr.unshift(10, 11, 12);
            console.log('先頭に追加したあとの配列');
            console.log('  ', arr);
            
            // 末尾の要素を取りのぞいてコンソールに出力
            const tail = arr.pop();
            console.log('末尾を取りのぞいたあとの値と配列');
            console.log('  ', tail);
            console.log('  ', arr);
            
            // 先頭の要素を取りのぞいてコンソールに出力
            const head = arr.shift();
            console.log('先頭を取りのぞいたあとの値と配列');
            console.log('  ', head);
            console.log('  ', arr);
            ```

            ```bash
            元の配列
               [ 20, 21, 22 ]
            末尾に追加したあとの配列
               [ 20, 21, 22, 30, 31, 32 ]
            先頭に追加したあとの配列
               [
              10, 11, 12, 20, 21,
              22, 30, 31, 32
            ]
            末尾を取りのぞいたあとの値と配列
               32
               [
              10, 11, 12, 20,
              21, 22, 30, 31
            ]
            先頭を取りのぞいたあとの値と配列
               10
               [
              11, 12, 20, 21,
              22, 30, 31
            ]
            ```

​									

​									

-   非同期処理

    -   時間のかかる処理は終了を待たずに先に進め、処理が終わったタイミングで関数を実行するという方式

    -   ``Promiceオブジェクト``

        -   2つのコールバック関数を引数にとる
            -   第1引数＝処理が正常に終了したときに実行する
            -   第2引数＝処理が異常に終了したときに実行する

    -   ``async``と``await``

        -   ``await``を付ける事でPromiseの処理を待ってからプログラムを進める

        -   awaitをつけた関数の戻り値はresolve()の引数になる

        -   ```js
            // 待機用の関数
            function wait(msg, isResolve = true) {
            	// Promiseオブジェクトを戻り値にする
            	return new Promise((resolve, reject) => {
            		// 100ミリ秒待って実行
            		setTimeout(() => {
            			if (isResolve) {
            				// isResolveがtrueなら解決
            				resolve(msg);
            			} else {
            				// isResolveがfalseなら拒否
            				reject(`error（${msg}）`);
            			}
            		}, 100);
            	});
            };
            
            // async実験用の関数
            async function exec() {
            	console.log('--- 処理開始 ---');
            
            	console.log(await wait('処理A'));
            	console.log(await wait('処理B'));
            
            	console.log('処理途中');
            
            	const c = await wait('処理C');
            	const d = await wait('処理D');
            	console.log(c);
            	console.log(d);
            
            	console.log('--- 処理終了 ---');
            };
            
            // 処理の開始
            console.log('--> 処理1');
            console.log('--> exec()', exec());
            console.log('--> 処理2');
            ```

              

            ```bash
            --> 処理1
            --- 処理開始 ---
            --> exec() Promise { <pending> }
            --> 処理2
            処理A
            処理B
            処理途中
            処理C
            処理D
            --- 処理終了 ---
            ```

            