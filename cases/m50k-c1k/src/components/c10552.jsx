import React from 'react';
const LABEL_10552 = 'component_10552';
export function Component10552({ value = 10552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10552, 'data-value': derived.doubled }, children);
}
export default Component10552;
