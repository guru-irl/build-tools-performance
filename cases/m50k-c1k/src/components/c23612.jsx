import React from 'react';
const LABEL_23612 = 'component_23612';
export function Component23612({ value = 23612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23612, 'data-value': derived.doubled }, children);
}
export default Component23612;
