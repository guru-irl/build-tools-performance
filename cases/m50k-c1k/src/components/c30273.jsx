import React from 'react';
const LABEL_30273 = 'component_30273';
export function Component30273({ value = 30273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30273, 'data-value': derived.doubled }, children);
}
export default Component30273;
