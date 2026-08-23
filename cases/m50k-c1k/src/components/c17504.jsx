import React from 'react';
const LABEL_17504 = 'component_17504';
export function Component17504({ value = 17504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17504, 'data-value': derived.doubled }, children);
}
export default Component17504;
