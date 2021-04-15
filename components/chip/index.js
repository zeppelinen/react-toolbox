import { CHIP } from '../identifiers.js';
import { themr } from '@picryl/react-css-themr';
import { chipFactory } from './Chip.js';
import Avatar from '../avatar';
import theme from './theme.scss';

const Chip = chipFactory(Avatar);
const ThemedChip = themr(CHIP, theme)(Chip);

export default ThemedChip;
export { ThemedChip as Chip };
