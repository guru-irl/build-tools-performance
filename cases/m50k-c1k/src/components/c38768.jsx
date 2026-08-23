import React from 'react';
const LABEL_38768 = 'component_38768';
export function Component38768({ value = 38768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38768, 'data-value': derived.doubled }, children);
}
export default Component38768;
