import { cleanup, render } from "@testing-library/react";
import { useHydrateAtoms } from "jotai/utils";
import { Provider } from "jotai";
import { afterEach } from "vitest";

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
    return (
      <AtomProvider
        initialValues={providerValues.atom}
      >
        {children}
      </AtomProvider>
    );
  };

interface ProviderValues {
  atom?: any;
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
