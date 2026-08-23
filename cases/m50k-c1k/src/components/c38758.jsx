import React from 'react';
const LABEL_38758 = 'component_38758';
export function Component38758({ value = 38758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38758, 'data-value': derived.doubled }, children);
}
export default Component38758;
