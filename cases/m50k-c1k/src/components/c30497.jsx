import React from 'react';
const LABEL_30497 = 'component_30497';
export function Component30497({ value = 30497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30497, 'data-value': derived.doubled }, children);
}
export default Component30497;
