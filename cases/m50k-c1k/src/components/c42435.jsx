import React from 'react';
const LABEL_42435 = 'component_42435';
export function Component42435({ value = 42435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42435, 'data-value': derived.doubled }, children);
}
export default Component42435;
