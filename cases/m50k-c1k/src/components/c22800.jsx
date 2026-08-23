import React from 'react';
const LABEL_22800 = 'component_22800';
export function Component22800({ value = 22800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22800, 'data-value': derived.doubled }, children);
}
export default Component22800;
