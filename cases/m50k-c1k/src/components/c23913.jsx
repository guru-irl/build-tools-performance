import React from 'react';
const LABEL_23913 = 'component_23913';
export function Component23913({ value = 23913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23913, 'data-value': derived.doubled }, children);
}
export default Component23913;
