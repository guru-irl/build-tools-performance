import React from 'react';
const LABEL_17706 = 'component_17706';
export function Component17706({ value = 17706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17706, 'data-value': derived.doubled }, children);
}
export default Component17706;
