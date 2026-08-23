import React from 'react';
const LABEL_15762 = 'component_15762';
export function Component15762({ value = 15762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15762, 'data-value': derived.doubled }, children);
}
export default Component15762;
