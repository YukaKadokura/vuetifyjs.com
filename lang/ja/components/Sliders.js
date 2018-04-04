export default {
  header: 'Slider',
  headerText: '`v-slider` コンポーネントは、数値入力における視覚化に優れています。これは、数値のユーザデータを収集するのに便利です。',
  components: ['v-slider'],
  examples: [{
    continuous: {
      header: '連続値スライダー',
      desc: '精度が重要でなければ、連続値スライダーを使用するのがよいでしょう。'
    },
    discrete: {
      header: '離散値スライダー',
      desc: '離散値スライダーは、正確な現在の量（数値）を表示するthumbラベルを提供します。 `step` propを使用すると、step値以外の数値を選択させないようにできます。'
    },
    icons: {
      header: 'アイコン',
      desc: '`append-icon` や `prepend-icon` を使用すると、スライダーにアイコンを追加できます。'
    },
    editableNumericValue: {
      header: '編集可能な数値を利用する',
      desc: 'スライダーを他のコンポーネントと組み合わせて表示することができます。'
    },
    customColors: {
      header: '色のカスタマイズ',
      desc: 'スライダーの色は、propsの `color`、` track-color`、 `thumb-color`を使って設定できます。'
    }
  }],
  props: {
    step: '0より大きい場合に、ticks（スライダーのメモリ）のstep間隔を設定します。',
    thumbColor: 'thumbとthumbラベルの色を設定します。',
    thumbLabel: 'thumbラベルを表示します。',
    ticks: '',
    trackColor: 'trackの色を設定します。'
  }
}
