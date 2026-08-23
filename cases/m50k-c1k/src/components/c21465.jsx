import React from 'react';
const LABEL_21465 = 'component_21465';
export function Component21465({ value = 21465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21465, 'data-value': derived.doubled }, children);
}
export default Component21465;
