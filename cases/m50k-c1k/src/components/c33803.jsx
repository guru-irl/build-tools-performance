import React from 'react';
const LABEL_33803 = 'component_33803';
export function Component33803({ value = 33803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33803, 'data-value': derived.doubled }, children);
}
export default Component33803;
