import React from 'react';
const LABEL_33807 = 'component_33807';
export function Component33807({ value = 33807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33807, 'data-value': derived.doubled }, children);
}
export default Component33807;
