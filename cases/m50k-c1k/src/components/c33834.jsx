import React from 'react';
const LABEL_33834 = 'component_33834';
export function Component33834({ value = 33834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33834, 'data-value': derived.doubled }, children);
}
export default Component33834;
