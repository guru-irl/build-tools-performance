import React from 'react';
const LABEL_33426 = 'component_33426';
export function Component33426({ value = 33426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33426, 'data-value': derived.doubled }, children);
}
export default Component33426;
