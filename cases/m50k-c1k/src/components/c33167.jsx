import React from 'react';
const LABEL_33167 = 'component_33167';
export function Component33167({ value = 33167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33167, 'data-value': derived.doubled }, children);
}
export default Component33167;
