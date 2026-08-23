import React from 'react';
const LABEL_11056 = 'component_11056';
export function Component11056({ value = 11056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11056, 'data-value': derived.doubled }, children);
}
export default Component11056;
