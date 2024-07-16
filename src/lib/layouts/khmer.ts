import { LayoutItem } from "../interfaces";

/**
 * Layout: Khmer
 * Source: dkc (https://github.com/dkc-1379)
 */
export default <LayoutItem>{
  layout: {
    kh: [
      "« ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩ ០ គ ធ {bksp}",
      "{tab} ឆ ឹ េ រ ត យ ុ ិ ោ ផ ៀ ឨ ឮ",
      "{lock} ា ស ដ ថ ង ហ ្ ក ល ើ ់ {enter}",
      "{shift} \\ ឋ ខ ច វ ប ន ម ំុ ។ ៊ {shift}",
      "{en} {space} {en}"
    ],
    'kh-lock': [
      "« ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩ ០ គ ធ {bksp}",
      "{tab} ឈ ឺ ែ ឬ ទ ួ ូ ី ៅ ភ ៀ ឨ ឮ",
      "{lock} ាំ ៃ ឌ ធ ឣ ះ ញ គ ឡ ើ ់ {enter}",
      "{shift} \\ ឍ ឃ ជ េះ ព ណ ំ ំុ ។ ៊ {shift}",
      "{en} {space} {en}"
    ],
    'kh-shift': [
      "» ! ៗ \" ៛ % ៌ ័ ៏ ( ) ៝ ឪ {bksp}",
      "{tab} ឈ ឺ ែ ឬ ទ ួ ូ ី ៅ ភ ឿ ឧ ឭ",
      "{lock} ាំ ៃ ឌ ធ ឣ ះ ញ គ ឡ ោៈ ៉ {enter}",
      "{shift} / ឍ ឃ ជ េះ ព ណ ំ ុះ ៕ ? {shift}",
      "{en} {space} {en}"
    ],
    'kh-shift-lock': [
      "» ! ៗ \" ៛ % ៌ ័ ៏ ( ) ៝ ឪ {bksp}",
      "{tab} ឆ ឹ េ រ ត យ ុ ិ ោ ផ ឿ ឧ ឭ",
      "{lock} ា ស ដ ថ ង ហ ្ ក ល ោៈ ៉ {enter}",
      "{shift} / ឋ ខ ច វ ប ន ម ុះ ៕ ? {shift}",
      "{en} {space} {en}"
    ],
    en: [
      "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{lock} a s d f g h j k l ; ' {enter}",
      "{shift} z x c v b n m , . / {shift}",
      "{kh} {space} {kh}"
    ],
    'en-lock': [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "{tab} Q W E R T Y U I O P { } |",
      '{lock} A S D F G H J K L : " {enter}',
      "{shift} Z X C V B N M < > ? {shift}",
      "{kh} {space} {kh}"
    ],
  },
  display: {
    '{en}': 'EN',
    '{kh}': 'KH',
    '{tab}': 'Tab',
    '{lock}': 'Lock',
    '{shift}': 'Shift',
    '{enter}': 'Enter',
    '{bksp}': 'Backspace',
    '{space}': ' '
  }
};
