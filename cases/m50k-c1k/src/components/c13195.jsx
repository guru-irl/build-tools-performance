import React from 'react';
const LABEL_13195 = 'component_13195';
export function Component13195({ value = 13195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13195, 'data-value': derived.doubled }, children);
}
export default Component13195;
