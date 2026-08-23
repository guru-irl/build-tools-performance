import React from 'react';
const LABEL_30095 = 'component_30095';
export function Component30095({ value = 30095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30095, 'data-value': derived.doubled }, children);
}
export default Component30095;
