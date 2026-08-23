import React from 'react';
const LABEL_30425 = 'component_30425';
export function Component30425({ value = 30425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30425, 'data-value': derived.doubled }, children);
}
export default Component30425;
