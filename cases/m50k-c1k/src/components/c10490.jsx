import React from 'react';
const LABEL_10490 = 'component_10490';
export function Component10490({ value = 10490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10490, 'data-value': derived.doubled }, children);
}
export default Component10490;
