import React from 'react';
const LABEL_43912 = 'component_43912';
export function Component43912({ value = 43912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43912, 'data-value': derived.doubled }, children);
}
export default Component43912;
