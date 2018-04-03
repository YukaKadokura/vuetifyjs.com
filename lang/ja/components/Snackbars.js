export default {
  header: 'Snackbar',
  headerText: ' `v-snackbar` コンポーネントは、ユーザにクイックメッセージを表示させるために使用されます。スナックバーは、配置、スナックバーが隠れるまでの時間の設定、コールバックをサポートします。',
  components: ['v-snackbar'],
  examples: [{
    position: {
      header: 'Position',
      desc: '標準のスナックバーは、何かの処理が発生した際に注目させるのに便利です。'
    },
    contextual: {
      header: 'コンテクスチュアル',
      desc: 'また、あなたのアプリケーションの実装に合った色を、スナックバーに適用できます。'
    }
  }],
  props: {
    multiLine: 'スナックバーをより高い位置まで出させます。（モバイル向け）',
    timeout: 'スナックバーが自動で隠れるまでの時間を設定します。',
    vertical: 'スナックバー内のコンテンツを縦に積みます。（モバイル向け）'
  }
}
