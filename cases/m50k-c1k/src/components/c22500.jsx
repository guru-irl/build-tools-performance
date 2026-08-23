import React from 'react';
const LABEL_22500 = 'component_22500';
export function Component22500({ value = 22500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22500, 'data-value': derived.doubled }, children);
}
export default Component22500;
