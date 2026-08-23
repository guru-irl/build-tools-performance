import React from 'react';
const LABEL_34202 = 'component_34202';
export function Component34202({ value = 34202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34202, 'data-value': derived.doubled }, children);
}
export default Component34202;
