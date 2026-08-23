import React from 'react';
const LABEL_15133 = 'component_15133';
export function Component15133({ value = 15133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15133, 'data-value': derived.doubled }, children);
}
export default Component15133;
