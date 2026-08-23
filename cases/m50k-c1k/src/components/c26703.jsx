import React from 'react';
const LABEL_26703 = 'component_26703';
export function Component26703({ value = 26703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26703, 'data-value': derived.doubled }, children);
}
export default Component26703;
