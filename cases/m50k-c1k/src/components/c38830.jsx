import React from 'react';
const LABEL_38830 = 'component_38830';
export function Component38830({ value = 38830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38830, 'data-value': derived.doubled }, children);
}
export default Component38830;
