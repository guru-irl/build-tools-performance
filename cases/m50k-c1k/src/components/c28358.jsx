import React from 'react';
const LABEL_28358 = 'component_28358';
export function Component28358({ value = 28358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28358, 'data-value': derived.doubled }, children);
}
export default Component28358;
