import React from 'react';
const LABEL_22753 = 'component_22753';
export function Component22753({ value = 22753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22753, 'data-value': derived.doubled }, children);
}
export default Component22753;
