import React from 'react';
const LABEL_37341 = 'component_37341';
export function Component37341({ value = 37341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37341, 'data-value': derived.doubled }, children);
}
export default Component37341;
