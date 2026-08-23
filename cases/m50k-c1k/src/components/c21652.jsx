import React from 'react';
const LABEL_21652 = 'component_21652';
export function Component21652({ value = 21652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21652, 'data-value': derived.doubled }, children);
}
export default Component21652;
