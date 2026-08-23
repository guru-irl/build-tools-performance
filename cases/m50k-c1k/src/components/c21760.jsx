import React from 'react';
const LABEL_21760 = 'component_21760';
export function Component21760({ value = 21760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21760, 'data-value': derived.doubled }, children);
}
export default Component21760;
