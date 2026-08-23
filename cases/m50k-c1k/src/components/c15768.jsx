import React from 'react';
const LABEL_15768 = 'component_15768';
export function Component15768({ value = 15768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15768, 'data-value': derived.doubled }, children);
}
export default Component15768;
