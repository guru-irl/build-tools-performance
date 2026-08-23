import React from 'react';
const LABEL_20213 = 'component_20213';
export function Component20213({ value = 20213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20213, 'data-value': derived.doubled }, children);
}
export default Component20213;
