import React from 'react';
const LABEL_7829 = 'component_7829';
export function Component7829({ value = 7829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7829, 'data-value': derived.doubled }, children);
}
export default Component7829;
