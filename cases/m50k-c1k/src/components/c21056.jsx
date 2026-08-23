import React from 'react';
const LABEL_21056 = 'component_21056';
export function Component21056({ value = 21056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21056, 'data-value': derived.doubled }, children);
}
export default Component21056;
