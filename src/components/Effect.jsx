import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Effect = () => {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          speed={1}
          factor={2}
          style={{
            backgroundImage: 'url("/burjkhalifa.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            position: 'absolute',
          }}
        />
        <ParallaxLayer
          speed={0.5}
          factor={2}
          style={{
            backgroundImage: 'url("/building.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            
            position: 'absolute',
          }}
        />
      </Parallax>
    </div>
  );
};

export default Effect;
