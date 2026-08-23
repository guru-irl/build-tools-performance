import React from 'react';
const LABEL_16819 = 'component_16819';
export function Component16819({ value = 16819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16819, 'data-value': derived.doubled }, children);
}
export default Component16819;
