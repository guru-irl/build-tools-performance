import React from 'react';
const LABEL_15488 = 'component_15488';
export function Component15488({ value = 15488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15488, 'data-value': derived.doubled }, children);
}
export default Component15488;
