import React from 'react';
const LABEL_15625 = 'component_15625';
export function Component15625({ value = 15625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15625, 'data-value': derived.doubled }, children);
}
export default Component15625;
