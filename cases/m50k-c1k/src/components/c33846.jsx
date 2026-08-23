import React from 'react';
const LABEL_33846 = 'component_33846';
export function Component33846({ value = 33846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33846, 'data-value': derived.doubled }, children);
}
export default Component33846;
