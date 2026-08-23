import React from 'react';
const LABEL_35809 = 'component_35809';
export function Component35809({ value = 35809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35809, 'data-value': derived.doubled }, children);
}
export default Component35809;
