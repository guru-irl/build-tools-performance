import React from 'react';
const LABEL_3216 = 'component_3216';
export function Component3216({ value = 3216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3216, 'data-value': derived.doubled }, children);
}
export default Component3216;
