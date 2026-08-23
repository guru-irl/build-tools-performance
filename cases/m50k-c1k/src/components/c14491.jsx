import React from 'react';
const LABEL_14491 = 'component_14491';
export function Component14491({ value = 14491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14491, 'data-value': derived.doubled }, children);
}
export default Component14491;
