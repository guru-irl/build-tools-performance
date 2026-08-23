import React from 'react';
const LABEL_20358 = 'component_20358';
export function Component20358({ value = 20358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20358, 'data-value': derived.doubled }, children);
}
export default Component20358;
