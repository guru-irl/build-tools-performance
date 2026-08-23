import React from 'react';
const LABEL_35626 = 'component_35626';
export function Component35626({ value = 35626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35626, 'data-value': derived.doubled }, children);
}
export default Component35626;
