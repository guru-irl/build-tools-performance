import React from 'react';
const LABEL_29593 = 'component_29593';
export function Component29593({ value = 29593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29593, 'data-value': derived.doubled }, children);
}
export default Component29593;
