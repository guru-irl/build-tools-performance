import React from 'react';
const LABEL_16431 = 'component_16431';
export function Component16431({ value = 16431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16431, 'data-value': derived.doubled }, children);
}
export default Component16431;
