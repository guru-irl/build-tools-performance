import React from 'react';
const LABEL_18703 = 'component_18703';
export function Component18703({ value = 18703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18703, 'data-value': derived.doubled }, children);
}
export default Component18703;
