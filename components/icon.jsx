import { isDark } from '../pages/index';
/**
 * Ikon Simple Icons
 * @param {string} icon - Data ikon (dari simple-icons, contoh: siGithub)
 * @param {string} size - Ukuran ikon (default: 24)
 */
const Icon = ({ icon }) => {    
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      fill={isDark ? 'white' : 'black'}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;