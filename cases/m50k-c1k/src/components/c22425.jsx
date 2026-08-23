import React from 'react';
const LABEL_22425 = 'component_22425';
export function Component22425({ value = 22425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22425, 'data-value': derived.doubled }, children);
}
export default Component22425;
