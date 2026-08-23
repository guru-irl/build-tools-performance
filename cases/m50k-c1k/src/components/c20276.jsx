import React from 'react';
const LABEL_20276 = 'component_20276';
export function Component20276({ value = 20276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20276, 'data-value': derived.doubled }, children);
}
export default Component20276;
