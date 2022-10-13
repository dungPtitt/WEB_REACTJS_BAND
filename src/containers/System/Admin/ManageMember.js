import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { getUsers, handleCreateUser, deleteUser } from '../../services/userService';
import './ManageMember.scss';
// import ModalUser from './ModalUser';
// import { emitter } from '../../utils/emmiter';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class ManageMember extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // console.log('check state', this.state)
        return (
            <div className='mamage-member-container'>
                <div className='manage-member-title'>Them thong tin thanh vien band nhac</div>
                <div className='manage-member-editer'>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={handleEditorChange}
                    />
                </div>
                <button className='save-member'>Luu thong tin</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageMember);
