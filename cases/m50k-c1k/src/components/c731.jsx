import React from 'react';
const LABEL_731 = 'component_731';
export function Component731({ value = 731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_731, 'data-value': derived.doubled }, children);
}
export default Component731;
