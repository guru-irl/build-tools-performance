import React from 'react';
const LABEL_26358 = 'component_26358';
export function Component26358({ value = 26358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26358, 'data-value': derived.doubled }, children);
}
export default Component26358;
