import React from 'react';
const LABEL_39380 = 'component_39380';
export function Component39380({ value = 39380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39380, 'data-value': derived.doubled }, children);
}
export default Component39380;
