import React from 'react';
const LABEL_29909 = 'component_29909';
export function Component29909({ value = 29909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29909, 'data-value': derived.doubled }, children);
}
export default Component29909;
