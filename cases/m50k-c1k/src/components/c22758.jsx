import React from 'react';
const LABEL_22758 = 'component_22758';
export function Component22758({ value = 22758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22758, 'data-value': derived.doubled }, children);
}
export default Component22758;
