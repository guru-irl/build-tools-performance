import React from 'react';
const LABEL_21343 = 'component_21343';
export function Component21343({ value = 21343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21343, 'data-value': derived.doubled }, children);
}
export default Component21343;
