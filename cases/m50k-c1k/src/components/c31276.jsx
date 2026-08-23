import React from 'react';
const LABEL_31276 = 'component_31276';
export function Component31276({ value = 31276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31276, 'data-value': derived.doubled }, children);
}
export default Component31276;
