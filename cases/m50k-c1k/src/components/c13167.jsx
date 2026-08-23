import React from 'react';
const LABEL_13167 = 'component_13167';
export function Component13167({ value = 13167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13167, 'data-value': derived.doubled }, children);
}
export default Component13167;
