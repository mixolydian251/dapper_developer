import React from 'react';

class TextType extends React.Component {
  state = {
    startDelay: 1500,
    timeVariation: 90,
    textIndex: 0,
    text: [
      'Where design meets performance!',
      "Let's build your dream website!",
      'Check out my code on Github!',
      'HTML5, CSS3, Javascript, React & More!'
    ],
    textState: ''
  };

  typeText = () => {
    let time = this.state.startDelay;
    this.state.text[this.state.textIndex].split('').forEach((letter, i) => {
      time += Math.ceil(Math.random() * this.state.timeVariation) + this.state.timeVariation;

      setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.setState(prevState => ({ textState: prevState.textState + letter }));
        });

        if (i === this.state.text[this.state.textIndex].length - 1) {
          setTimeout(() => {
            this.startBackspace();
          }, 2000);
        }
      }, time);
    });
  };

  startBackspace = () => {
    this.backspaceText().then(res => {
      console.log(res);
      this.setState(
        prevState => ({
          textIndex:
            this.state.text.length > 1 && prevState.textIndex !== this.state.text.length - 1
              ? prevState.textIndex + 1
              : 0
        }),
        () => {
          this.typeText();
        }
      );
    });
  };

  backspaceText = () => {
    return new Promise(resolve => {
      let time = 0;
      for (let i = this.state.textState.length; i >= 0; i--) {
        time += 50;

        setTimeout(() => {
          window.requestAnimationFrame(() => {
            this.setState({
              textState: this.state.textState
                .split('')
                .splice(0, i)
                .join('')
            });
          });

          if (i === 0) {
            resolve('Promise Resolved!');
          }
        }, time);
      }
    });
  };

  componentDidMount() {
    this.typeText();
  }

  render() {
    return (
      <div className="textType">
        <span>
          {this.state.textState}
          <span className="textType__cursor">|</span>
        </span>
      </div>
    );
  }
}

export default TextType;
