import React from 'react';
const LABEL_22075 = 'component_22075';
export function Component22075({ value = 22075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22075, 'data-value': derived.doubled }, children);
}
export default Component22075;
