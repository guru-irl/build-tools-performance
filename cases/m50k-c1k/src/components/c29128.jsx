import React from 'react';
const LABEL_29128 = 'component_29128';
export function Component29128({ value = 29128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29128, 'data-value': derived.doubled }, children);
}
export default Component29128;
