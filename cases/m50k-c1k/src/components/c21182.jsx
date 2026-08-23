import React from 'react';
const LABEL_21182 = 'component_21182';
export function Component21182({ value = 21182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21182, 'data-value': derived.doubled }, children);
}
export default Component21182;
