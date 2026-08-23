import React from 'react';
const LABEL_24056 = 'component_24056';
export function Component24056({ value = 24056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24056, 'data-value': derived.doubled }, children);
}
export default Component24056;
