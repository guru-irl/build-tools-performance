import React from 'react';
const LABEL_45917 = 'component_45917';
export function Component45917({ value = 45917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45917, 'data-value': derived.doubled }, children);
}
export default Component45917;
