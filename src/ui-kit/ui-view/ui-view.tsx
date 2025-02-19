import React from 'react';

export type UIViewProps = React.ComponentPropsWithoutRef<'div'>;

export const UIView = ({ ...props }: UIViewProps) => {
  return <div {...props} />;
};
