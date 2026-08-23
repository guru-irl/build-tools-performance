import React from 'react';
const LABEL_30703 = 'component_30703';
export function Component30703({ value = 30703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30703, 'data-value': derived.doubled }, children);
}
export default Component30703;
