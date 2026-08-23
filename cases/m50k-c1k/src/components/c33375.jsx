import React from 'react';
const LABEL_33375 = 'component_33375';
export function Component33375({ value = 33375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33375, 'data-value': derived.doubled }, children);
}
export default Component33375;
