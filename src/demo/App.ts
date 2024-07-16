import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import "./css/App.css";

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
import layout from "../lib/layouts/khmer";

class App {
  keyboard: Keyboard;
  layoutName: string;

  constructor() {
    this.layoutName = 'kh';

    /**
     * Adding preview (demo only)
     */
    document.querySelector("body").innerHTML = `
      <div class="simple-keyboard-preview">
        <textarea class="input" readonly></textarea>
      </div>
      <div class="simple-keyboard"></div>
    `;

    this.keyboard = new Keyboard({
      ...layout,
      debug: true,
      layoutName: this.layoutName,
      onChange: (input) => this.onChange(input),
      onKeyPress: (button) => this.onKeyPress(button),
      newLineOnEnter: true,
    });

    console.log(this.keyboard);
  }

  handleShiftButton = (button: string) => {
    const key = button.replace(/\W/g, '')
    const list = this.layoutName.split('-')
    switch (button) {
      case '{en}':
        this.layoutName = 'en'
        break
      case '{kh}':
        this.layoutName = 'kh'
        break
      case '{lock}':
        list.includes(key) ? list.pop() : list.push(key)
        this.layoutName = list.join('-')
        break
      case '{shift}':
        if (list.includes('en')) return
        list.splice(1, ...(list.includes(key) ? [1] : [0, key as any]))
        this.layoutName = list.join('-')
        break
    }
    this.keyboard.setOptions({ layoutName: this.layoutName })
  };

  onChange = (input) => {
    (document.querySelector(".input") as HTMLInputElement).value = input;
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * Shift functionality
     */
    this.handleShiftButton(button);
  };
}

export default App;
