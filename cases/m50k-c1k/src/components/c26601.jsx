import React from 'react';
const LABEL_26601 = 'component_26601';
export function Component26601({ value = 26601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26601, 'data-value': derived.doubled }, children);
}
export default Component26601;
