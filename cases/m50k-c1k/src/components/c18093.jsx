import React from 'react';
const LABEL_18093 = 'component_18093';
export function Component18093({ value = 18093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18093, 'data-value': derived.doubled }, children);
}
export default Component18093;
