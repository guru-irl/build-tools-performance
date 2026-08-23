import React from 'react';
const LABEL_32491 = 'component_32491';
export function Component32491({ value = 32491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32491, 'data-value': derived.doubled }, children);
}
export default Component32491;
