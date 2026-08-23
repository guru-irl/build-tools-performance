import React from 'react';
const LABEL_38435 = 'component_38435';
export function Component38435({ value = 38435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38435, 'data-value': derived.doubled }, children);
}
export default Component38435;
