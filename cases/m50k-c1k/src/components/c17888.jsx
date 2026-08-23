import React from 'react';
const LABEL_17888 = 'component_17888';
export function Component17888({ value = 17888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17888, 'data-value': derived.doubled }, children);
}
export default Component17888;
