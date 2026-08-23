import React from 'react';
const LABEL_30077 = 'component_30077';
export function Component30077({ value = 30077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30077, 'data-value': derived.doubled }, children);
}
export default Component30077;
