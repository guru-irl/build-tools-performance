import React from 'react';
const LABEL_14276 = 'component_14276';
export function Component14276({ value = 14276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14276, 'data-value': derived.doubled }, children);
}
export default Component14276;
