import React from 'react';
const LABEL_21904 = 'component_21904';
export function Component21904({ value = 21904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21904, 'data-value': derived.doubled }, children);
}
export default Component21904;
