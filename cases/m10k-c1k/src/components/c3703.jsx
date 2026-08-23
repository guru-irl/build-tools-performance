import React from 'react';
const LABEL_3703 = 'component_3703';
export function Component3703({ value = 3703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3703, 'data-value': derived.doubled }, children);
}
export default Component3703;
