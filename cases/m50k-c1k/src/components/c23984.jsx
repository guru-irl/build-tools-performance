import React from 'react';
const LABEL_23984 = 'component_23984';
export function Component23984({ value = 23984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23984, 'data-value': derived.doubled }, children);
}
export default Component23984;
