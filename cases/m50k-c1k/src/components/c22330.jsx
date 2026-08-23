import React from 'react';
const LABEL_22330 = 'component_22330';
export function Component22330({ value = 22330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22330, 'data-value': derived.doubled }, children);
}
export default Component22330;
