import React from 'react';
const LABEL_22162 = 'component_22162';
export function Component22162({ value = 22162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22162, 'data-value': derived.doubled }, children);
}
export default Component22162;
