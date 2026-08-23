import React from 'react';
const LABEL_17345 = 'component_17345';
export function Component17345({ value = 17345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17345, 'data-value': derived.doubled }, children);
}
export default Component17345;
