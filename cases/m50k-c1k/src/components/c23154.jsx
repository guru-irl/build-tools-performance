import React from 'react';
const LABEL_23154 = 'component_23154';
export function Component23154({ value = 23154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23154, 'data-value': derived.doubled }, children);
}
export default Component23154;
