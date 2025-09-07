import { proxy} from 'valtio';

const state = proxy ({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './TJ_Logo.png',
    fullDecal: './TJ_Logo.png',
})

export default state 