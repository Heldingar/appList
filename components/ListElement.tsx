import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './interfaces/Item';
import ListModal from './ListModal';

const ListElement = ({ title, description }: Item): JSX.Element => {
	return (
		<View style={styles.container}>
			<View style={{ display: 'flex', flexDirection: 'row' }}>
				<View style={{ margin: 5, marginRight: 15 }}>
					<Icon name={'check-circle'} size={25} />
				</View>
				<View>
					<Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
					<Text>{description}</Text>
				</View>
			</View>
			<ListModal />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		margin: 5,
		padding: 10,
		backgroundColor: '#cecece',
		borderRadius: 5,
	},
});

export default ListElement;