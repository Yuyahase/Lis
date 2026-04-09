# LP制作ガイドライン

## デザイン原則

### 絵文字・emoji は使わない
HTMLやCSSに絵文字（🐗 📝 ✅ など）を使わない。
ブラウザや環境によってレンダリングが異なりデザインが崩れるため。

**代替手段:**
- アイコン → インラインSVG（`<symbol>` + `<use>`でスプライト管理）
- マスコット・ロゴ → 実際のPNG/SVGファイルを `<img>` タグで配置
- チェックマーク（✓ ✗）→ Unicode記号はCSSで色・サイズ制御すれば許容
- 警告マーク（⚠️）→ SVGアイコンに置き換える

### ブランドロゴの配置ルール
このプロジェクトには2種類のロゴファイルがある：

| ファイル | 用途 |
|---|---|
| `ウリボーロゴ/Lis_ウリボーロゴ_文字入り_背景透過.png` | ヘッダー・フッターなどブランド名を示す場所 |
| `ウリボーロゴ/Lis_ウリボーロゴ_背景透過.png` | ヒーロー・各セクション内のマスコット装飾用途 |

**暗い背景（フッターなど）でのロゴ対応:**
```css
/* 黒・濃色背景ではフィルターで白抜きにする */
.logo-img--footer { filter: brightness(0) invert(1); }
```

**オレンジ背景（CTAなど）ではドロップシャドウで視認性補助:**
```css
.mascot-img--white { filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25)); }
```

### SVGアイコンの管理方法
`<body>` 直下に `<svg style="display:none">` ブロックを置き、`<symbol>` でアイコンを定義。
使用箇所では `<svg class="icon"><use href="#icon-name"/></svg>` で参照。

サイズはCSSクラスで統一：
```css
.icon    { width: 24px; height: 24px; }  /* 基本 */
.icon-sm { width: 16px; height: 16px; }  /* テーブル内など小さい用途 */
.icon-md { width: 28px; height: 28px; }  /* フローステップなど */
.icon-lg { width: 36px; height: 36px; }  /* カードのメインアイコン */
.icon-btn{ width: 20px; height: 20px; }  /* ボタン内 */
```

アイコンの色は親要素の `color` を `currentColor` で継承させる。
カード・セクションごとにルート要素に `color: var(--primary)` などを指定するだけでよい。

## ファイル構成
```
index.html   - マークアップ（SVGスプライト含む）
style.css    - スタイル
script.js    - スクロールアニメーション・インタラクション
```

## カラー変数（style.css :root で定義済み）
```
--primary:   #C17A3A  ブランドオレンジ
--primary-d: #9E6020  ホバー用ダーク
--primary-l: #E8956D  アクセントライト
--cream:     #FDF6EF  背景ライト
--cream-d:   #F5EBD9  背景ミディアム
--blue:      #3B82F6  AI/テクノロジー訴求
--green:     #16A34A  OKマーク・エンタープライズ
--red:       #DC2626  NGマーク・強調
```
