import React from 'react';
const LABEL_34917 = 'component_34917';
export function Component34917({ value = 34917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34917, 'data-value': derived.doubled }, children);
}
export default Component34917;
