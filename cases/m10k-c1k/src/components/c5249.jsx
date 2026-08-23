import React from 'react';
const LABEL_5249 = 'component_5249';
export function Component5249({ value = 5249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5249, 'data-value': derived.doubled }, children);
}
export default Component5249;
