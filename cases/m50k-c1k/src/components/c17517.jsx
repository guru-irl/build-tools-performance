import React from 'react';
const LABEL_17517 = 'component_17517';
export function Component17517({ value = 17517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17517, 'data-value': derived.doubled }, children);
}
export default Component17517;
