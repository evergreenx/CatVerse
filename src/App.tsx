import Home from "./component/Home";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-10 lg:mx-24">
        <Home />
      </div>
    </QueryClientProvider>
  );
};

export default App;
