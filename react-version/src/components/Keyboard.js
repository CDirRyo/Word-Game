import KeyboardLine from "./KeyboardLine";

const Keyboard = ({onClick}) => {
  return (
  <div className='keyboard'>
      <KeyboardLine buttons={['q','w','e','r','t','y','u','i','o','p']} onClick={onClick}/>
      <KeyboardLine buttons={['a','s','d','f','g','h','j','k','l','erase']} onClick={onClick}/>
      <KeyboardLine buttons={['z','x','c','v','b','n','m','enter']} onClick={onClick}/>
  </div>
  );
};

export default Keyboard;
