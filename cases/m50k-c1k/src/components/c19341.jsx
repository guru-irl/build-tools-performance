import React from 'react';
const LABEL_19341 = 'component_19341';
export function Component19341({ value = 19341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19341, 'data-value': derived.doubled }, children);
}
export default Component19341;
