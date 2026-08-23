import React from 'react';
const LABEL_39213 = 'component_39213';
export function Component39213({ value = 39213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39213, 'data-value': derived.doubled }, children);
}
export default Component39213;
