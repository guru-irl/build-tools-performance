import React from 'react';
const LABEL_16681 = 'component_16681';
export function Component16681({ value = 16681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16681, 'data-value': derived.doubled }, children);
}
export default Component16681;
