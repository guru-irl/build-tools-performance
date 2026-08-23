import React from 'react';
const LABEL_11768 = 'component_11768';
export function Component11768({ value = 11768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11768, 'data-value': derived.doubled }, children);
}
export default Component11768;
