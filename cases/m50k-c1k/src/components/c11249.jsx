import React from 'react';
const LABEL_11249 = 'component_11249';
export function Component11249({ value = 11249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11249, 'data-value': derived.doubled }, children);
}
export default Component11249;
