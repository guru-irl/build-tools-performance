import React from 'react';
const LABEL_21919 = 'component_21919';
export function Component21919({ value = 21919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21919, 'data-value': derived.doubled }, children);
}
export default Component21919;
