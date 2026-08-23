import React from 'react';
const LABEL_33751 = 'component_33751';
export function Component33751({ value = 33751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33751, 'data-value': derived.doubled }, children);
}
export default Component33751;
