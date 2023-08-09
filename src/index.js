import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/latest-post', {
	edit: Edit,
	save: Save,
});
