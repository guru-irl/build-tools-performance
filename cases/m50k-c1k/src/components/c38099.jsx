import React from 'react';
const LABEL_38099 = 'component_38099';
export function Component38099({ value = 38099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38099, 'data-value': derived.doubled }, children);
}
export default Component38099;
