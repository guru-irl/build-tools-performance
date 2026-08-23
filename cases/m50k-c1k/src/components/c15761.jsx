import React from 'react';
const LABEL_15761 = 'component_15761';
export function Component15761({ value = 15761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15761, 'data-value': derived.doubled }, children);
}
export default Component15761;
