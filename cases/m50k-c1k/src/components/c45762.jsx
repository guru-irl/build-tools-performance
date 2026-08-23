import React from 'react';
const LABEL_45762 = 'component_45762';
export function Component45762({ value = 45762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45762, 'data-value': derived.doubled }, children);
}
export default Component45762;
