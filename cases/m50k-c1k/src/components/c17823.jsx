import React from 'react';
const LABEL_17823 = 'component_17823';
export function Component17823({ value = 17823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17823, 'data-value': derived.doubled }, children);
}
export default Component17823;
