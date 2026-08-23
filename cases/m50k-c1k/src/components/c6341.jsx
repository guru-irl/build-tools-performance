import React from 'react';
const LABEL_6341 = 'component_6341';
export function Component6341({ value = 6341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6341, 'data-value': derived.doubled }, children);
}
export default Component6341;
