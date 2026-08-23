import React from 'react';
const LABEL_33056 = 'component_33056';
export function Component33056({ value = 33056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33056, 'data-value': derived.doubled }, children);
}
export default Component33056;
