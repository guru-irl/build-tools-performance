import React from 'react';
const LABEL_17402 = 'component_17402';
export function Component17402({ value = 17402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17402, 'data-value': derived.doubled }, children);
}
export default Component17402;
