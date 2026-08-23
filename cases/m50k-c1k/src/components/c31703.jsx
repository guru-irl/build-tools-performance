import React from 'react';
const LABEL_31703 = 'component_31703';
export function Component31703({ value = 31703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31703, 'data-value': derived.doubled }, children);
}
export default Component31703;
