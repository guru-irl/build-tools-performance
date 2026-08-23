import React from 'react';
const LABEL_32054 = 'component_32054';
export function Component32054({ value = 32054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32054, 'data-value': derived.doubled }, children);
}
export default Component32054;
