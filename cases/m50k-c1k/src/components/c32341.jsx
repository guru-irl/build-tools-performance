import React from 'react';
const LABEL_32341 = 'component_32341';
export function Component32341({ value = 32341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32341, 'data-value': derived.doubled }, children);
}
export default Component32341;
