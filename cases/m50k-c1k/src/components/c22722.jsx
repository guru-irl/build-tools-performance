import React from 'react';
const LABEL_22722 = 'component_22722';
export function Component22722({ value = 22722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22722, 'data-value': derived.doubled }, children);
}
export default Component22722;
