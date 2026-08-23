import React from 'react';
const LABEL_18206 = 'component_18206';
export function Component18206({ value = 18206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18206, 'data-value': derived.doubled }, children);
}
export default Component18206;
