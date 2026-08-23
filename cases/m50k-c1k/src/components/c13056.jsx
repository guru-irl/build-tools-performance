import React from 'react';
const LABEL_13056 = 'component_13056';
export function Component13056({ value = 13056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13056, 'data-value': derived.doubled }, children);
}
export default Component13056;
