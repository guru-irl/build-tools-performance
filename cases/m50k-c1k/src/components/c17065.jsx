import React from 'react';
const LABEL_17065 = 'component_17065';
export function Component17065({ value = 17065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17065, 'data-value': derived.doubled }, children);
}
export default Component17065;
