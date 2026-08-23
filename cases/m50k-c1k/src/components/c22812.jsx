import React from 'react';
const LABEL_22812 = 'component_22812';
export function Component22812({ value = 22812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22812, 'data-value': derived.doubled }, children);
}
export default Component22812;
