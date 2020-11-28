import React from 'react';
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Redirect,
} from 'react-router-dom';
import { useStore } from '../../store';

interface AuthenticatedComponentProps extends RouteComponentProps {
  component?: React.ComponentType<any>;
}

function AuthenticatedComponent({
  component: Component,
}: AuthenticatedComponentProps) {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to="/sign-in" />;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
}

export default function AuthenticatedRoute({ component, ...rest }: RouteProps) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthenticatedComponent
          key={props.match.params.id || 'empty'}
          component={component}
          {...props}
        />
      )}
    />
  );
}
