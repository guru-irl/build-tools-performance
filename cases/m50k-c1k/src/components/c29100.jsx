import React from 'react';
const LABEL_29100 = 'component_29100';
export function Component29100({ value = 29100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29100, 'data-value': derived.doubled }, children);
}
export default Component29100;
