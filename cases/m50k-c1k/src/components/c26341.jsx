import React from 'react';
const LABEL_26341 = 'component_26341';
export function Component26341({ value = 26341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26341, 'data-value': derived.doubled }, children);
}
export default Component26341;
