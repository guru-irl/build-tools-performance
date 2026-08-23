import React from 'react';
const LABEL_26919 = 'component_26919';
export function Component26919({ value = 26919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26919, 'data-value': derived.doubled }, children);
}
export default Component26919;
