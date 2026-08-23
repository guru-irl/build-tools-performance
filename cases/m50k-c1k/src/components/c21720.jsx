import React from 'react';
const LABEL_21720 = 'component_21720';
export function Component21720({ value = 21720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21720, 'data-value': derived.doubled }, children);
}
export default Component21720;
