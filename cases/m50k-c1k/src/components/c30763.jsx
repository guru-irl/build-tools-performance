import React from 'react';
const LABEL_30763 = 'component_30763';
export function Component30763({ value = 30763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30763, 'data-value': derived.doubled }, children);
}
export default Component30763;
