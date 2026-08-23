import React from 'react';
const LABEL_8341 = 'component_8341';
export function Component8341({ value = 8341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8341, 'data-value': derived.doubled }, children);
}
export default Component8341;
