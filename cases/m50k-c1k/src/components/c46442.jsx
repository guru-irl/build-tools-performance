import React from 'react';
const LABEL_46442 = 'component_46442';
export function Component46442({ value = 46442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46442, 'data-value': derived.doubled }, children);
}
export default Component46442;
