import { ProductsProvider } from "./products";
import { GraduationProvider } from "./graduation";
import { PartyProvider } from "./party";
import { WeddingProvider } from "./wedding";

const Providers = ({ children }) => {
  return (
    <>
      <ProductsProvider>
        <GraduationProvider>
          <PartyProvider>
            <WeddingProvider>{children}</WeddingProvider>
          </PartyProvider>
        </GraduationProvider>
      </ProductsProvider>
    </>
  );
};

export default Providers;
