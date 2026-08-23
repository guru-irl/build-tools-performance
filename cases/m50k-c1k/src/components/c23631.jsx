import React from 'react';
const LABEL_23631 = 'component_23631';
export function Component23631({ value = 23631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23631, 'data-value': derived.doubled }, children);
}
export default Component23631;
