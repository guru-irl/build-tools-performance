import React from 'react';
const LABEL_17154 = 'component_17154';
export function Component17154({ value = 17154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17154, 'data-value': derived.doubled }, children);
}
export default Component17154;
