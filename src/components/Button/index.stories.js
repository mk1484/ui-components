import React from 'react';
import DefaultBtn from './index.js';

export default stories => stories
    .add('DefaultButton', () => <DefaultBtn>基本のボタン</DefaultBtn>)
    .add('2文字ラベル', () => <DefaultBtn>次へ</DefaultBtn>)
    .add('4文字ラベル', () => <DefaultBtn>削除する</DefaultBtn>);
