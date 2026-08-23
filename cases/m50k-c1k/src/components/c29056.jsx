import React from 'react';
const LABEL_29056 = 'component_29056';
export function Component29056({ value = 29056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29056, 'data-value': derived.doubled }, children);
}
export default Component29056;
