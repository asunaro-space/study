// JSのsampleフォルダの下のJSファイルに対してHTML要素を削除する

const path = require('path')
const fs = require('fs');
const { text } = require('stream/consumers');

// const target = 'sample';
// const tmpdirPath = path.resolve(__dirname, target);

// const tmplist = fs.readdirSync(tmpdirPath);
// tmplist.forEach(console.log);

// ファイルタイプの列挙体（のつもり）
const FileType = {
    File: 'file',
    Directory: 'directory',
    Path: 'path',
    Unknown: 'unknown',
    Extend: 'extend'
  }
  
  /**
   * ファイルの種類を取得する
   * @param {string} path パス
   * @return {FileType} ファイルの種類
   */
  const getFileType = path => {
    try {
      const stat = fs.statSync(path);
  
      switch (true) {
        case stat.isFile():
          return FileType.File;
  
        case stat.isDirectory():
          return FileType.Directory;
  
        default:
          return FileType.Unknown;
      }

    } catch(e) {
      return FileType.Unknown;
    }
  }
  
  /**
   * 指定したディレクトリ配下のすべてのファイルをリストアップする
   * @param {string} dirPath 検索するディレクトリのパス
   * @return {Array<File>} ファイルのパスのリスト
   */
  const listFiles = dirPath => {
    const ret = [];
    const paths = fs.readdirSync(dirPath);
  
    paths.forEach(a => {
      const path = `${dirPath}/${a}`;
  
      switch (getFileType(path)) {
        case FileType.File:
          console.log(toString.call(getFileType(path)))

          ret.push(path);
          break;
  
        case FileType.Directory:
          ret.push(...listFiles(path));
          break;
        default:
          /* noop */
      }
    })
    return ret;
  };
  
  const dirPath = path.resolve(__dirname, 'sample');
  let list = listFiles(dirPath);

  // listにはファイルの絶対パスが入っているのでファイルオブジェクトを作った方が良い

  for (let index = 0; index < list.length; index++) {
    console.log(toString.call(list[index]))
    if(list[index].split('.')[1] === 'js'){
        continue;
    }
    console.log((list[index]))
    delete list[index]
  }
  
  const removeArray = [
    '<!DOCTYPE html>',
    '<html lang="ja">',
    '<head>',
    '<meta charset="utf-8">',
    '<script>']

  let content;

  for(i = 0; i < list.length; i++){
    content = fs.readFileSync(list[i])
    // console.log(content)
    console.log(fs.readFileSync(list[i]))
    content += text;
  }
  console.log(list);