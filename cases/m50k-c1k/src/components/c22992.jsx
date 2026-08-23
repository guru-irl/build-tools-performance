import React from 'react';
const LABEL_22992 = 'component_22992';
export function Component22992({ value = 22992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22992, 'data-value': derived.doubled }, children);
}
export default Component22992;
