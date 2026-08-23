import React from 'react';
const LABEL_11968 = 'component_11968';
export function Component11968({ value = 11968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11968, 'data-value': derived.doubled }, children);
}
export default Component11968;
