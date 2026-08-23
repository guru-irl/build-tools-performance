import React from 'react';
const LABEL_22631 = 'component_22631';
export function Component22631({ value = 22631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22631, 'data-value': derived.doubled }, children);
}
export default Component22631;
