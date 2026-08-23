import React from 'react';
const LABEL_39333 = 'component_39333';
export function Component39333({ value = 39333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39333, 'data-value': derived.doubled }, children);
}
export default Component39333;
