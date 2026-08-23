import React from 'react';
const LABEL_25406 = 'component_25406';
export function Component25406({ value = 25406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25406, 'data-value': derived.doubled }, children);
}
export default Component25406;
