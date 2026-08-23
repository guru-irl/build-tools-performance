import React from 'react';
const LABEL_10888 = 'component_10888';
export function Component10888({ value = 10888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10888, 'data-value': derived.doubled }, children);
}
export default Component10888;
