import React from 'react';
const LABEL_12703 = 'component_12703';
export function Component12703({ value = 12703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12703, 'data-value': derived.doubled }, children);
}
export default Component12703;
