import React from 'react';
const LABEL_35171 = 'component_35171';
export function Component35171({ value = 35171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35171, 'data-value': derived.doubled }, children);
}
export default Component35171;
