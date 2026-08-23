import React from 'react';
const LABEL_30167 = 'component_30167';
export function Component30167({ value = 30167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30167, 'data-value': derived.doubled }, children);
}
export default Component30167;
