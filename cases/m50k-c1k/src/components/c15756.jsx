import React from 'react';
const LABEL_15756 = 'component_15756';
export function Component15756({ value = 15756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15756, 'data-value': derived.doubled }, children);
}
export default Component15756;
