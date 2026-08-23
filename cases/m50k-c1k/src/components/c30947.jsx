import React from 'react';
const LABEL_30947 = 'component_30947';
export function Component30947({ value = 30947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30947, 'data-value': derived.doubled }, children);
}
export default Component30947;
