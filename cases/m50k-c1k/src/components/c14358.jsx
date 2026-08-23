import React from 'react';
const LABEL_14358 = 'component_14358';
export function Component14358({ value = 14358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14358, 'data-value': derived.doubled }, children);
}
export default Component14358;
