export const SMALL_DEVICE = 400;
export const isSmallDevice = (screenWidth: number): boolean => {
    return screenWidth < SMALL_DEVICE ? true : false;
}