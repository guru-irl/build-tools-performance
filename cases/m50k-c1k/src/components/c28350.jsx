import React from 'react';
const LABEL_28350 = 'component_28350';
export function Component28350({ value = 28350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28350, 'data-value': derived.doubled }, children);
}
export default Component28350;
