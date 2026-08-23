import React from 'react';
const LABEL_15981 = 'component_15981';
export function Component15981({ value = 15981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15981, 'data-value': derived.doubled }, children);
}
export default Component15981;
