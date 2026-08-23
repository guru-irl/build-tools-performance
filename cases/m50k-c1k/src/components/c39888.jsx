import React from 'react';
const LABEL_39888 = 'component_39888';
export function Component39888({ value = 39888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39888, 'data-value': derived.doubled }, children);
}
export default Component39888;
