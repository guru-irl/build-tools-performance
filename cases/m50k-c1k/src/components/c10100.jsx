import React from 'react';
const LABEL_10100 = 'component_10100';
export function Component10100({ value = 10100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10100, 'data-value': derived.doubled }, children);
}
export default Component10100;
