import SearchHome from "../../components/search/SearchHome";
import HeadingOne from "../layout/headings/HeadingOne";

import Storee from "../../components/search/storee";

function Welcome() {
  return (
    <div className="glass">
      <div className="hero">
        <HeadingOne
          titleStyle="h1__smaller-header"
          content="Book your next stay in Bergen here!"
        />
        <Storee />
      </div>
    </div>
  );
}

export default Welcome;

{
  /*
<SearchHome />*/
}
