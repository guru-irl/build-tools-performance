import React from 'react';
const LABEL_17819 = 'component_17819';
export function Component17819({ value = 17819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17819, 'data-value': derived.doubled }, children);
}
export default Component17819;
