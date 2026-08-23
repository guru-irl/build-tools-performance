import React from 'react';
const LABEL_10829 = 'component_10829';
export function Component10829({ value = 10829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10829, 'data-value': derived.doubled }, children);
}
export default Component10829;
