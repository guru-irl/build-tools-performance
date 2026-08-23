import React from 'react';
const LABEL_13358 = 'component_13358';
export function Component13358({ value = 13358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13358, 'data-value': derived.doubled }, children);
}
export default Component13358;
