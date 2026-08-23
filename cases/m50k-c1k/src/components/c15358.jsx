import React from 'react';
const LABEL_15358 = 'component_15358';
export function Component15358({ value = 15358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15358, 'data-value': derived.doubled }, children);
}
export default Component15358;
