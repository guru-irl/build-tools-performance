import React from 'react';
const LABEL_17104 = 'component_17104';
export function Component17104({ value = 17104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17104, 'data-value': derived.doubled }, children);
}
export default Component17104;
