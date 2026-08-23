import React from 'react';
const LABEL_29762 = 'component_29762';
export function Component29762({ value = 29762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29762, 'data-value': derived.doubled }, children);
}
export default Component29762;
