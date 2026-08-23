import React from 'react';
const LABEL_26276 = 'component_26276';
export function Component26276({ value = 26276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26276, 'data-value': derived.doubled }, children);
}
export default Component26276;
