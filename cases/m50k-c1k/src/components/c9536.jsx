import React from 'react';
const LABEL_9536 = 'component_9536';
export function Component9536({ value = 9536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9536, 'data-value': derived.doubled }, children);
}
export default Component9536;
