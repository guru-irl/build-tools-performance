import React from 'react';
const LABEL_22493 = 'component_22493';
export function Component22493({ value = 22493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22493, 'data-value': derived.doubled }, children);
}
export default Component22493;
