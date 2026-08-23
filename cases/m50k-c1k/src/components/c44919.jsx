import React from 'react';
const LABEL_44919 = 'component_44919';
export function Component44919({ value = 44919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44919, 'data-value': derived.doubled }, children);
}
export default Component44919;
