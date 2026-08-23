import React from 'react';
const LABEL_17149 = 'component_17149';
export function Component17149({ value = 17149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17149, 'data-value': derived.doubled }, children);
}
export default Component17149;
