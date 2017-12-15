import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import {FieldType, registerType} from 'simple-react-form'

const propTypes = {
    ...FieldType.propTypes
}

const defaultProps = {}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

function DatePickerComponent(props) {
    const {classes} = props;
    const openDialog = () => {
        if (this.props.disabled) return
        this.refs.input.openDialog()
    }

    return (
        <div onTouchTap={this.openDialog.bind(this)}>
            <form className={classes.container} noValidate>
                <TextField
                    ref='input'
                    fullWidth
                    value={this.props.value}
                    floatingLabelText={this.props.useHint ? null : this.props.label}
                    hintText={this.props.useHint ? this.props.label : null}
                    errorText={this.props.errorMessage}
                    disabled={this.props.disabled}
                    onChange={(_, date) => this.props.onChange(date)}
                    {...this.props.passProps}

                    {/*id="date"*/}
                    label={this.props.useHint ? null : this.props.label}
                    type="date"
                    defaultValue="1970-01-01"
                    {/*className={classes.textField}*/}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    )
}

DatePickerComponent.propTypes = propTypes
DatePickerComponent.classes = PropTypes.object.isRequired
DatePickerComponent.defaultProps = defaultProps

export default withStyles(styles)(DatePickerComponent);

// export default class DatePickerComponent extends React.Component {
//
//     openDialog() {
//         if (this.props.disabled) return
//         this.refs.input.openDialog()
//     }
//
//     render() {
//         return (
//             <div onTouchTap={this.openDialog.bind(this)}>
//                 <DatePicker
//                     ref='input'
//                     fullWidth
//                     value={this.props.value}
//                     floatingLabelText={this.props.useHint ? null : this.props.label}
//                     hintText={this.props.useHint ? this.props.label : null}
//                     errorText={this.props.errorMessage}
//                     disabled={this.props.disabled}
//                     onChange={(_, date) => this.props.onChange(date)}
//                     {...this.props.passProps} />
//             </div>
//         )
//     }
// }

// DatePickerComponent.propTypes = propTypes
// DatePickerComponent.defaultProps = defaultProps

registerType({
    type: 'date-picker',
    component: DatePickerComponent
})
