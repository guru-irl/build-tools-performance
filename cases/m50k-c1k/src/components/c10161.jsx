import React from 'react';
const LABEL_10161 = 'component_10161';
export function Component10161({ value = 10161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10161, 'data-value': derived.doubled }, children);
}
export default Component10161;
