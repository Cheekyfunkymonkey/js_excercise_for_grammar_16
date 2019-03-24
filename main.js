// 課題1: クイズデータをAPI経由で取得するクラスを作成する
// - クラス名はQuizFetcherクラスとする
// - 次のクラスメソッドを作成する
//   - fetchMultipleQuizData : 4択問題のクイズのみをAPI経由で取得する
//   - fetchTrueOrFalseQuizData : 2択問題のクイズのみをAPI経由で取得する
// - クイズデータ取得に利用するAPI
//   - https://opentdb.com/api_config.php
// - その他参考
//   - 【JavaScript】fetchを使って外部データを取得する
//     - https://tsuyopon.xyz/learning-contents/web-dev/javascript/frontend/how-to-use-the-fetch-api-in-js/
//   - MDN : fetch
//     - https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch

const END_POINT = "https://opentdb.com/api.php?amount=10";

class QuizFetcher {
  static fetchMultipleQuizData() {
    const url = `${END_POINT}&type=multiple`;
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("課題２の解答：", data.results);
      });
  }

  static fetchTrueOrFalseQuizData() {
    const url = `${END_POINT}&type=boolean`;
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("課題３の解答：", data.results);
      });
  }
}

// 課題2: fetchMultipleQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
QuizFetcher.fetchMultipleQuizData();

// 課題3: fetchTrueOrFalseQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
QuizFetcher.fetchTrueOrFalseQuizData();
