import React from 'react';
const LABEL_35703 = 'component_35703';
export function Component35703({ value = 35703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35703, 'data-value': derived.doubled }, children);
}
export default Component35703;
