import React from 'react';
const LABEL_21796 = 'component_21796';
export function Component21796({ value = 21796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21796, 'data-value': derived.doubled }, children);
}
export default Component21796;
