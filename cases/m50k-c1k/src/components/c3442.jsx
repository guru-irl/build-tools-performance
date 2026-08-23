import React from 'react';
const LABEL_3442 = 'component_3442';
export function Component3442({ value = 3442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3442, 'data-value': derived.doubled }, children);
}
export default Component3442;
