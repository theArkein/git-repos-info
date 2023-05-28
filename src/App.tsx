import { QueryClientProvider } from "@tanstack/react-query";
import IssuesPage from "./components/pages/issues/issues";
import { queryClient } from "./config";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IssuesPage />
  </QueryClientProvider>
  )
}

export default App
