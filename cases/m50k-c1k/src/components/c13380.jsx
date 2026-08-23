import React from 'react';
const LABEL_13380 = 'component_13380';
export function Component13380({ value = 13380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13380, 'data-value': derived.doubled }, children);
}
export default Component13380;
