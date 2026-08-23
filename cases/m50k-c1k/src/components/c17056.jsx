import React from 'react';
const LABEL_17056 = 'component_17056';
export function Component17056({ value = 17056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17056, 'data-value': derived.doubled }, children);
}
export default Component17056;
