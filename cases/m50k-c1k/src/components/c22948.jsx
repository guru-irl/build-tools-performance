import React from 'react';
const LABEL_22948 = 'component_22948';
export function Component22948({ value = 22948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22948, 'data-value': derived.doubled }, children);
}
export default Component22948;
