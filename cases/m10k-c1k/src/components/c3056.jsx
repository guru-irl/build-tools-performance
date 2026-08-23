import React from 'react';
const LABEL_3056 = 'component_3056';
export function Component3056({ value = 3056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3056, 'data-value': derived.doubled }, children);
}
export default Component3056;
