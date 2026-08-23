import React from 'react';
const LABEL_6809 = 'component_6809';
export function Component6809({ value = 6809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6809, 'data-value': derived.doubled }, children);
}
export default Component6809;
