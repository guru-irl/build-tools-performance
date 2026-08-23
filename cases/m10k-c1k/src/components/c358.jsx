import React from 'react';
const LABEL_358 = 'component_358';
export function Component358({ value = 358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_358, 'data-value': derived.doubled }, children);
}
export default Component358;
