import React from 'react';
const LABEL_28919 = 'component_28919';
export function Component28919({ value = 28919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28919, 'data-value': derived.doubled }, children);
}
export default Component28919;
