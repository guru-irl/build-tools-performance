import React from 'react';
const LABEL_17636 = 'component_17636';
export function Component17636({ value = 17636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17636, 'data-value': derived.doubled }, children);
}
export default Component17636;
