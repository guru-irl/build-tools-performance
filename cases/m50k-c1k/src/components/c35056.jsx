import React from 'react';
const LABEL_35056 = 'component_35056';
export function Component35056({ value = 35056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35056, 'data-value': derived.doubled }, children);
}
export default Component35056;
