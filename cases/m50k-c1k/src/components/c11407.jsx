import React from 'react';
const LABEL_11407 = 'component_11407';
export function Component11407({ value = 11407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11407, 'data-value': derived.doubled }, children);
}
export default Component11407;
