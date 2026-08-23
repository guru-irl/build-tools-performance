import React from 'react';
const LABEL_33493 = 'component_33493';
export function Component33493({ value = 33493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33493, 'data-value': derived.doubled }, children);
}
export default Component33493;
