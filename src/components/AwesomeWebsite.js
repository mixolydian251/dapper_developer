import React from 'react';

class AwesomeWebsite extends React.Component{
  state = {
    beautiful: true,
    fast: true,
    maintainable: true,
    buggy: false,
  };

  render(){
    <div>
      <AwesomeWebsite className="website__pretty"/>
    </div>
  }
}