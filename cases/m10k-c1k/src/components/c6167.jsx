import React from 'react';
const LABEL_6167 = 'component_6167';
export function Component6167({ value = 6167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6167, 'data-value': derived.doubled }, children);
}
export default Component6167;
