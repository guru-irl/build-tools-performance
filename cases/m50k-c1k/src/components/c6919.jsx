import React from 'react';
const LABEL_6919 = 'component_6919';
export function Component6919({ value = 6919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6919, 'data-value': derived.doubled }, children);
}
export default Component6919;
