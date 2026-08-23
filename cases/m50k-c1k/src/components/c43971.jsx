import React from 'react';
const LABEL_43971 = 'component_43971';
export function Component43971({ value = 43971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43971, 'data-value': derived.doubled }, children);
}
export default Component43971;
