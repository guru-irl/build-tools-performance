import React from 'react';
const LABEL_35768 = 'component_35768';
export function Component35768({ value = 35768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35768, 'data-value': derived.doubled }, children);
}
export default Component35768;
