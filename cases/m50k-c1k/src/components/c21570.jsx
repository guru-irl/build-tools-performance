import React from 'react';
const LABEL_21570 = 'component_21570';
export function Component21570({ value = 21570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21570, 'data-value': derived.doubled }, children);
}
export default Component21570;
