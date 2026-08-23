import React from 'react';
const LABEL_2351 = 'component_2351';
export function Component2351({ value = 2351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2351, 'data-value': derived.doubled }, children);
}
export default Component2351;
