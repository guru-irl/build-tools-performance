import React from 'react';
const LABEL_17263 = 'component_17263';
export function Component17263({ value = 17263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17263, 'data-value': derived.doubled }, children);
}
export default Component17263;
