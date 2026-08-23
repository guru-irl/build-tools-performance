import React from 'react';
const LABEL_13703 = 'component_13703';
export function Component13703({ value = 13703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13703, 'data-value': derived.doubled }, children);
}
export default Component13703;
