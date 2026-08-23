import React from 'react';
const LABEL_27915 = 'component_27915';
export function Component27915({ value = 27915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27915, 'data-value': derived.doubled }, children);
}
export default Component27915;
