import React from 'react';
const LABEL_13917 = 'component_13917';
export function Component13917({ value = 13917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13917, 'data-value': derived.doubled }, children);
}
export default Component13917;
