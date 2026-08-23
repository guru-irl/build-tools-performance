import React from 'react';
const LABEL_23054 = 'component_23054';
export function Component23054({ value = 23054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23054, 'data-value': derived.doubled }, children);
}
export default Component23054;
