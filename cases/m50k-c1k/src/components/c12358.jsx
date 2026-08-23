import React from 'react';
const LABEL_12358 = 'component_12358';
export function Component12358({ value = 12358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12358, 'data-value': derived.doubled }, children);
}
export default Component12358;
