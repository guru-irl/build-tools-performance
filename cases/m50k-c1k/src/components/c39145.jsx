import React from 'react';
const LABEL_39145 = 'component_39145';
export function Component39145({ value = 39145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39145, 'data-value': derived.doubled }, children);
}
export default Component39145;
