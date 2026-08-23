import React from 'react';
const LABEL_17198 = 'component_17198';
export function Component17198({ value = 17198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17198, 'data-value': derived.doubled }, children);
}
export default Component17198;
