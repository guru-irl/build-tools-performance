import React from 'react';
const LABEL_17729 = 'component_17729';
export function Component17729({ value = 17729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17729, 'data-value': derived.doubled }, children);
}
export default Component17729;
