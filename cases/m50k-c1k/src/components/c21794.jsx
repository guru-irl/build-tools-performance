import React from 'react';
const LABEL_21794 = 'component_21794';
export function Component21794({ value = 21794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21794, 'data-value': derived.doubled }, children);
}
export default Component21794;
