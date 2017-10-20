import React from "react";
import { connect } from "react-redux";
import { addComments, deleteComments, editComment } from "./actions.js";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class App extends React.Component {
  

    remove = id => {
        let arr = this.state.posts;
        arr.splice(id, 1);
        this.setState({ comments: arr });
    };

    render() {
        let input;
        return (
            <div style={styles}>
                {/* <Hello name="CodeSandbox" /> */}
                <h2>Start editing to see some magic happen {"\u2728"}</h2>
                <div>
                    {this.props.comment.map(b =>
                        <div><p key={b.id}>{b.text}</p>
                            <button onClick={() => {
                                let id = b.id
                                console.log(id)
                                this.props.onDelete(id)
                            }}
                            >Delete Comment</button>
                            <button onClick={() => {
                                let b=this.props.comment
                                if (b.id)
                                    return (
                                    <form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            this.props.onEdit(b.text);
                                        }}
                                    >
                                    <textarea
                                        rows="4"
                                        cols="50"
                                        value={b.text}
                                    />
                                </form>)
                            }}>Edit Comment</button>
                            </div>
                    )}
                    
                </div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.onSubmit(input.value);
                    }}
                >
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Add Comment"
                        ref={node => {
                            input = node;
                        }}
                    />
                    <div>
                        <button type="submit">Add Comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        comment: state.comment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addComments(text));
        },
        onDelete: (id) => {
            dispatch(deleteComments(id))
        },
        onEdit: (id) => {
            dispatch(editComment(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);