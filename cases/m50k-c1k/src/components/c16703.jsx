import React from 'react';
const LABEL_16703 = 'component_16703';
export function Component16703({ value = 16703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16703, 'data-value': derived.doubled }, children);
}
export default Component16703;
