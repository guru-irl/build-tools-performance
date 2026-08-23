import React from 'react';
const LABEL_21889 = 'component_21889';
export function Component21889({ value = 21889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21889, 'data-value': derived.doubled }, children);
}
export default Component21889;
