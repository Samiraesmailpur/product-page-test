import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@radix-ui/themes';

const SharedLayout = () => {
  return (
    <Container size="4" px="3">
      <Header />
      <main className="pt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
