import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

const Effect = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: '/bg-parallax.jpg',
          amount: 0.5,
        },
        {
          image: '/building2.png',
          amount: 0.2,
          slowerScrollRate: true,
          expand: 0.05,
          children: <div style={{ height: '100vh' }} />,
        },
      ]}
      style={{ height: '100vh' }}
    >
      <Parallax disabled>
        <div style={{ height: '100vh' }} />
      </Parallax>
    </ParallaxBanner>
  );
};

export default Effect;
