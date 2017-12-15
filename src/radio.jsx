import React from 'react'
import Radio from 'material-ui/Radio'
// import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import { FormControlLabel } from 'material-ui/Form';
import * as Colors from 'material-ui/colors'
import {FieldType, registerType} from 'simple-react-form'
import styles from './styles'

const propTypes = {
  ...FieldType.propTypes,
  /**
   * The options for the select input. Each item must have label and value.
   */
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    description: React.PropTypes.string
  })).isRequired
}

const defaultProps = {

}

export default class RadioComponent extends React.Component {

  renderItems () {
    return this.props.options.map((item) => {
      return (
        <div key={item.value}>
          <FormControlLabel
              value="male"
              control={<Radio />}
              label={item.label}
              checked={item.value === this.props.value}
              onChange={() => this.props.onChange(item.value)}
              disabled={this.props.disabled}
              style={{ marginBotton: 16, marginTop: 16 }}
          />
          <div
          style={{ marginLeft: 40, color: Colors.grey[500], cursor: 'pointer' }}
          onClick={() => this.props.onChange(item.value)}>
            {(item.description || '').split('\n').map((text, index) => <div key={index}>{text}</div>)}
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div style={styles.fieldContainer}>
        <div style={styles.mirrorLabel}>
          {this.props.label}
        </div>
        {this.renderItems()}
        <div style={styles.errorMessage}>{this.props.errorMessage}</div>
      </div>
    )
  }
}

RadioComponent.propTypes = propTypes
RadioComponent.defaultProps = defaultProps

registerType({
  type: 'radio',
  component: RadioComponent
})
