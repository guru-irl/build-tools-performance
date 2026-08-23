import React from 'react';
const LABEL_17627 = 'component_17627';
export function Component17627({ value = 17627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17627, 'data-value': derived.doubled }, children);
}
export default Component17627;
