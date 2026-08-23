import React from 'react';
const LABEL_32647 = 'component_32647';
export function Component32647({ value = 32647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32647, 'data-value': derived.doubled }, children);
}
export default Component32647;
