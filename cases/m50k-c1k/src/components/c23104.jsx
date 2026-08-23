import React from 'react';
const LABEL_23104 = 'component_23104';
export function Component23104({ value = 23104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23104, 'data-value': derived.doubled }, children);
}
export default Component23104;
