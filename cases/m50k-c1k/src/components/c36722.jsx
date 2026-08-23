import React from 'react';
const LABEL_36722 = 'component_36722';
export function Component36722({ value = 36722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36722, 'data-value': derived.doubled }, children);
}
export default Component36722;
