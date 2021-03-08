import React from 'react';

//controlled component

class FormValidation extends React.Component {

    state = {
        message: ''
    }

    updateMessage = (newText) => {
        this.setState(() => ({
            message: newText
        }))
    }

    render() {
        return (
            <div>
                <p>Controlled component</p>
                <input
                    type='text'
                    placeholder='Your message here..'
                    value={this.state.message}
                    onChange={(event) => this.updateMessage(event.target.value)}
                />
                <p>the message is : {this.state.message}</p>
            </div>
        )
    }
}
export default FormValidation;