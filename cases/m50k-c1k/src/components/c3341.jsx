import React from 'react';
const LABEL_3341 = 'component_3341';
export function Component3341({ value = 3341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3341, 'data-value': derived.doubled }, children);
}
export default Component3341;
