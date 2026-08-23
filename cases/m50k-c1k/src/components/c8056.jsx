import React from 'react';
const LABEL_8056 = 'component_8056';
export function Component8056({ value = 8056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8056, 'data-value': derived.doubled }, children);
}
export default Component8056;
