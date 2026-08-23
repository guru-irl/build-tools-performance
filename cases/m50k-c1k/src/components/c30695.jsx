import React from 'react';
const LABEL_30695 = 'component_30695';
export function Component30695({ value = 30695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30695, 'data-value': derived.doubled }, children);
}
export default Component30695;
