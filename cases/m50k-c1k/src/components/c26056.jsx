import React from 'react';
const LABEL_26056 = 'component_26056';
export function Component26056({ value = 26056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26056, 'data-value': derived.doubled }, children);
}
export default Component26056;
