import React from 'react';
const LABEL_22134 = 'component_22134';
export function Component22134({ value = 22134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22134, 'data-value': derived.doubled }, children);
}
export default Component22134;
