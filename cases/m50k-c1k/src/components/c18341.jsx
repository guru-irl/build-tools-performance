import React from 'react';
const LABEL_18341 = 'component_18341';
export function Component18341({ value = 18341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18341, 'data-value': derived.doubled }, children);
}
export default Component18341;
