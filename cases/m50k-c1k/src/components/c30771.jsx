import React from 'react';
const LABEL_30771 = 'component_30771';
export function Component30771({ value = 30771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30771, 'data-value': derived.doubled }, children);
}
export default Component30771;
