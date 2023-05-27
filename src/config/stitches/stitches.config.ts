import { createStitches } from "@stitches/react";
import {violet, mauve,green, red} from "@radix-ui/colors";

export const {styled: configedStyled} = createStitches({
    theme: {
        colors: {
            ...violet,
            ...mauve,
            ...green,
            ...red,

            primary1: '$violet1',
            primary2: '$violet2',
            primary3: '$violet3',
            primary4: '$violet4',
            primary5: '$violet5',
            primary6: '$violet6',
            primary7: '$violet7',
            primary8: '$violet8',
            primary9: '$violet9',
            primary10: '$violet10',
            primary11: '$violet11',
            primary12: '$violet12',

            secondary1: '$mauve1',
            secondary2: '$mauve2',
            secondary3: '$mauve3',
            secondary4: '$mauve4',
            secondary5: '$mauve5',
            secondary6: '$mauve6',
            secondary7: '$mauve7',
            secondary8: '$mauve8',
            secondary9: '$mauve9',
            secondary10: '$mauve10',
            secondary11: '$mauve11',
            secondary12: '$mauve12',

            success1: '$green1',
            success2: '$green2',
            success3: '$green3',
            success4: '$green4',
            success5: '$green5',
            success6: '$green6',
            success7: '$green7',
            success8: '$green8',
            success9: '$green9',
            success10: '$green10',
            success11: '$green11',
            success12: '$green12',

            danger1: '$red1',
            danger2: '$red2',
            danger3: '$red3',
            danger4: '$red4',
            danger5: '$red5',
            danger6: '$red6',
            danger7: '$red7',
            danger8: '$red8',
            danger9: '$red9',
            danger10: '$red10',
            danger11: '$red11',
            danger12: '$red12',
        }
    }
})