import React from 'react';
const LABEL_23174 = 'component_23174';
export function Component23174({ value = 23174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23174, 'data-value': derived.doubled }, children);
}
export default Component23174;
