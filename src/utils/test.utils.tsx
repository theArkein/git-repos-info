import { cleanup, render } from "@testing-library/react";
import { useHydrateAtoms } from "jotai/utils";
import { Provider } from "jotai";
import { afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

afterEach(() => {
  cleanup();
});

const HydrateAtoms = ({
  initialValues,
  children,
}: {
  initialValues: any;
  children: JSX.Element;
}) => {
  useHydrateAtoms(initialValues);
  return children;
};

const AtomProvider = ({
  initialValues,
  children,
}: {
  initialValues: any;
  children: JSX.Element;
}) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
);

const withAllProviders =
  (providerValues: ProviderValues) =>
  ({ children }: { children: JSX.Element }) => {
    const defaultQueryClient = new QueryClient();

    return (
      <QueryClientProvider
        client={providerValues.queryClient || defaultQueryClient}
      >
        <AtomProvider initialValues={providerValues.atom}>
          {children}
        </AtomProvider>
      </QueryClientProvider>
    );
  };

interface ProviderValues {
  atom?: any;
  queryClient?: QueryClient;
}

const customRender = (
  ui: React.ReactElement,
  providerValues: ProviderValues = {
    atom: [],
  },
  options = {}
) => {
  return render(ui, {
    wrapper: withAllProviders(providerValues),
    ...options,
  });
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
