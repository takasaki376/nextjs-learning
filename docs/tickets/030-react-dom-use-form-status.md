# TASK-030: useFormStatus

## 概要

TodoForm内のSubmitButtonを独立させ、親formの送信状態を子から取得して表示する。

## 学習目的

`useFormStatus`の購読範囲と、`useActionState`が返すpendingとの役割の違いを理解する。

## 前提

TASK-029完了。React 19系を前提とし、実装開始時にReact／React DOMの実バージョンを確認すること。

## 対象URL

`/hooks/use-form-status`

## 主な対象ファイル

- `src/app/hooks/use-form-status/page.tsx`
- `src/app/hooks/use-form-status/components/TodoForm.tsx`
- `src/app/hooks/use-form-status/components/SubmitButton.tsx`

## 実装内容

- [ ] Server Actionを使うTodoFormを用意する
- [ ] 送信ボタンへpendingをpropsで渡す比較版を作る
- [ ] SubmitButtonをformの子となるClient Componentへ分離する
- [ ] `react-dom`から`useFormStatus`をimportする
- [ ] pending中に「追加中...」と表示しdisabledにする
- [ ] `useActionState`のpendingと同じ操作で比較する

## 実装上のポイント

`useFormStatus`はReact本体ではなく`react-dom`のHookで、呼び出したコンポーネントを囲む最寄りの親formの送信状態を読む。formを定義するコンポーネント自身ではなく、その子から利用する。`useActionState`は特定Actionの結果stateとpendingを扱い、`useFormStatus`は親form submissionの状態・データ等へ局所的にアクセスする。

## 業務アプリでの利用例

- 申請・承認フォームの送信ボタン
- ファイル登録フォームの局所pending表示
- 複数formを持つ管理画面の個別送信状態

## AIへ実装を依頼する学習方針

このタスクでは、AIにコードを書かせることだけでなく、人が業務上の利用シーンと技術選定の意図を整理し、AIが実装へ反映しやすい指示として伝える練習も行う。AIへ依頼する前に、少なくとも「誰が・どの場面で使うか」「現在何に困っているか」「期待する操作と結果」「技術上・業務上の制約」「今回の対象外」「どの観測結果で完了とするか」を具体化する。

- [ ] AIへの依頼文に、利用者、利用シーン、解決したい問題を記載する
- [ ] 期待する入力、操作、出力、失敗時の挙動を記載する
- [ ] Server／Client Componentの境界、URL状態、通常関数など、比較すべき代替案を記載する
- [ ] パフォーマンス、アクセシビリティ、セキュリティ等、このタスクで守る制約を記載する
- [ ] 実装しない範囲と、過度な共通化・最適化を避ける条件を記載する
- [ ] DevTools、Profiler、ログ、テスト等による確認方法を依頼時点で記載する
- [ ] 情報が不足する場合、AIに重要な前提を明示または確認させ、暗黙の仮定で実装範囲を広げさせない
- [ ] AIが生成したコードについて、依頼内容のどの指示がどの実装判断へ反映されたかレビューする

ソースコードの学習メモは、APIの構文説明ではなく「利用シーンから実装判断へ至る過程」を後から追跡できる内容にする。該当する要所では、次の定型表現を使用する。

```text
学習メモ: 利用シーン - 誰がどの状況でこの処理を必要とするか
学習メモ: 指示の要点 - AIへ渡した要件・制約のうち実装へ影響した内容
学習メモ: 採用理由 - 代替案と比較して、この実装を選んだ理由
学習メモ: 不採用条件 - この方法を使うべきでない条件
学習メモ: 検証方法 - 意図どおり反映されたと判断する観測方法
```

すべての分類を全箇所へ機械的に記載する必要はない。設計境界、状態管理、データ取得、副作用、最適化、エラー処理など、判断理由がコードだけでは分かりにくい箇所へ必要な分類を選んで記載する。
## AIコーディング時のコメントルール

- [ ] `学習メモ:`で始まる日本語コメントを重要箇所へ付けるようAIに指示する
- [ ] 例: `// 学習メモ: useFormStatusはこのボタンを囲む最寄りのformの送信状態を購読する`
- [ ] Hookの提供元、利用可能な階層、`useActionState`との差を説明する

## 確認方法

- [ ] Actionを意図的に遅延し、表示・disabled・二重送信防止を確認する
- [ ] 複数formで別のformのpendingへ反応しないことを確認する
- [ ] React DevToolsでコンポーネント階層を確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] 親form送信中だけSubmitButtonがpending表示になる
- [ ] `useActionState` pendingとの比較が記録されている

## 学習後に説明できること

- [ ] `useFormStatus`の提供元と購読範囲
- [ ] 2種類のpendingの意味と利用場所

## 使うべきではないケース

form外の一般通信状態、Action結果全体の管理、親formと無関係な操作状態には使わない。

