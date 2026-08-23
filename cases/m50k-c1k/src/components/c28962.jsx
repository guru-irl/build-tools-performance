import React from 'react';
const LABEL_28962 = 'component_28962';
export function Component28962({ value = 28962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28962, 'data-value': derived.doubled }, children);
}
export default Component28962;
