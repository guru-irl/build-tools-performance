import React from 'react';
const LABEL_38300 = 'component_38300';
export function Component38300({ value = 38300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38300, 'data-value': derived.doubled }, children);
}
export default Component38300;
