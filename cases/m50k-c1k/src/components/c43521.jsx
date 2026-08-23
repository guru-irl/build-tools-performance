import React from 'react';
const LABEL_43521 = 'component_43521';
export function Component43521({ value = 43521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43521, 'data-value': derived.doubled }, children);
}
export default Component43521;
