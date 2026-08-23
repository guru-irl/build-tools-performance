import React from 'react';
const LABEL_705 = 'component_705';
export function Component705({ value = 705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_705, 'data-value': derived.doubled }, children);
}
export default Component705;
