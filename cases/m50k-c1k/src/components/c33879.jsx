import React from 'react';
const LABEL_33879 = 'component_33879';
export function Component33879({ value = 33879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33879, 'data-value': derived.doubled }, children);
}
export default Component33879;
