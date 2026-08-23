import React from 'react';
const LABEL_23515 = 'component_23515';
export function Component23515({ value = 23515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23515, 'data-value': derived.doubled }, children);
}
export default Component23515;
