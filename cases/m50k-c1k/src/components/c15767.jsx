import React from 'react';
const LABEL_15767 = 'component_15767';
export function Component15767({ value = 15767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15767, 'data-value': derived.doubled }, children);
}
export default Component15767;
