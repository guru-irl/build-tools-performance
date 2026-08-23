import React from 'react';
const LABEL_44341 = 'component_44341';
export function Component44341({ value = 44341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44341, 'data-value': derived.doubled }, children);
}
export default Component44341;
