export default {
  header: 'Time picker',
  headerText: '`v-time-picker` は、多くの既存のVuetifyコンポーネントで利用できるスタンドアロンコンポーネントです。これは、時間を選択するための視覚的表現をユーザに提供します。',
  components: ['v-time-picker'],
  examples: [{
    timeLight: {
      header: 'タイムピッカー',
      desc: 'タイムピッカーは、デフォルトでライトテーマが有効になっています。'
    },
    timeColorable: {
      header: 'タイムピッカーの色',
      desc: '時間ピッカーの色は、 `color` と `header-color` で設定できます。 `header-color` propが与えられていなければ、ヘッダーの色は　`color` prop値が使用されます。。'
    },
    timeDialogAndMenu: {
      header: 'ダイアログやメニューでタイムピッカーを表示する',
      desc: 'タイムピッカーは柔軟なので、望む方法で表示させることができます。'
    },
    time24hFormat: {
      header: '24時間形式のタイムピッカー',
      desc: 'タイムピッカーは24時間形式に切り替えることができます。'
    },
    timeAllowedTimes: {
      header: '選択可能な時間の制限',
      desc: '配列、オブジェクト、関数を使用することで、選択可能な時間を制限することができます。'
    },
    timeWidth: {
      header: 'タイムピッカーの幅の設定',
      desc: 'タイムピッカーのの幅を指定したり、幅を可能な限り全幅にすることができます。'
    }
  }],
  props: {
    'v-time-picker': {
      format: '利用可能なオプションは `ampm` と` 24hr` です。',
      allowedHours: '選択可能な時間の幅を制限します。',
      allowedMinutes: '選択可能な分の幅を制限します。',
      scrollable: 'マウスのスクロールで時間/分を変更します。',
      min: '選択可能な最小時刻を設定します。',
      max: '選択可能な最大時刻を設定します。'
    }
  }
}
