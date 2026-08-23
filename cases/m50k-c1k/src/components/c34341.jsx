import React from 'react';
const LABEL_34341 = 'component_34341';
export function Component34341({ value = 34341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34341, 'data-value': derived.doubled }, children);
}
export default Component34341;
