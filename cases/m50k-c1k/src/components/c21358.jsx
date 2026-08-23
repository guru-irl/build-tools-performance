import React from 'react';
const LABEL_21358 = 'component_21358';
export function Component21358({ value = 21358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21358, 'data-value': derived.doubled }, children);
}
export default Component21358;
