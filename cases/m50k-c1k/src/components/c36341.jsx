import React from 'react';
const LABEL_36341 = 'component_36341';
export function Component36341({ value = 36341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36341, 'data-value': derived.doubled }, children);
}
export default Component36341;
