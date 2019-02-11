import React from 'react';

class NameMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'sa340967',
      typeVal: '',
      nameTypeValue: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }


  changeHandler(e) {
    var self = this;
    self.setState({
      typeVal: e.target.value
    })
    console.log(this.state.typeVal);
  }

  submitHandler() {
    var self = this;
    $.get('https://www.behindthename.com/api/random.php?number=1&key='+this.state.apiKey+'&usage='+this.state.typeVal, function(data) {
      var theword = $(data).find('name').text();
      console.log('get value is ' + theword);
      self.setState({
        nameTypeValue: theword
      });
    })
  }

  render() {
    return (
      <div id="main_content">
        <NameOutput NameOutput={this.state.nameTypeValue} />
        <NameTypeSelect changeHandler={this.changeHandler} />
        <SubmitButton submitHandler={this.submitHandler} />
      </div>
    )
  }
};

class NameTypeSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let options = {
      'default': 'Default Random',
      'fairy': 'Fairy',
      'goth': 'Goth',
      'hb': 'Hillbilly',
      'rap': 'Rapper',
      'trans': 'Transformer',
      'witch': 'Witch',
      'wrest': 'Wrestler'
    }
    return (
      <select name="name_type" id="name_type" ref="nametype" onChange={this.props.changeHandler}>
          {
            Object.keys(options).map(function(key){
              return (
                <option key={key} value={key}>{options[key]}</option>
              )
            })
          }
      </select>
    )
  }
};

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="submitbutton" onClick={this.props.submitHandler}>Name Me!</div>
    )
  }
}

class NameOutput extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="name_output">
        {this.props.NameOutput}
      </div>
    )
  }
}

export default NameMe;
