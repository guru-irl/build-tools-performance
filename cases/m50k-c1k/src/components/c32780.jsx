import React from 'react';
const LABEL_32780 = 'component_32780';
export function Component32780({ value = 32780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32780, 'data-value': derived.doubled }, children);
}
export default Component32780;
