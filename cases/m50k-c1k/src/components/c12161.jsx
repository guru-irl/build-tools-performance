import React from 'react';
const LABEL_12161 = 'component_12161';
export function Component12161({ value = 12161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12161, 'data-value': derived.doubled }, children);
}
export default Component12161;
