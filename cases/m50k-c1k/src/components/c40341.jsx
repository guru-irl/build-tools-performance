import React from 'react';
const LABEL_40341 = 'component_40341';
export function Component40341({ value = 40341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40341, 'data-value': derived.doubled }, children);
}
export default Component40341;
