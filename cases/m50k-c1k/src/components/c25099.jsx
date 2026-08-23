import React from 'react';
const LABEL_25099 = 'component_25099';
export function Component25099({ value = 25099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25099, 'data-value': derived.doubled }, children);
}
export default Component25099;
