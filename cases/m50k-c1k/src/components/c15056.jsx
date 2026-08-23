import React from 'react';
const LABEL_15056 = 'component_15056';
export function Component15056({ value = 15056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15056, 'data-value': derived.doubled }, children);
}
export default Component15056;
