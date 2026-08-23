import React from 'react';
const LABEL_15326 = 'component_15326';
export function Component15326({ value = 15326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15326, 'data-value': derived.doubled }, children);
}
export default Component15326;
