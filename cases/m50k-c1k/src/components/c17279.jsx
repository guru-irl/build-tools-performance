import React from 'react';
const LABEL_17279 = 'component_17279';
export function Component17279({ value = 17279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17279, 'data-value': derived.doubled }, children);
}
export default Component17279;
