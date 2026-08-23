import React from 'react';
const LABEL_22056 = 'component_22056';
export function Component22056({ value = 22056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22056, 'data-value': derived.doubled }, children);
}
export default Component22056;
