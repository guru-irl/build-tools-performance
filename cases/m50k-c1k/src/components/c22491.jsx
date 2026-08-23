import React from 'react';
const LABEL_22491 = 'component_22491';
export function Component22491({ value = 22491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22491, 'data-value': derived.doubled }, children);
}
export default Component22491;
