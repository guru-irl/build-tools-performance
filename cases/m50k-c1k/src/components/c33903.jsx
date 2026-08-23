import React from 'react';
const LABEL_33903 = 'component_33903';
export function Component33903({ value = 33903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33903, 'data-value': derived.doubled }, children);
}
export default Component33903;
