import React from 'react';
const LABEL_36577 = 'component_36577';
export function Component36577({ value = 36577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36577, 'data-value': derived.doubled }, children);
}
export default Component36577;
