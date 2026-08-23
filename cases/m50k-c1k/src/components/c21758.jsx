import React from 'react';
const LABEL_21758 = 'component_21758';
export function Component21758({ value = 21758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21758, 'data-value': derived.doubled }, children);
}
export default Component21758;
