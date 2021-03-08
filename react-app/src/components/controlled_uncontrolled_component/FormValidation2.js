import React from 'react';


class FormValidation2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef();
    }

    handleChange(newText) {
        console.log(newText);
    }

    render() {
        return (
            <div>
                <input type='text'
                    placeholder='Your mesage is here...'
                    ref={this.input}
                    onChange={(event) => this.handleChange(event.target.value)}
                />
            </div>
        )
    }
}

export default FormValidation2;