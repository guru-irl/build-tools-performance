import React from 'react';
const LABEL_45731 = 'component_45731';
export function Component45731({ value = 45731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45731, 'data-value': derived.doubled }, children);
}
export default Component45731;
