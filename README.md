# ReadMnistData

## 準備

$ npm install

$ gulp download

上記を実行する代わりに、手動でファイルをおいても良い。
その場合、次のようにする。


dataディレクトリ以下に、

    train-images-idx3-ubyte.gz
    train-images-idx1-ubyte.gz

を手動で用意する。ファイルは、MNISTのサイト

http://yann.lecun.com/exdb/mnist/

から取得する。


## 使い方

    $ node src/readMnist.js


## 参考サイト

1. MNINST

  http://yann.lecun.com/exdb/mnist/


2. C++でMNINSTのデータを読み込む

  http://nonbiri-tereka.hatenablog.com/entry/2014/09/18/100439
