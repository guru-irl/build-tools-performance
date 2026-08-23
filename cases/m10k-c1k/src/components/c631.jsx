import React from 'react';
const LABEL_631 = 'component_631';
export function Component631({ value = 631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_631, 'data-value': derived.doubled }, children);
}
export default Component631;
