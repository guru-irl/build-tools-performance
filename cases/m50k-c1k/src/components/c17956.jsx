import React from 'react';
const LABEL_17956 = 'component_17956';
export function Component17956({ value = 17956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17956, 'data-value': derived.doubled }, children);
}
export default Component17956;
