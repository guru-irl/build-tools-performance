import React from 'react';
const LABEL_22533 = 'component_22533';
export function Component22533({ value = 22533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22533, 'data-value': derived.doubled }, children);
}
export default Component22533;
