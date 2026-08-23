import React from 'react';
const LABEL_17131 = 'component_17131';
export function Component17131({ value = 17131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17131, 'data-value': derived.doubled }, children);
}
export default Component17131;
