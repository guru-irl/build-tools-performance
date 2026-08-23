import React from 'react';
const LABEL_23133 = 'component_23133';
export function Component23133({ value = 23133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23133, 'data-value': derived.doubled }, children);
}
export default Component23133;
