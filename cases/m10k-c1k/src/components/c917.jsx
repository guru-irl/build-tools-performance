import React from 'react';
const LABEL_917 = 'component_917';
export function Component917({ value = 917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_917, 'data-value': derived.doubled }, children);
}
export default Component917;
