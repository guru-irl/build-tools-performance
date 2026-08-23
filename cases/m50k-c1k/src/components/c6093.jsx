import React from 'react';
const LABEL_6093 = 'component_6093';
export function Component6093({ value = 6093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6093, 'data-value': derived.doubled }, children);
}
export default Component6093;
