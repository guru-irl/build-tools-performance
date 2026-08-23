import React from 'react';
const LABEL_43379 = 'component_43379';
export function Component43379({ value = 43379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43379, 'data-value': derived.doubled }, children);
}
export default Component43379;
