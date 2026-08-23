import React from 'react';
const LABEL_26343 = 'component_26343';
export function Component26343({ value = 26343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26343, 'data-value': derived.doubled }, children);
}
export default Component26343;
