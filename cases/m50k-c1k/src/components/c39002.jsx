import React from 'react';
const LABEL_39002 = 'component_39002';
export function Component39002({ value = 39002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39002, 'data-value': derived.doubled }, children);
}
export default Component39002;
