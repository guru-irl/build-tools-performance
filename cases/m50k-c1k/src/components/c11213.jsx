import React from 'react';
const LABEL_11213 = 'component_11213';
export function Component11213({ value = 11213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11213, 'data-value': derived.doubled }, children);
}
export default Component11213;
