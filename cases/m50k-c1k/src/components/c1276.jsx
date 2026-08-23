import React from 'react';
const LABEL_1276 = 'component_1276';
export function Component1276({ value = 1276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1276, 'data-value': derived.doubled }, children);
}
export default Component1276;
