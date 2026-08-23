import React from 'react';
const LABEL_276 = 'component_276';
export function Component276({ value = 276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_276, 'data-value': derived.doubled }, children);
}
export default Component276;
