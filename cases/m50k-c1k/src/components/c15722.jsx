import React from 'react';
const LABEL_15722 = 'component_15722';
export function Component15722({ value = 15722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15722, 'data-value': derived.doubled }, children);
}
export default Component15722;
