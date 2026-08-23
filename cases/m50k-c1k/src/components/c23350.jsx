import React from 'react';
const LABEL_23350 = 'component_23350';
export function Component23350({ value = 23350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23350, 'data-value': derived.doubled }, children);
}
export default Component23350;
