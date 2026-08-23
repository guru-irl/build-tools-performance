import React from 'react';
const LABEL_34653 = 'component_34653';
export function Component34653({ value = 34653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34653, 'data-value': derived.doubled }, children);
}
export default Component34653;
