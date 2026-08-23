import React from 'react';
const LABEL_21845 = 'component_21845';
export function Component21845({ value = 21845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21845, 'data-value': derived.doubled }, children);
}
export default Component21845;
