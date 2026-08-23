import React from 'react';
const LABEL_32703 = 'component_32703';
export function Component32703({ value = 32703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32703, 'data-value': derived.doubled }, children);
}
export default Component32703;
