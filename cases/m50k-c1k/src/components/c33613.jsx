import React from 'react';
const LABEL_33613 = 'component_33613';
export function Component33613({ value = 33613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33613, 'data-value': derived.doubled }, children);
}
export default Component33613;
