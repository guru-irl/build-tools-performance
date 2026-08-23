import React from 'react';
const LABEL_25380 = 'component_25380';
export function Component25380({ value = 25380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25380, 'data-value': derived.doubled }, children);
}
export default Component25380;
