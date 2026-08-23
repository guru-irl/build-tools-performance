import React from 'react';
const LABEL_21229 = 'component_21229';
export function Component21229({ value = 21229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21229, 'data-value': derived.doubled }, children);
}
export default Component21229;
