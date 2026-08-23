import React from 'react';
const LABEL_32056 = 'component_32056';
export function Component32056({ value = 32056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32056, 'data-value': derived.doubled }, children);
}
export default Component32056;
