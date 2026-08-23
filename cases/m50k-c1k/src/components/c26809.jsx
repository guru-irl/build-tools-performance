import React from 'react';
const LABEL_26809 = 'component_26809';
export function Component26809({ value = 26809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26809, 'data-value': derived.doubled }, children);
}
export default Component26809;
