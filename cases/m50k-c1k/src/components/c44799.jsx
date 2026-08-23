import React from 'react';
const LABEL_44799 = 'component_44799';
export function Component44799({ value = 44799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44799, 'data-value': derived.doubled }, children);
}
export default Component44799;
