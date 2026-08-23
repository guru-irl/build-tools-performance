import React from 'react';
const LABEL_9343 = 'component_9343';
export function Component9343({ value = 9343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9343, 'data-value': derived.doubled }, children);
}
export default Component9343;
