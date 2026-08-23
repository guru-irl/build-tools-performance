import React from 'react';
const LABEL_33911 = 'component_33911';
export function Component33911({ value = 33911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33911, 'data-value': derived.doubled }, children);
}
export default Component33911;
