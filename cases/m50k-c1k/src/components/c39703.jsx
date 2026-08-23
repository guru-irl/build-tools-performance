import React from 'react';
const LABEL_39703 = 'component_39703';
export function Component39703({ value = 39703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39703, 'data-value': derived.doubled }, children);
}
export default Component39703;
