import React from 'react';
const LABEL_22093 = 'component_22093';
export function Component22093({ value = 22093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22093, 'data-value': derived.doubled }, children);
}
export default Component22093;
