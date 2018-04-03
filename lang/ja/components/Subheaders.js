export default {
  header: 'Subheaders',
  headerText: '`v-subheader`コンポーネントは、リスト内でセクションを区切るために使用されます。',
  components: ['v-subheader'],
  examples: [{
    list: {
      header: 'リストのサブヘッダー',
      desc: 'サブヘッダーは、リスト内で下階層の情報を説明する際によい感じに機能します。'
    },
    grid: {
      header: 'グリッドサブヘッダー',
      desc: 'サブヘッダーは、ユーザが見ているものに属性を追加できます。'
    },
    menu: {
      header: 'サブヘッダーメニュー',
      desc: 'サブヘッダーを使用すると、様々な種類のユーザの行動を分けることができます。'
    },
    social: {
      header: 'ソーシャルメディアとサブヘッダー',
      desc: 'ソーシャルメディアのインタラクションでサブヘッダーを使用する場合です。'
    }
  }],
  props: {
    inset: 'インデント(72px)を追加します。'
  }
}
