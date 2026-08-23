import React from 'react';
const LABEL_34768 = 'component_34768';
export function Component34768({ value = 34768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34768, 'data-value': derived.doubled }, children);
}
export default Component34768;
