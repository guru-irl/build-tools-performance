import React from 'react';
const LABEL_30601 = 'component_30601';
export function Component30601({ value = 30601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30601, 'data-value': derived.doubled }, children);
}
export default Component30601;
