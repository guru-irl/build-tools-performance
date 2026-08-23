import React from 'react';
const LABEL_21299 = 'component_21299';
export function Component21299({ value = 21299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21299, 'data-value': derived.doubled }, children);
}
export default Component21299;
