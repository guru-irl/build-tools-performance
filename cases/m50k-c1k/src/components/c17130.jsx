import React from 'react';
const LABEL_17130 = 'component_17130';
export function Component17130({ value = 17130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17130, 'data-value': derived.doubled }, children);
}
export default Component17130;
