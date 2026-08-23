import React from 'react';
const LABEL_17908 = 'component_17908';
export function Component17908({ value = 17908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17908, 'data-value': derived.doubled }, children);
}
export default Component17908;
