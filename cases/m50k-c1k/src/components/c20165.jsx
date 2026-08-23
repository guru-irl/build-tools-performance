import React from 'react';
const LABEL_20165 = 'component_20165';
export function Component20165({ value = 20165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20165, 'data-value': derived.doubled }, children);
}
export default Component20165;
