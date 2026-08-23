import React from 'react';
const LABEL_40834 = 'component_40834';
export function Component40834({ value = 40834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40834, 'data-value': derived.doubled }, children);
}
export default Component40834;
