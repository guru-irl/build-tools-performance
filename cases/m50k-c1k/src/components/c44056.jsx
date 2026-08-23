import React from 'react';
const LABEL_44056 = 'component_44056';
export function Component44056({ value = 44056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44056, 'data-value': derived.doubled }, children);
}
export default Component44056;
