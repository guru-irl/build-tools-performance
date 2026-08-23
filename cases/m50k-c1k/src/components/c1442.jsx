import React from 'react';
const LABEL_1442 = 'component_1442';
export function Component1442({ value = 1442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1442, 'data-value': derived.doubled }, children);
}
export default Component1442;
