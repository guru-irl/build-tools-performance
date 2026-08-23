import React from 'react';
const LABEL_15097 = 'component_15097';
export function Component15097({ value = 15097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15097, 'data-value': derived.doubled }, children);
}
export default Component15097;
