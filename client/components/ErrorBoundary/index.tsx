import React, { PureComponent } from 'react';

type Props = {
  children: JSX.Element;
  debug: boolean;
  errorMessage: string;
  render: any;
}
type State = {
  hasError: boolean
};

class ErrorBoundary extends PureComponent<Props, State> {
 

  static defaultProps = {
    children: (<div></div>),
    debug: true,
    errorMessage: '',
    render: ()=>'',
  };

  state = {
    hasError: false,
  };

  defaultRender = () => {
    const { errorMessage } = this.props;

    const message = errorMessage || 'Sorry, something went wrong.';

    return <div>{message}</div>;
  };

  componentDidCatch(error:any, info:any): void {
    const { debug } = this.props;

    if (debug) {
      console.groupCollapsed(`Error occured!`);
      console.error(`
        [ErrorBoundary] Error message: ${error.message}
        [ErrorBoundary] Error stack: ${error.stack}
        [ErrorBoundary] Component stack: ${info.componentStack}
      `);
      console.groupEnd();
    }
   
    this.setState({ hasError: true });
  }

  render() {
    const { children, render } = this.props;
    const { hasError } = this.state;
    const renderError = render || this.defaultRender;

    return hasError ? renderError() : children;
  }
}

export default ErrorBoundary;
