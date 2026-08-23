import React from 'react';
const LABEL_33354 = 'component_33354';
export function Component33354({ value = 33354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33354, 'data-value': derived.doubled }, children);
}
export default Component33354;
