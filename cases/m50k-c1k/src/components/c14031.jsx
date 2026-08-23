import React from 'react';
const LABEL_14031 = 'component_14031';
export function Component14031({ value = 14031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14031, 'data-value': derived.doubled }, children);
}
export default Component14031;
