import React from 'react';
const LABEL_10276 = 'component_10276';
export function Component10276({ value = 10276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10276, 'data-value': derived.doubled }, children);
}
export default Component10276;
