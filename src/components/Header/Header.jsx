import { Link } from 'react-router-dom';
import Cart from '../../assets/icons/cart.svg';
import { Flex } from '@radix-ui/themes';

const Header = () => {
  return (
    <header className="py-4">
      <nav>
        <Flex justify="between" align="center">
          <Flex gap="4">
            <Link className="hover:text-[teal] text-lg">Home</Link>
            <Link className="hover:text-[teal] text-lg">Catalog</Link>
            <Link className="hover:text-[teal] text-lg">About</Link>
            <Link className="hover:text-[teal] text-lg">Contacts</Link>
          </Flex>
          <Link className="rounded-full bg-[teal] cursor-pointer relative">
            <img src={Cart} alt="cart" />
            <span className="absolute text-white bottom-[5px] right-[10px] font-bold text-lg">
              1
            </span>
          </Link>
        </Flex>
      </nav>
    </header>
  );
};

export default Header;
