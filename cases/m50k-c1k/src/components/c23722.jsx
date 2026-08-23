import React from 'react';
const LABEL_23722 = 'component_23722';
export function Component23722({ value = 23722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23722, 'data-value': derived.doubled }, children);
}
export default Component23722;
