import React from 'react';
const LABEL_46187 = 'component_46187';
export function Component46187({ value = 46187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46187, 'data-value': derived.doubled }, children);
}
export default Component46187;
