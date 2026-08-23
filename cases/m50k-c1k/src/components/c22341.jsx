import React from 'react';
const LABEL_22341 = 'component_22341';
export function Component22341({ value = 22341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22341, 'data-value': derived.doubled }, children);
}
export default Component22341;
