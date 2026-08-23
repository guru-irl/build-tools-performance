import React from 'react';
const LABEL_45197 = 'component_45197';
export function Component45197({ value = 45197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45197, 'data-value': derived.doubled }, children);
}
export default Component45197;
