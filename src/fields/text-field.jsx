import React from 'react';
import TextField from 'material-ui/TextField';
import {FieldType, registerType} from 'simple-react-form';

const propTypes = {
  changeOnKeyDown: React.PropTypes.bool,
  fieldType: React.PropTypes.string,
};

const defaultProps = {
  changeOnKeyDown: true,
};

class TextFieldComponent extends FieldType {

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  onKeyDown(event) {
    if (event.keyCode == 13) {
      this.props.onChange(event.target.value);
    }
  }

  onBlur(event) {
    this.props.onChange(this.state.value);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.changeOnKeyDown) {
      this.props.onChange(event.target.value);
    }
  }

  render() {
    var fieldType = this.props.fieldType || this.type;
    return (
      <TextField
      ref='input'
      fullWidth={true}
      value={this.state.value || ''}
      type={fieldType}
      floatingLabelText={this.props.useHint ? null : this.props.label}
      hintText={this.props.useHint ? this.props.label : null}
      errorText={this.props.errorMessage}
      disabled={this.props.disabled}
      onChange={this.onChange.bind(this)}
      onKeyDown={this.onKeyDown.bind(this)}
      onBlur={this.onBlur.bind(this)}
      {...this.passProps} />
    );
  }
}

TextFieldComponent.propTypes = propTypes;
TextFieldComponent.defaultProps = defaultProps;

registerType({
  type: 'text',
  component: TextFieldComponent,
});

class StringFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'text';
  }
}

registerType({
  type: 'string',
  component: StringFieldComponent,
});

class NumberFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'number';
  }
}

registerType({
  type: 'number',
  component: NumberFieldComponent,
});

class DateFieldComponent extends TextFieldComponent {
  constructor(props) {
    super(props);
    this.type = 'date';
  }
}

registerType({
  type: 'date',
  component: DateFieldComponent,
});
