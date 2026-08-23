import React from 'react';
const LABEL_39434 = 'component_39434';
export function Component39434({ value = 39434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39434, 'data-value': derived.doubled }, children);
}
export default Component39434;
