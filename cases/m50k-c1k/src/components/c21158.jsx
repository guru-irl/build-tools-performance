import React from 'react';
const LABEL_21158 = 'component_21158';
export function Component21158({ value = 21158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21158, 'data-value': derived.doubled }, children);
}
export default Component21158;
