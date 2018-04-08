export default {
  header: 'Expansion Panel',
  headerText: ' `v-expansion-panel` コンポーネントは、大量の情報が存在する場合に垂直空間を減らすのに便利です。 コンポーネントのデフォルトの機能は、一度に1つの拡張パネルのみを表示することですが、  `expand` propを使用すると、拡張パネルは明示的に閉じるまで開いたままです。',
  components: ['v-expansion-panel', 'v-expansion-panel-content'],
  examples: [{
    accordion: {
      header: 'アコーディオン拡張パネル',
      desc: 'アコーディオン拡張パネルは、一度に1つのパネルしか開くことができません。'
    },
    expand: {
      header: '展開拡張パネル',
      desc: '展開拡張パネルは、閉じられるまで開いたままです。',
      uninverted: true
    },
    popout: {
      header: 'ポップアウトスタイルとインセットスタイル',
      desc: '拡張パネルには、 `popout` propと `inset` propで起動できる2つのデザインもあります。',
      inverted: true
    },
    focusable: {
      header: 'フォーカス可能な拡張パネルのヘッダー',
      desc: '拡張パネルのヘッダーは、 `focusable` propでフォーカス可能にすることができます。',
      uninverted: true
    }
  }],
  props: {
    'v-expansion-panel': {
      expand: '別の拡張パネルを選択しても、拡張パネルが開いたままになります。',
      focusable: '拡張パネルのヘッダーをフォーカス可能にします。',
      inset: 'インセットスタイルで拡張パネルを開きます。',
      popout: '拡張パネルをポップアウトスタイルで開きます。'
    },
    'v-expansion-panel-content': {
      hideActions: 'コンテンツヘッダーの展開アイコンを非表示にします。'
    }
  }
}
