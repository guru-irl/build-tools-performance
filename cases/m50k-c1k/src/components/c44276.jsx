import React from 'react';
const LABEL_44276 = 'component_44276';
export function Component44276({ value = 44276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44276, 'data-value': derived.doubled }, children);
}
export default Component44276;
