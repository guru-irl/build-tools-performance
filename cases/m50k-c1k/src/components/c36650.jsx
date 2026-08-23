import React from 'react';
const LABEL_36650 = 'component_36650';
export function Component36650({ value = 36650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36650, 'data-value': derived.doubled }, children);
}
export default Component36650;
