import React from 'react';
const LABEL_33829 = 'component_33829';
export function Component33829({ value = 33829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33829, 'data-value': derived.doubled }, children);
}
export default Component33829;
