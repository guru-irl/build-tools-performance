import React from 'react';
const LABEL_22762 = 'component_22762';
export function Component22762({ value = 22762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22762, 'data-value': derived.doubled }, children);
}
export default Component22762;
