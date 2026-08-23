import React from 'react';
const LABEL_17533 = 'component_17533';
export function Component17533({ value = 17533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17533, 'data-value': derived.doubled }, children);
}
export default Component17533;
