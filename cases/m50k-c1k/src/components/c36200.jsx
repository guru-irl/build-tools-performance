import React from 'react';
const LABEL_36200 = 'component_36200';
export function Component36200({ value = 36200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36200, 'data-value': derived.doubled }, children);
}
export default Component36200;
