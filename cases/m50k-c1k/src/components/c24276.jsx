import React from 'react';
const LABEL_24276 = 'component_24276';
export function Component24276({ value = 24276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24276, 'data-value': derived.doubled }, children);
}
export default Component24276;
