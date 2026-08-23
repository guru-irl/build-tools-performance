import React from 'react';
const LABEL_38659 = 'component_38659';
export function Component38659({ value = 38659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38659, 'data-value': derived.doubled }, children);
}
export default Component38659;
