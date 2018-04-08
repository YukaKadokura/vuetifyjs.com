export default {
  header: 'Date/month picker',
  headerText: '`v-date-picker` は、多くの既存のVuetifyコンポーネントで利用できるスタンドアロンコンポーネントです。日付/月を選択するための視覚的表現をユーザに提供します。',
  components: ['v-date-picker'],
  examples: [{
    dateLight: {
      header: 'デートピッカーの種類',
      desc: 'デートピッカーには、縦向き **（デフォルト）** と横向きの2つの向きのバリエーションがあります。'
    },
    dateColorable: {
      header: 'デートピッカーの色',
      desc: 'デートピッカーの色は `color` と `header-color` を使って設定できます。 `header-color` propが与えられていなければ、ヘッダーは `color` propの値を使用します。'
    },
    dateDialogAndMenu: {
      header: 'ダイアログとメニューでのデートピッカー',
      desc: 'ピッカーを `v-text-field` に統合する場合は、 `readonly` propを使用することをお勧めします。これにより、モバイルキーボードのトリガーを防ぐことができます。垂直方向のスペースを節約するために、ピッカーのタイトルを非表示にすることもできます。ピッカーはスコープされたslotをエクスポートします。このslotを使用して、保存やキャンセルをすることができます。これにより、ユーザーがキャンセルすると古い値が維持されます。'
    },
    dateAllowedDates: {
      header: '選択可能な日付を指定する',
      desc: '配列、オブジェクト、および関数を使用して、選択可能な日付を指定できます。'
    },
    dateWidth: {
      header: 'デートピッカーの幅の指定',
      desc: 'デートピッカーの幅を指定したり、幅を全幅にすることができます。'
    },
    dateBirthday: {
      header: 'バースデーピッカーとしてのデートピッカー',
      desc: 'デフォルトでは、年の設定から始まり、次に月を設定し、その後日を設定することで完全な誕生日を設定できます。'
    },
    datePickerDate: {
      header: 'デートピッカーで選択された日付の変更に応じた表示',
      desc: 'ピッカーのタイプとアクティブなビューに応じて、選択されている日付の情報を見ることができます。変更されたときにアクションを実行します。'
    },
    dateEvents: {
      header: 'デートピッカーのイベント',
      desc: '配列、オブジェクト、関数を使用してイベントを設定できます。イベントのデフォルトの色を変更するには、 `event-color` propを使用します。'
    },
    dateInternationalization: {
      header: 'デートピッカーの国際化サポート',
      desc: 'デートピッカーは、JavaScript Dateオブジェクトを使用して国際化をサポートしています。 `locale` propを使用してBCP 47言語タグを指定し、 `first-day-of-week` propで週の最初の日を設定します。'
    },
    dateIcons: {
      header: 'デートピッカー内のアイコン',
      desc: 'デートピッカーで使用されるデフォルトのアイコンを上書きすることができます。'
    },
    dateReadonly: {
      header: 'Read Onlyのデートピッカー',
      desc: '`readonly` propを追加すると、新しく日付を選択することを無効にできます。'
    },
    dateCurrent: {
      header: 'デートピッカーでの現在の日付の表示',
      desc: 'デフォルトでは、現在の日付はアウトラインボタンで表示されます。 `show-current` propを追加すると、ボーダーを削除したり、現在の日付として表示されるデフォルトの日付として異なる日付を設定できます。'
    },
    monthLight: {
      header: '月のデートピッカー',
      desc: 'マンスピッカーは、縦向き **（デフォルト）** と横向きの2つの向きのバリエーションがあります。'
    },
    monthColorable: {
      header: 'マンスピッカーの色',
      desc: 'マンスピッカーの色は、 `color` と `header-color` propを使って設定できます。 `header-color` propが与えられていなければ、ヘッダーは `color` propの値を使用します。'
    },
    monthDialogAndMenu: {
      header: 'ダイアログとメニューでのマンスピッカー',
      desc: 'マンスピッカーを `v-text-field` に統合する場合は、 `readonly` propを使用することをお勧めします。これにより、モバイルキーボードのトリガーを防ぐことができます。垂直方向のスペースを節約するために、ピッカーのタイトルを非表示にすることもできます。ピッカーはスコープされたslotをエクスポートします。このslotを使用して、保存やキャンセルをすることができます。これにより、ユーザーがキャンセルすると古い値が維持されます。'
    },
    monthAllowedMonths: {
      header: '選択可能な月を指定する',
      desc: '配列、オブジェクト、および関数を使用して、選択可能な月を指定できます。'
    },
    monthWidth: {
      header: 'マンスピッカーの幅の指定',
      desc: 'マンスピッカーの幅を指定したり、幅を全幅にすることができます。'
    },
    monthInternationalization: {
      header: 'マンスピッカーの国際化サポート',
      desc: 'マンスピッカーは、JavaScript Dateオブジェクトを使用して国際化をサポートしています。 `locale` propを使用してBCP 47言語タグを指定し、 `first-day-of-week` propで週の最初の日を設定します。'
    },
    monthIcons: {
      header: 'マンスピッカー内のアイコン',
      desc: 'マンスピッカーで使用されるデフォルトのアイコンを上書きすることができます。'
    },
    monthReadonly: {
      header: 'Read Onlyのマンスピッカー',
      desc: '`readonly` propを追加すると、新しく日付を選択することを無効にできます。'
    },
    monthCurrent: {
      header: 'マンスピッカーでの現在の日付の表示',
      desc: 'デフォルトでは、現在の日付はアウトラインボタンで表示されます。 `show-current` propを追加すると、ボーダーを削除したり、現在の月として表示されるデフォルトの月として異なる月を設定できます。'
    }
  }],
  props: {
    'v-date-picker': {
      type: 'ピッカーのタイプを決定します。デートピッカーの場合は `date` 、マンスピッカーの場合は `month` を指定します。',
      monthFormat: '月テーブルの月の表示に使用される書式設定関数です。日付（ISO 8601文字列）とロケール（文字列）引数で呼び出されます。',
      allowedDates: 'どの日付を選択できるかを制限するための指定をします。',
      eventColor: 'イベントドットの色を設定します。 これは文字列（すべてのイベントは同じ色になります）または、 `object` を指定できます。attributeはイベントの日付で、valueは指定した日付の色です。または、日付をパラメータとし、その日付の色を返す `function` です。',
      events: '日付をイベントとして印付けします（デートピッカーのみ）。',
      locale: 'ロケールを設定します。 BCP 47言語タグを含む文字列を指定可能です。',
      firstDayOfWeek: '日曜日を0とし、始まる週の最初の曜日を設定します。',
      titleDateFormat: 'デートピッカーのタイトルに表示される日付の文字列の書式をカスタマイズすることができます。日付（ISO 8601文字列）と、ロケール（文字列）引数で呼び出されます。',
      headerDateFormat: 'カレンダーのヘッダーに表示される月の文字列の書式をカスタマイズできます。日付（ISO 8601文字列）とロケール（文字列）引数で呼び出されます。',
      yearFormat: 'カレンダーのヘッダーに表示される年の文字列の書式をカスタマイズできます。日付（ISO 8601文字列）とロケール（文字列）引数で呼び出されます。',
      dayFormat: 'カレンダー内部に表示される日付の文字列の書式をカスタマイズできます。日付（ISO 8601文字列）とロケール（文字列）引数で呼び出されます。',
      yearIcon: '年の隣にアイコンを配置します。',
      min: '選択を許可する月/日の最小値を指定します。',
      max: '選択を許可する月/日の最大値を指定します。',
      pickerDate: '選択された年/月です。',
      nextIcon: '次の年/月ボタンのアイコンを設定します。',
      prevIcon: '前の年/月ボタンのアイコンを設定します。',
      readonly: 'ピッカーを読み取り専用にします（新しい日付を選択したり、年/月を操作することはできません）。',
      scrollable: 'マウスのスクロールで、表示月の変更ができます。',
      showCurrent: '現在の月/日として設定された月/日の表示をするか、現在の月/日を表示するかを切り替えます。'
    }
  }
}
