import React from 'react';
const LABEL_15945 = 'component_15945';
export function Component15945({ value = 15945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15945, 'data-value': derived.doubled }, children);
}
export default Component15945;
