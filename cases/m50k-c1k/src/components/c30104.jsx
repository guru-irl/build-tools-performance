import React from 'react';
const LABEL_30104 = 'component_30104';
export function Component30104({ value = 30104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30104, 'data-value': derived.doubled }, children);
}
export default Component30104;
