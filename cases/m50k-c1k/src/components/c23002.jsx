import React from 'react';
const LABEL_23002 = 'component_23002';
export function Component23002({ value = 23002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23002, 'data-value': derived.doubled }, children);
}
export default Component23002;
