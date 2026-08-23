import React from 'react';
const LABEL_21631 = 'component_21631';
export function Component21631({ value = 21631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21631, 'data-value': derived.doubled }, children);
}
export default Component21631;
