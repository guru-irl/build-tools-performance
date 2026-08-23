import React from 'react';
const LABEL_9364 = 'component_9364';
export function Component9364({ value = 9364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9364, 'data-value': derived.doubled }, children);
}
export default Component9364;
