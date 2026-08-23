import React from 'react';
const LABEL_21377 = 'component_21377';
export function Component21377({ value = 21377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21377, 'data-value': derived.doubled }, children);
}
export default Component21377;
