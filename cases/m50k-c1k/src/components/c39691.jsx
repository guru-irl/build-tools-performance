import React from 'react';
const LABEL_39691 = 'component_39691';
export function Component39691({ value = 39691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39691, 'data-value': derived.doubled }, children);
}
export default Component39691;
