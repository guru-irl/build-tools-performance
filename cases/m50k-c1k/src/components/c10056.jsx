import React from 'react';
const LABEL_10056 = 'component_10056';
export function Component10056({ value = 10056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10056, 'data-value': derived.doubled }, children);
}
export default Component10056;
