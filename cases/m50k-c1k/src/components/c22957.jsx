import React from 'react';
const LABEL_22957 = 'component_22957';
export function Component22957({ value = 22957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22957, 'data-value': derived.doubled }, children);
}
export default Component22957;
