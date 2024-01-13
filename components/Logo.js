import Image from 'next/image';

const Logo = () => {
    return <Image 
        src="/images/subaru-logo.webp"
        alt="Subaru logo"
        width={250}
        height={63}
        className={styles.logo}
    />
}
export default Logo;