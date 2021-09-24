import React from 'react';
import { connect } from 'react-redux';
import Page1UI from './Page1UI';

function Page1(props) {
	return (
		<React.Fragment>
			<Page1UI {...props} />
		</React.Fragment>
	);
}

const mapStateToProps = ({page1Reducer}) => page1Reducer

export default connect(mapStateToProps)(Page1);
