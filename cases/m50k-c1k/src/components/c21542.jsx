import React from 'react';
const LABEL_21542 = 'component_21542';
export function Component21542({ value = 21542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21542, 'data-value': derived.doubled }, children);
}
export default Component21542;
