import React from 'react';
const LABEL_32425 = 'component_32425';
export function Component32425({ value = 32425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32425, 'data-value': derived.doubled }, children);
}
export default Component32425;
