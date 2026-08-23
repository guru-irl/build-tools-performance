import React from 'react';
const LABEL_17879 = 'component_17879';
export function Component17879({ value = 17879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17879, 'data-value': derived.doubled }, children);
}
export default Component17879;
