import React from 'react';
const LABEL_30826 = 'component_30826';
export function Component30826({ value = 30826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30826, 'data-value': derived.doubled }, children);
}
export default Component30826;
