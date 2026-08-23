import React from 'react';
const LABEL_35455 = 'component_35455';
export function Component35455({ value = 35455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35455, 'data-value': derived.doubled }, children);
}
export default Component35455;
