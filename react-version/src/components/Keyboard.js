import KeyboardLine from "./KeyboardLine";

const Keyboard = () => {
  return (
  <div className='keyboard'>
      <KeyboardLine buttons={['q','w','e','r','t','y','u','i','o','p']} />
      <KeyboardLine buttons={['a','s','d','f','g','h','j','k','l','erase']} />
      <KeyboardLine buttons={['z','x','c','v','b','n','m','enter']} />
  </div>
  );
};

export default Keyboard;
