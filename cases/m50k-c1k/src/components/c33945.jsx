import React from 'react';
const LABEL_33945 = 'component_33945';
export function Component33945({ value = 33945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33945, 'data-value': derived.doubled }, children);
}
export default Component33945;
