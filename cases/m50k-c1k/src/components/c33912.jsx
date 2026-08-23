import React from 'react';
const LABEL_33912 = 'component_33912';
export function Component33912({ value = 33912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33912, 'data-value': derived.doubled }, children);
}
export default Component33912;
