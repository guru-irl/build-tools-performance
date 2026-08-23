import React from 'react';
const LABEL_10101 = 'component_10101';
export function Component10101({ value = 10101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10101, 'data-value': derived.doubled }, children);
}
export default Component10101;
