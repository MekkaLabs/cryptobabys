import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'


import lottieJson from './babysmachine.json'

export default function Example() {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 1000, height: 800 }}
        />
    )
}