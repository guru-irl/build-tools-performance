import React from 'react';
const LABEL_33095 = 'component_33095';
export function Component33095({ value = 33095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33095, 'data-value': derived.doubled }, children);
}
export default Component33095;
