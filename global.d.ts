import en from './messages/en.json';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line no-unused-vars
  interface IntlMessages extends Messages {}
  interface AppProps {
    children?: React.ReactNode; // best, accepts everything React can render
    childrenElement: React.JSX.Element; // A single React element
    style?: React.CSSProperties; // to pass through style props
    onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
    //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
    props: Props & React.ComponentPropsWithoutRef<'button'>; // to impersonate all the props of a button element and explicitly not forwarding its ref
    props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
  }
}
