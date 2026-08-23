import React from 'react';
const LABEL_5631 = 'component_5631';
export function Component5631({ value = 5631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5631, 'data-value': derived.doubled }, children);
}
export default Component5631;
