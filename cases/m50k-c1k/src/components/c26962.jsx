import React from 'react';
const LABEL_26962 = 'component_26962';
export function Component26962({ value = 26962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26962, 'data-value': derived.doubled }, children);
}
export default Component26962;
