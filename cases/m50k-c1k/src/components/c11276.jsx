import React from 'react';
const LABEL_11276 = 'component_11276';
export function Component11276({ value = 11276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11276, 'data-value': derived.doubled }, children);
}
export default Component11276;
