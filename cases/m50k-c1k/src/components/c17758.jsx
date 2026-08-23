import React from 'react';
const LABEL_17758 = 'component_17758';
export function Component17758({ value = 17758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17758, 'data-value': derived.doubled }, children);
}
export default Component17758;
