import React from 'react';
const LABEL_34918 = 'component_34918';
export function Component34918({ value = 34918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34918, 'data-value': derived.doubled }, children);
}
export default Component34918;
