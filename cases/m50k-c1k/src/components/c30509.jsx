import React from 'react';
const LABEL_30509 = 'component_30509';
export function Component30509({ value = 30509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30509, 'data-value': derived.doubled }, children);
}
export default Component30509;
