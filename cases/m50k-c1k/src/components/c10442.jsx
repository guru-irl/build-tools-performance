import React from 'react';
const LABEL_10442 = 'component_10442';
export function Component10442({ value = 10442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10442, 'data-value': derived.doubled }, children);
}
export default Component10442;
