import React from 'react';
const LABEL_21248 = 'component_21248';
export function Component21248({ value = 21248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21248, 'data-value': derived.doubled }, children);
}
export default Component21248;
