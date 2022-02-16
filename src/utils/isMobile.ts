import {
  isMobileOnly,
  isAndroid,
  isIOS,
  isWinPhone,
} from 'react-device-detect';
import { logger } from './logger';

export const isMobile = isMobileOnly;
export const isDevice = isAndroid || isIOS || isWinPhone;
logger.log(`[${isMobile ? 'Mobile' : 'Desktop'} Device Detected]`);

export default isMobile;
