import React from 'react';
const LABEL_17838 = 'component_17838';
export function Component17838({ value = 17838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17838, 'data-value': derived.doubled }, children);
}
export default Component17838;
