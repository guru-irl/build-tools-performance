import React from 'react';
const LABEL_7208 = 'component_7208';
export function Component7208({ value = 7208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7208, 'data-value': derived.doubled }, children);
}
export default Component7208;
