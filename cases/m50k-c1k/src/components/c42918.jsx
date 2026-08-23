import React from 'react';
const LABEL_42918 = 'component_42918';
export function Component42918({ value = 42918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42918, 'data-value': derived.doubled }, children);
}
export default Component42918;
