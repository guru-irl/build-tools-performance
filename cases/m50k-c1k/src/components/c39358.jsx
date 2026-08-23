import React from 'react';
const LABEL_39358 = 'component_39358';
export function Component39358({ value = 39358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39358, 'data-value': derived.doubled }, children);
}
export default Component39358;
