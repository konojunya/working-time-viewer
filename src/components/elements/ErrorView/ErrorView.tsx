import { h } from "preact";

export const ErrorView = () => (
  <div>
    <h1>計算が失敗しました。以下のルールが守られているか確認してください。</h1>
    <ul>
      <li>github projectの中にTODOはありますか？</li>
      <li>assigneeやタイトルに「（xh）」と時間を明記していますか？</li>
    </ul>
    <p>
      以上のことが守られているのにエラーがでるようであれば、
      <a
        href="https://github.com/konojunya/working-time-viewer/issues/new"
        target="_blank"
        rel="noopener"
      >
        issue
      </a>
      へ問題を書いてください。
    </p>
  </div>
);
