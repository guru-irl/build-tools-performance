import React from 'react';
const LABEL_19358 = 'component_19358';
export function Component19358({ value = 19358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19358, 'data-value': derived.doubled }, children);
}
export default Component19358;
