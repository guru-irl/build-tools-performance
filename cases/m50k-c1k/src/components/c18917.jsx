import React from 'react';
const LABEL_18917 = 'component_18917';
export function Component18917({ value = 18917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18917, 'data-value': derived.doubled }, children);
}
export default Component18917;
