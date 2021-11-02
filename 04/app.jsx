import { SWRConfig } from "swr";
import { useHashLocation } from "./libs/hooks";
import { ListView } from "./views/list";
import { DetailView } from "./views/detail";

export const App = () => {
  const [loc] = useHashLocation();

  return (
    <>
      <Header />
      <SWRConfig value={{ refreshInterval: 5000000 }}>
        {loc === "/" ? <ListView /> : <DetailView id={loc} />}
      </SWRConfig>
    </>
  );
};

const Header = () => (
  <header>
    <h1>🗞 HackerNews - CodeGrid edition</h1>
  </header>
);
