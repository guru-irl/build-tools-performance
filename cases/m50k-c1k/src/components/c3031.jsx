import React from 'react';
const LABEL_3031 = 'component_3031';
export function Component3031({ value = 3031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3031, 'data-value': derived.doubled }, children);
}
export default Component3031;
