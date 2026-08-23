import React from 'react';
const LABEL_12768 = 'component_12768';
export function Component12768({ value = 12768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12768, 'data-value': derived.doubled }, children);
}
export default Component12768;
