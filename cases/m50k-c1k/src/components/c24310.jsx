import React from 'react';
const LABEL_24310 = 'component_24310';
export function Component24310({ value = 24310, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24310, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24310, 'data-value': derived.doubled }, children);
}
export default Component24310;
