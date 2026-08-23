import React from 'react';
const LABEL_23442 = 'component_23442';
export function Component23442({ value = 23442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23442, 'data-value': derived.doubled }, children);
}
export default Component23442;
