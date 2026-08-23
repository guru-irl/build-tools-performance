import React from 'react';
const LABEL_21164 = 'component_21164';
export function Component21164({ value = 21164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21164, 'data-value': derived.doubled }, children);
}
export default Component21164;
