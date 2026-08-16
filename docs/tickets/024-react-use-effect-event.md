# TASK-024: useEffectEvent

## 概要

疑似リアルタイム接続でReactive Effectとイベント的処理を分離し、設定変更による不要な再接続を防ぐ。

## 学習目的

Effect依存、stale closure、最新state参照、Effect Eventの適用範囲を理解する。

## 前提

TASK-023完了。`useEffectEvent`の学習にはReact 19.2以上が必要。直下に`package.json`がないため、実装開始時に実プロジェクトのReactを確認すること。

## 対象URL

`/hooks/use-effect-event`

## 主な対象ファイル

- `src/app/hooks/use-effect-event/page.tsx`
- `src/app/hooks/use-effect-event/components/RealtimeTodoDemo.tsx`
- `src/app/hooks/use-effect-event/lib/mock-todo-service.ts`

## 実装内容

- [ ] Timerまたは簡易EventEmitterで外部イベントを疑似再現する
- [ ] `workspaceId`、`notificationEnabled`、`notificationMessageFormat`を用意する
- [ ] 最初は`useEffect`だけで接続し、設定変更時の再接続を記録する
- [ ] Effect Eventで通知処理を分け、最新設定を参照する
- [ ] 接続はworkspace変更時だけ再作成する
- [ ] cleanupで二重接続を防ぐ

## 実装上のポイント

接続先を決める`workspaceId`はReactive依存、接続イベント発生時だけ読む通知設定はEffect Eventへ分ける。Effect EventはEffect内から呼び、依存配列を黙らせる逃げ道にしない。外部接続があるためClient Componentが必要だが、初期一覧取得はServer Componentに残せる。

## 業務アプリでの利用例

- WebSocket／EventSourceの通知設定参照
- 外部SDKイベントと最新テーマ・権限の連携
- Analytics、Loggingで最新コンテキストを付与

## AIコーディング時のコメントルール

- [ ] 重要なコードへ`学習メモ:`から始まる日本語コメントを付けるようAIに指示する
- [ ] 例: `// 学習メモ: workspaceIdは接続を決めるReactive値だが、通知設定はイベント発生時だけ最新値を読む`
- [ ] 依存配列から分離できる根拠、cleanup、stale closureを説明する
- [ ] lint回避だけを理由にしたコメント・実装は避ける

## 確認方法

- [ ] Consoleで接続・切断回数を改善前後で比較する
- [ ] 再接続なしで最新通知設定が反映されることを確認する
- [ ] Strict Modeでcleanupが正しく機能することを確認する
- [ ] `学習メモ:`を検索する

## 完了条件

- [ ] workspace変更時だけ再接続する
- [ ] 外部イベントが最新設定を参照する

## 学習後に説明できること

- [ ] Reactive EffectとEffect Eventの違い
- [ ] stale closureと不要な再接続の原因

## 使うべきではないケース

依存配列を回避したいだけの場合、ユーザー操作の通常イベント、値の変化に追随すべき処理には使わない。

