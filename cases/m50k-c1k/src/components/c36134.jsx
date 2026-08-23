import React from 'react';
const LABEL_36134 = 'component_36134';
export function Component36134({ value = 36134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36134, 'data-value': derived.doubled }, children);
}
export default Component36134;
