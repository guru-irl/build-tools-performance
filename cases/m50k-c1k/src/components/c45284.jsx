import React from 'react';
const LABEL_45284 = 'component_45284';
export function Component45284({ value = 45284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45284, 'data-value': derived.doubled }, children);
}
export default Component45284;
