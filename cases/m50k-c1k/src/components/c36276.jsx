import React from 'react';
const LABEL_36276 = 'component_36276';
export function Component36276({ value = 36276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36276, 'data-value': derived.doubled }, children);
}
export default Component36276;
