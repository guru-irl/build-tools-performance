import React from 'react';
const LABEL_17624 = 'component_17624';
export function Component17624({ value = 17624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17624, 'data-value': derived.doubled }, children);
}
export default Component17624;
