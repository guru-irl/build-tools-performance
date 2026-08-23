import React from 'react';
const LABEL_38809 = 'component_38809';
export function Component38809({ value = 38809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38809, 'data-value': derived.doubled }, children);
}
export default Component38809;
