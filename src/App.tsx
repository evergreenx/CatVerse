import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Top10 from "./component/Top10";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Header from "./component/Header";
const queryClient = new QueryClient();
const App = () => {
  return (
    <Router>

<Switch>

      <QueryClientProvider client={queryClient}>
        <div className="mx-10 lg:mx-24">
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/top10">
            <Header/>
            <Top10 />
          </Route>
        </div>

         
         
      </QueryClientProvider>
      </Switch>

    </Router>
  );
};

export default App;
