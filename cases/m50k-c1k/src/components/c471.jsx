import React from 'react';
const LABEL_471 = 'component_471';
export function Component471({ value = 471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_471, 'data-value': derived.doubled }, children);
}
export default Component471;
