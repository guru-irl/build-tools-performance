import React from 'react';
const LABEL_30603 = 'component_30603';
export function Component30603({ value = 30603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30603, 'data-value': derived.doubled }, children);
}
export default Component30603;
