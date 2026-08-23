import React from 'react';
const LABEL_31888 = 'component_31888';
export function Component31888({ value = 31888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31888, 'data-value': derived.doubled }, children);
}
export default Component31888;
