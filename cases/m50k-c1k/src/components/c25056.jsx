import React from 'react';
const LABEL_25056 = 'component_25056';
export function Component25056({ value = 25056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25056, 'data-value': derived.doubled }, children);
}
export default Component25056;
