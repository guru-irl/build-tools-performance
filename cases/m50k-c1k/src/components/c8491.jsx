import React from 'react';
const LABEL_8491 = 'component_8491';
export function Component8491({ value = 8491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8491, 'data-value': derived.doubled }, children);
}
export default Component8491;
