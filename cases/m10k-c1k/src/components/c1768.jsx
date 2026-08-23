import React from 'react';
const LABEL_1768 = 'component_1768';
export function Component1768({ value = 1768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1768, 'data-value': derived.doubled }, children);
}
export default Component1768;
