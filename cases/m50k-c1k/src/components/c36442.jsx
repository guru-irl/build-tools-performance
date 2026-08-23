import React from 'react';
const LABEL_36442 = 'component_36442';
export function Component36442({ value = 36442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36442, 'data-value': derived.doubled }, children);
}
export default Component36442;
